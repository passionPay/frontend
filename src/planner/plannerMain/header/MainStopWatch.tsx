import React, { useEffect, useRef, useState } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from '../../../component/CustomComponent'
import { PlannerDataType, STARTINGMODAL, STOPPINGMODAL, TasksType, TimeStampsType, useContextOfPlanner } from '../../PlannerProvider'

export default function MainStopWatch() {
    const cont = useContextOfPlanner()
    const [hour, setHour] = useState(Math.floor(cont.data.totalTime / 3600)) // cont.data.totalTime 원래 msec -> sec
    const [min, setMin] = useState(Math.floor(cont.data.totalTime / 60) % 60)
    const [sec, setSec] = useState(cont.data.totalTime % 60)
    const interval = useRef<any>(null)

    useEffect(() => {
        setHour(Math.floor(cont.data.totalTime / 3600))
        setMin(Math.floor(cont.data.totalTime / 60) % 60)
        setSec(cont.data.totalTime % 60)
    }, [cont.data.totalTime])

    function updateTimestamps() {
        cont.setData((prev: PlannerDataType) => {
            const next: PlannerDataType = JSON.parse(JSON.stringify(prev))
            if (isNextRow(next.timestamps))
                next.timestamps.push({
                    timestampId: prev.timestamps[prev.timestamps.length - 1].timestampId + 1,
                    startTime: new Date().toTimeString().substring(0, 6) + '00',
                    endTime: new Date().toTimeString().substring(0, 8),
                    color: getTaskColor(cont.currentTaskId, cont.data.tasks)
                })
            else
                next.timestamps[prev.timestamps.length - 1].endTime
                    = new Date().toTimeString().substring(0, 8)
            return next
        })
    }

    useEffect(() => {
        // if (cont.data.totalTime < 0) return // 아직 데이터 안 불러온 경우
        if (!cont.isStart) {// 종료하려는 경우
            cont.setCurrentStopwatchIncrementTime(0)
            if (interval.current)
                clearInterval(interval.current)
        }
        else { // 시작하려는 경우
            interval.current = setInterval(() => {
                cont.setCurrentStopwatchIncrementTime((prev) => prev + 1)
                // console.log(hour, min, sec)
                setSec((prevSec: number) => {
                    if (prevSec != 59)
                        return prevSec + 1
                    // 분이 바뀌는 경우
                    setMin((prevMin) => {
                        if (prevMin != 59)
                            return prevMin + 1
                        setHour((prevH) => prevH + 1)
                        return 0
                    })
                    setTimeout(() => updateTimestamps(), 500)
                    /* 아래 Warning 때문에 setTimeout에 콜백으로 넣어줌
                    Warning: Cannot update a component (`PlannerProvider`) while rendering a different component (`MainStopWatch`). To locate the bad setState() call inside `MainStopWatch`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render */
                    return 0
                })
            }, 1000);

            if (interval.current)
                return () => clearInterval(interval.current)
        }
    }, [cont.isStart]) // 시작 또는 종료될 때

    return <TouchableOpacity style={styles.container}
        onPress={() => { cont.isStart ? cont.setCurrentModal(STOPPINGMODAL) : cont.setCurrentModal(STARTINGMODAL) }}>
        <Text style={{ fontSize: 27 }}>
            {hour < 10 ? '0' + hour : hour}:{min < 10 ? '0' + min : min}:{sec < 10 ? '0' + sec : sec}</Text>
    </TouchableOpacity>
}

function isNextRow(timestamps: TimeStampsType) {
    const prev = timestamps[timestamps.length - 1].startTime.substring(0, 2)
    return prev != new Date().toTimeString().substring(0, 2)
}

function getTaskColor(taskId: number, tasks: TasksType) {
    for (let i = 0; i < tasks.length; ++i)
        for (let j = 0; j < tasks[i].tasks.length; ++j)
            if (tasks[i].tasks[j].taskId == taskId)
                return tasks[i].tasks[j].color
    return '#000'
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderRadius: 20,
    }
})

const options = {
    container: {
        backgroundColor: '#0000',
        borderRadius: 5,
        marginRight: 10
    },
    text: {
        fontSize: 27,
        fontFamily: 'GodoM', color: '#151515',
        textAlignVertical: 'center',
    }
}