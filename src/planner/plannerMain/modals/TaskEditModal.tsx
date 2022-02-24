import React, { useEffect, useRef, useState } from 'react'
import { Alert, Animated, Modal, ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import { Text, TouchableIcon } from '../../../component/CustomComponent'
import { PlannerContextType, PlannerDataType, TASKEDITMODAL, TaskType, useContextOfPlanner } from '../../PlannerProvider';
import AsyncStorage from '@react-native-async-storage/async-storage'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DropDownPicker from 'react-native-dropdown-picker';
import { colors } from './TaskAddModal';

export default function TaskEditModal() {
    const cont = useContextOfPlanner()
    const [open, setOpen] = useState(false);
    const [selectedSubject, setSelectedSubject] = useState<string>('getSubjectOfTask(cont)');
    const [editedTaskTitle, setEditedTaskTitle] = useState(cont.TASKEDITMODAL_selectedTask.title)
    const [editedColor, setEditedColor] = useState<string>(cont.TASKEDITMODAL_selectedTask.color)
    const [subjects, setSubjects] = useState<{ label: string; value: string; }[]>([])
    useEffect(() => {
        AsyncStorage.getItem('PlannerSubjects')
            .then(res => {
                if (res !== null)
                    setSubjects(JSON.parse(res))
            })
    }, []) // 의존성에 subjects 있어야 하지 않을까? TaskAddModal.tsx 에서 추가, 삭제 가능하므로

    let editedStatus = cont.TASKEDITMODAL_selectedTask.status

    const completeButtonAnimVal = useRef(new Animated.Value(0)).current;
    useEffect(() => completeButtonAnimVal.setValue(editedStatus), []) // 0이면 완료 전, 1이면 완료
    // 스톱워치 실행중일 때 setValue가 계속 호출되는 것 같아 useEffect 안에 넣음

    const completeButtonAnim = {
        marginLeft: completeButtonAnimVal.interpolate({
            inputRange: [0, 1],
            outputRange: ['0%', '50%']
        })
    };

    function closeModal() {
        setOpen(false)
        cont.setCurrentModal(-1)
    }

    function onPressEdit() {
        let editedTaskForPushAnotherSubject = cont.TASKEDITMODAL_selectedTask // 임시로 아무거나
        cont.setData((prev: PlannerDataType) => {
            let next: PlannerDataType = JSON.parse(JSON.stringify(prev))
            let subjectChange = false
            prev.tasks.forEach((v, i) => {
                v.tasks.forEach((task, j) => {
                    if (task.taskId == cont.TASKEDITMODAL_selectedTask.taskId) {
                        editedTaskForPushAnotherSubject = {
                            title: editedTaskTitle,
                            status: editedStatus,
                            totalTime: task.totalTime,
                            taskId: task.taskId,
                            color: editedColor
                        }
                        if (v.subject == selectedSubject)
                            next.tasks[i].tasks[j] = editedTaskForPushAnotherSubject
                        else {
                            next.tasks[i].tasks.splice(j, 1)
                            subjectChange = true
                            if (next.tasks[i].tasks.length == 0)
                                next.tasks.splice(i, 1)
                        }
                        // break
                    }
                })
            })
            if (subjectChange) {
                let i = 0
                for (; i < next.tasks.length; ++i)
                    if (next.tasks[i].subject == selectedSubject) {
                        next.tasks[i].tasks.push(editedTaskForPushAnotherSubject)
                        break
                    }
                if (i == next.tasks.length) {
                    next.tasks.push({
                        subject: selectedSubject,
                        tasks: [editedTaskForPushAnotherSubject]
                    })
                }
            }
            AsyncStorage.setItem('Planner' + new Date().toISOString().slice(0, 10),
                JSON.stringify(next))
            return next
        })
        closeModal()
    }

    function onPressDelete() {
        Alert.alert('삭제', 'TASK를 삭제하겠습니까?', [{ text: '취소' }, {
            text: '확인', onPress: () => {
                cont.setData((prev: PlannerDataType) => {
                    let next: PlannerDataType = JSON.parse(JSON.stringify(prev))
                    for (let i = 0; i < prev.tasks.length; ++i)
                        for (let j = 0; j < prev.tasks[i].tasks.length; ++j)
                            if (prev.tasks[i].tasks[j].taskId
                                == cont.TASKEDITMODAL_selectedTask.taskId) {
                                next.tasks[i].tasks.splice(j, 1)
                                if (next.tasks[i].tasks.length == 0)
                                    next.tasks.splice(i, 1)
                                return next
                            }
                    return next // 여기로 안 옴
                })
                closeModal()
            }
        }])
    }

    return <Modal
        animationType="slide"
        transparent={true}
        visible={cont.currentModal == TASKEDITMODAL}
        onRequestClose={() => {
            cont.setCurrentModal(-1);
        }}
        onShow={() => {
            setEditedTaskTitle(cont.TASKEDITMODAL_selectedTask.title)
            setEditedColor(cont.TASKEDITMODAL_selectedTask.color)
            setSelectedSubject(getSubjectOfTask(cont))

        }}
    >
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
                    <Text style={{
                        marginTop: 5,
                        marginBottom: 12,
                    }}>과목명</Text>
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
                        listMode='SCROLLVIEW'
                    />
                    <Text style={{ marginTop: 10, marginBottom: 5 }}>TASK</Text>
                    <TextInput style={{ borderBottomWidth: 1, fontFamily: 'GodoM', paddingVertical: 5, borderColor: '#666' }}
                        placeholder='목표를 입력해주세요' value={editedTaskTitle} onChangeText={setEditedTaskTitle} />
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
                            }} key={i} onPress={() => { setEditedColor(v) }}>
                                {editedColor == v ? <Icon name='check-bold' color='#fff' size={20} /> : undefined}
                            </TouchableOpacity>)}
                    </View>

                    <Text style={{ marginTop: 35, marginBottom: 10 }}>TASK 완료 여부</Text>
                    <View style={{
                        width: '100%', height: 50, backgroundColor: '#F4F9F9', flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <Animated.View style={[{
                            width: '50%', height: '100%', backgroundColor: '#A4EBF3',
                            position: 'absolute', top: 0, left: 0
                        }, completeButtonAnim]} />
                        <TouchableOpacity activeOpacity={1} style={{ width: '50%' }}
                            onPress={() => {
                                Animated.timing(completeButtonAnimVal, {
                                    toValue: 0, useNativeDriver: false, duration: 100
                                }).start(() => { editedStatus = 0 })
                            }}>
                            <Text style={{ textAlign: 'center', color: '#1B262C' }}>완료 전</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={1} style={{ width: '50%' }}
                            onPress={() => {
                                Animated.timing(completeButtonAnimVal, {
                                    toValue: 1, useNativeDriver: false, duration: 100
                                }).start(() => { editedStatus = 1 })
                            }}>
                            <Text style={{ textAlign: 'center', color: '#1B262C' }}>완료</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: 35,
                        alignItems: 'center'
                    }}>
                        <TouchableIcon iconProps={{ name: 'delete', color: '#DA1212', size: 23 }}
                            style={{ padding: 5 }} onPress={onPressDelete} />
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <TouchableOpacity style={{
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
                            }} onPress={onPressEdit}>
                                <Text>적용</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    </Modal>
}

function getSubjectOfTask(cont: PlannerContextType) {
    for (let i of cont.data.tasks)
        for (let j of i.tasks)
            if (j.taskId == cont.TASKEDITMODAL_selectedTask.taskId)
                return i.subject
    return '오류'
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center"
    },
    modalView: {
        margin: 25,
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: 20,
        elevation: 5,
        maxHeight: '95%'
    },
})