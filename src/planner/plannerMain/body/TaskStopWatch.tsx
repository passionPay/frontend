import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Stopwatch } from 'react-native-stopwatch-timer'

export default function TaskStopWatch({ initSec, isRunning }
    : { initSec: number, isRunning: boolean }) {
    return <View style={styles.container}>
        <Stopwatch laps start={isRunning}
            options={options}
            getMsecs={(time) => {
                // setCurrentTaskMsec(time)
            }}
            startTime={initSec} />
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