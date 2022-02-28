import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Text } from '../../../component/CustomComponent'
import { TASKADDMODAL, TASKEDITMODAL, TasksType, TaskType, useContextOfPlanner } from '../../PlannerProvider'
import TaskStopWatch from './TaskStopWatch'

export default function Tasks() {
    const cont = useContextOfPlanner()

    function onPressTask(selectedTask: TaskType) {
        cont.setTASKEDITMODAL_selectedTask(selectedTask)
        cont.setCurrentModal(TASKEDITMODAL)
    }
    
    return <View style={styles.container}>
        <Text style={{
            borderBottomWidth: 0.5,
            fontFamily: 'SourceSansPro-Bold',
            paddingBottom: 5,
            fontSize: 12,
            borderColor: '#151515',
        }}>TASKS</Text>
        <View style={{ paddingHorizontal: 5 }}>
            {cont.data.tasks.map((v, i) => <View key={i}>
                <Text style={styles.subject}>{v.subject}</Text>
                {v.tasks.map((task, j) => <TouchableOpacity key={i + ',' + j}
                    style={styles.taskView} onPress={() => onPressTask(task)}>
                    <View style={[styles.colorView, {backgroundColor: task.color}]} />
                    <View style={{ flex: 1 }}>
                        <Text style={styles.taskTitle}>{task.title}</Text>
                        {task.totalTime == 0 && cont.currentTaskId != task.taskId ? undefined :
                            <TaskStopWatch initSec={task.totalTime} isRunning={cont.currentTaskId == task.taskId} />}
                    </View>
                    <StatusIcon status={task.status} />
                </TouchableOpacity>)}
            </View>)}
            <TouchableOpacity style={{
                alignItems: 'center',
                width: '100%',
                paddingVertical: 40
            }} onPress={() => { cont.setCurrentModal(TASKADDMODAL) }}>
                <Text style={{
                    fontSize: 12
                }}>+ 추가하기</Text>
            </TouchableOpacity>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 3,
        backgroundColor: '#0000',
        paddingRight: 7,
    },
    subject: {
        fontSize: 13,
        marginTop: 25,
        borderColor: '#494949',
        marginBottom: 10,
        // borderBottomWidth: 0.5,
        // paddingBottom: 4
    },
    taskView: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
    taskTitle: {
        fontSize: 12,
    },
    colorView: {
        width: 5,
        height: '100%',
        marginRight: 7,
        borderRadius: 2
    }
})

function StatusIcon({ status }) {
    return <Icon name={status == 0 ? 'checkbox-blank-outline' : 'checkbox-marked'}
        size={18} color={status == 0 ? '#494949' : '#1E96FC'} style={{ marginLeft: 20 }} />
}