import React from 'react'
import { Modal, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from '../../../component/CustomComponent';
import { PlannerDataType, STOPPINGMODAL, useContextOfPlanner } from '../../PlannerProvider';
import LottieView from 'lottie-react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function StoppingModal({ }) {
    const cont = useContextOfPlanner()

    function onPressStop() {
        cont.setStart(false)
        cont.setData((prev: PlannerDataType) => {
            let next: PlannerDataType = JSON.parse(JSON.stringify(prev))
            next.totalTime += cont.currentStopwatchIncrementTime
            for (let i = 0; i < next.tasks.length; ++i)
                for (let j = 0; j < next.tasks[i].tasks.length; ++j)
                    if (next.tasks[i].tasks[j].taskId == cont.currentTaskId)
                        next.tasks[i].tasks[j].totalTime += cont.currentStopwatchIncrementTime
            next.timestamps = [...cont.data.timestamps]
            AsyncStorage.setItem('Planner' + new Date().toISOString().slice(0, 10),
                JSON.stringify(next))
            return next
        })
        cont.setCurrentTaskId(-1) /* 정보 저장하고 이거 호출하는 이유: task.totalTime == 0 이면 스톱워치 undefined. (Tasks.tsx)
        정보를 이후에 저장해도 되지만 잠깐동안 undefined 됐다가 다시 display되는 게 싫어서 */
        cont.setCurrentModal(-1)
    }

    return <Modal
        animationType="slide"
        transparent={true}
        visible={cont.currentModal == STOPPINGMODAL}
        onRequestClose={() => {
            cont.setCurrentModal(-1)
        }}
    >
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <View style={{ height: 120, marginVertical: 10 }}>
                    <LottieView
                        source={require("../../../../images/planner/planner2.json")}
                        loop
                        autoPlay />
                </View>
                <TouchableOpacity onPress={onPressStop} style={styles.touchableOpacity}>
                    <Text>타이머 종료</Text>
                </TouchableOpacity>
            </View>
        </View>
    </Modal> // setStart
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
        paddingHorizontal: 17,
        paddingVertical: 12,
        marginTop: 15
    }
})