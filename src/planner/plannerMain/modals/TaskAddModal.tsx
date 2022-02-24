import React, { useEffect, useState } from 'react'
import { Alert, Modal, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Text } from '../../../component/CustomComponent'
import { PlannerDataType, TASKADDMODAL, useContextOfPlanner } from '../../PlannerProvider'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const colors = ['#B0413E', '#F5853F', '#F2AF29', '#758E4F', '#007CBE', '#004BA8', '#011936']

export default function TaskAddModal() {
    const contOfPlanner = useContextOfPlanner()
    const [open, setOpen] = useState(false);
    const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
    const [task, setTask] = useState('')
    const [selectedColor, setSelectedColor] = useState<string | null>(null)
    const [subjects, setSubjects] = useState<{ label: string; value: string; }[]>([])
    useEffect(() => {
        AsyncStorage.getItem('PlannerSubjects')
            .then(res => {
                if (res !== null)
                    setSubjects(JSON.parse(res))
            })
    }, [])

    function onPressDeleteSubject(subjectName: string) {
        // value == subjectName 인데 파라미터로 받는 이유:
        // deleteSubject에서 setSubject를 호출하면서 DropdownPicker의 onChangeValue가 함께 호출됨
        // 따라서 과목이 사라지지가 않음.
        // -> 해결 방안으로, setValue(null)을 먼저 호출.
        // -> 이 때 value가 null이 되므로 기존 value를 파라미터로 받음.
        Alert.alert('삭제', '"' + selectedSubject + '"' + ' 과목을 삭제하겠습니까? 플래너의 일정은 삭제되지 않습니다.', [{ text: '취소' },
        {
            text: '확인', onPress: () => {
                setSelectedSubject(null)
                deleteSubject(subjectName)
            }
        }])
    }

    function deleteSubject(subjectName: string) {
        for (let i = 0; i < subjects.length; ++i)
            if (subjects[i].label == subjectName)
                setSubjects((prev) => {
                    let next = [...prev]
                    next.splice(i, 1)
                    AsyncStorage.setItem('PlannerSubjects', JSON.stringify(next))
                    return next
                })
    }

    function onPressAdd() {
        // cont에서 tasks 변경, storage에서 tasks 변경
        if (selectedSubject == null) {
            Alert.alert('과목 선택', '과목을 선택해주세요')
            return
        }
        if (task == '') {
            Alert.alert('목표 입력', '목표를 입력해주세요')
            return
        }
        if (selectedColor == null) {
            Alert.alert('색상 선택', 'TIME TABLE 색상을 선택해주세요')
            return
        }
        let nextTaskId: number = 0
        for (let i = 0; i < contOfPlanner.data.tasks.length; ++i)
            for (let j = 0; j < contOfPlanner.data.tasks[i].tasks.length; ++j)
                nextTaskId = Math.max(nextTaskId, contOfPlanner.data.tasks[i].tasks[j].taskId + 1)
        const nextTask = {
            title: task,
            status: 0,
            totalTime: 0,
            taskId: nextTaskId,
            color: selectedColor
        }
        contOfPlanner.setData((prev: PlannerDataType) => {
            let next: PlannerDataType = JSON.parse(JSON.stringify(prev)), i = 0
            for (; i < next.tasks.length; ++i)
                if (next.tasks[i].subject == selectedSubject) {
                    next.tasks[i].tasks.push(nextTask)
                    break
                }
            if (i == next.tasks.length) {
                next.tasks.push({
                    subject: selectedSubject,
                    tasks: [nextTask]
                })
            }
            AsyncStorage.setItem('Planner' + new Date().toISOString().slice(0, 10),
                JSON.stringify(next))
            return next
        })
        closeModal()
    }

    function closeModal() {
        setOpen(false)
        setSelectedSubject(null)
        setTask('')
        setSelectedColor(null)
        contOfPlanner.setCurrentModal(-1)
    }

    return <Modal
        animationType="slide"
        transparent={true}
        visible={contOfPlanner.currentModal == TASKADDMODAL}
        onRequestClose={() => {
            contOfPlanner.setCurrentModal(-1);
        }}
    >
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: "space-between",
                    alignItems: 'center',
                    marginTop: 5,
                    marginBottom: 12,
                }}>
                    <Text>과목명</Text>
                    {selectedSubject == null ? undefined :
                        <TouchableOpacity onPress={() => { onPressDeleteSubject(selectedSubject) }}>
                            <Text style={{ color: '#904E55', marginRight: 5, fontSize: 12 }}>과목 삭제</Text>
                        </TouchableOpacity>}
                </View>
                <DropDownPicker
                    textStyle={{ fontFamily: 'GodoM' }}
                    autoScroll={true}
                    open={open}
                    setOpen={setOpen}
                    multiple={false}
                    value={selectedSubject}
                    setValue={setSelectedSubject}
                    items={subjects}
                    containerStyle={{
                        paddingBottom: 0, minHeight: 500,
                        marginBottom: -428,
                        zIndex: open ? 1 : 0,
                    }}
                    placeholder='과목을 선택해주세요'
                    searchable={true}
                    addCustomItem={true}
                    searchPlaceholder='과목 검색 또는 추가'
                    listMode='SCROLLVIEW'
                    scrollViewProps={{ keyboardShouldPersistTaps: 'always' }}
                    onChangeValue={(current) => {
                        const cur = current == undefined ? '' : current.toString()
                        if (cur.length > 0 && !includes(subjects, cur))
                            setSubjects((prev) => {
                                let next = [...prev]
                                next.push({ label: cur, value: cur })
                                AsyncStorage.setItem('PlannerSubjects', JSON.stringify(next))
                                return next
                            })
                    }}
                />
                <Text style={{ marginTop: 10, marginBottom: 5 }}>TASK</Text>
                <TextInput style={{ borderBottomWidth: 1, fontFamily: 'GodoM', paddingVertical: 5, borderColor: '#666' }}
                    placeholder='목표를 입력해주세요' value={task} onChangeText={setTask} />
                <Text style={{ marginTop: 35, marginBottom: 10 }}>TIME TABLE 색상</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {colors.map((v, i) =>
                        <TouchableOpacity style={{
                            backgroundColor: v,
                            width: 32,
                            height: 32,
                            borderRadius: 30,
                            marginRight: 10,
                            alignItems: 'center', justifyContent: 'center'
                        }} key={i} onPress={() => { setSelectedColor(v) }}>
                            {selectedColor == v ? <Icon name='check-bold' color='#fff' size={20} /> : undefined}
                        </TouchableOpacity>)}
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    marginTop: 15,
                    alignItems: 'center'
                }}>
                    <TouchableOpacity style={{
                        // borderWidth: 1,
                        borderRadius: 10,
                        marginRight: 15,
                        paddingVertical: 5,
                        paddingHorizontal: 10
                    }} onPress={closeModal}>
                        <Text style={{ color: '#888' }}>취소</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        borderWidth: 1,
                        borderRadius: 10,
                        paddingVertical: 7,
                        paddingHorizontal: 12,
                        // backgroundColor: '#54FF51'
                    }} onPress={onPressAdd}>
                        <Text>추가</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </Modal>
}

function includes(subjects: {
    label: string;
    value: string;
}[], cur: string) {
    for (let i = 0; i < subjects.length; ++i) {
        if (subjects[i].label == cur)
            return true
    }
    return false
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center"
    },
    modalView: {
        margin: 25,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        elevation: 5
    },
})