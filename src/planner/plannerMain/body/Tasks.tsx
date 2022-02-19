import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Text } from '../../../component/CustomComponent'
import { TasksType } from '../PlannerMain'
import TaskStopWatch from './TaskStopWatch'

export default function Tasks({ tasks }: { tasks: TasksType }) {
    return <View style={styles.container}>
        {tasks.map((v, i) => <View key={i}>
            <Text style={styles.subject}>{v.subject}</Text>
            {v.tasks.map((task, j) => <TouchableOpacity key={i + ',' + j}
                style={styles.taskView}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.taskTitle}>{task.title}</Text>
                    {task.totalTime == 0 ? undefined :
                        <TaskStopWatch initSec={task.totalTime} isRunning={false} />}
                </View>
                <StatusIcon status={task.status} />
            </TouchableOpacity>)}
        </View>)}
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 5,
        backgroundColor: '#0000',
        paddingRight: 7,
    },
    subject: {
        fontSize: 14,
        borderBottomWidth: 0.66,
        paddingLeft: 5,
        paddingTop: 25,
        paddingBottom: 7,
        borderColor: '#1F4073',
        fontFamily: 'Leferi',
        marginBottom: 10,
        // backgroundColor: '#ddd',
        // borderRadius: 10
    },
    taskView: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        marginHorizontal: 5,
        // backgroundColor: 'red'
    },
    taskTitle: {
        fontSize: 10,
        fontFamily: 'Leferi'
    }
})

function StatusIcon({ status }) {
    switch (status) {
        case 1: return <Icon name='close' size={17} color='red'
            style={{ marginRight: 5, marginLeft: 20 }} />
        case 2: return <Icon name='triangle-outline' size={17} color='orange'
            style={{ marginRight: 5, marginLeft: 20 }} />
        case 3: return <Icon name='circle-outline' size={17} color='green'
            style={{ marginRight: 5, marginLeft: 20 }} />
    }
    return <Icon name='dots-horizontal-circle-outline' size={18} color='grey'
        style={{ marginRight: 5, marginLeft: 20 }} />
}