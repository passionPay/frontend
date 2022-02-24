import React, { useState } from 'react'
import { Alert, Modal, StyleSheet, TouchableOpacity, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Text } from '../../../component/CustomComponent';
import { PlannerDataType, STARTINGMODAL, TasksType, useContextOfPlanner } from '../../PlannerProvider';

export default function StartingModal({ }) {
    const cont = useContextOfPlanner()
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState<string | null>(null)
    return <Modal
        animationType="slide"
        transparent={true}
        visible={cont.currentModal == STARTINGMODAL}
        onRequestClose={() => {
            cont.setCurrentModal(-1);
        }}
    >
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={{ marginTop: 7, marginBottom: 12 }}>공부 시작하기</Text>
                <DropDownPicker
                    textStyle={{ fontFamily: 'GodoM' }}
                    autoScroll={true}
                    open={open}
                    setOpen={setOpen}
                    multiple={false}
                    value={value}
                    setValue={setValue}
                    items={getFormatted(cont.data.tasks)}
                    containerStyle={{
                        paddingBottom: 0, minHeight: 500,
                        marginBottom: -428
                    }}
                    placeholder='시작할 공부를 선택해주세요'
                />
                <Text style={{ fontSize: 50, textAlign: 'center', marginVertical: 10 }}>
                    {getFormattedTime(cont.data.totalTime)}</Text>
                <TouchableOpacity onPress={() => {
                    if (value == null) {
                        Alert.alert('공부 선택', '시작할 공부를 선택해주세요')
                        return
                    }
                    cont.setData((prev: PlannerDataType) => {
                        const next: PlannerDataType = JSON.parse(JSON.stringify(prev))
                        next.timestamps.push({
                            timestampId: prev.timestamps.length > 0 ?
                                prev.timestamps[prev.timestamps.length - 1].timestampId + 1 : 1,
                            startTime: new Date().toTimeString().substring(0, 8),
                            endTime: new Date().toTimeString().substring(0, 8),
                            color: getTaskColor(Number(value), cont.data.tasks)
                        })
                        return next
                    })
                    cont.setStart(true) // cont.setData 이후에 와야됨. timestamp length가 1 이상이어야 되므로.
                    cont.setCurrentTaskId(Number(value))
                    setOpen(false)
                    setValue(null)
                    cont.setCurrentModal(-1)
                }} style={styles.touchableOpacity}>
                    <Text>타이머 시작</Text>
                </TouchableOpacity>
            </View>
        </View>
    </Modal> // setStart
}

function getFormattedTime(msec: number) {
    let h = Math.floor(msec / (1000 * 60 * 60))
    let hour = h < 10 ? '0' + h : h.toString()
    let m = Math.floor(msec / (1000 * 60)) % 60
    let min = m < 10 ? '0' + m : m.toString()
    let s = Math.floor(msec / 1000) % 60
    let sec = s < 10 ? '0' + s : s.toString()
    return hour + ':' + min + ':' + sec
}

function getFormatted(tasks: TasksType) {
    let ret: {
        label: string;
        value: string;
        parent?: string;
        disabled?: boolean
    }[] = []
    for (let i = 0; i < tasks.length; ++i) {
        ret.push({
            label: tasks[i].subject,
            value: tasks[i].subject,
            disabled: true
        })
        for (let j = tasks[i].tasks.length - 1; j >= 0; --j) {
            // 0 to length - 1 로 하니까 반대로 리스트되더라.. console.log는 순서대로 찍히는데
            ret.push({
                label: tasks[i].tasks[j].title,
                value: tasks[i].tasks[j].taskId.toString(),
                parent: tasks[i].subject
            })
        }
    }
    return ret
}

function getTaskColor(taskId: number, tasks: TasksType) {
    for (let i = 0; i < tasks.length; ++i)
        for (let j = 0; j < tasks[i].tasks.length; ++j)
            if (tasks[i].tasks[j].taskId == taskId)
                return tasks[i].tasks[j].color
    return '#000'
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
    touchableOpacity: {
        alignSelf: 'center',
        borderWidth: 0.5,
        borderRadius: 10,
        paddingVertical: 12,
        paddingHorizontal: 17,
        marginTop: 30,
        alignItems: 'center'
    }
})