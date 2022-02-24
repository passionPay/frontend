import React, { useEffect, useRef, useState } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Stopwatch } from 'react-native-stopwatch-timer'
import { Text } from '../../../component/CustomComponent';
import { useContextOfPlanner } from '../../PlannerProvider';

export default function TaskStopWatch({ initSec, isRunning }
    : { initSec: number, isRunning: boolean }) {
    const cont = useContextOfPlanner()
    const [hour, setHour] = useState(Math.floor(initSec / 3600))
    const [min, setMin] = useState(Math.floor(initSec / 60) % 60)
    const [sec, setSec] = useState(initSec % 60)
    const interval = useRef<any>(null)
    let totalTime = initSec
    useEffect(() => {
        if (!isRunning) {// 종료하려는 경우
            if (interval.current)
                clearInterval(interval.current)
        }
        else { // 시작하려는 경우
            interval.current = setInterval(() => {
                cont.totalTime = totalTime++
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
                    return 0
                })
            }, 1000);

            if (interval.current)
                return () => clearInterval(interval.current)
        }
    }, [isRunning]) // 시작 또는 종료될 때

    return <View style={styles.container}>
        <Text style={{fontSize: 10}}>
            {hour < 10 ? '0' + hour : hour}:{min < 10 ? '0' + min : min}:{sec < 10 ? '0' + sec : sec}</Text>
        {/* <Stopwatch laps start={isRunning}
            options={options}
            getMsecs={(time) => {
                cont.taskTotalTime = time
            }}
            startTime={initSec} /> */}
    </View>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})

const options = {
    container: {
        backgroundColor: '#0000',
        borderRadius: 5,
        justifyContent: "center",
        alignItems: 'center',
        marginTop: 3
    },
    text: {
        fontSize: 10,
        color: '#151515',
        textAlignVertical: 'center'
    }
}