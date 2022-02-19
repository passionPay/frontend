import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useContextOfPlanner } from '../PlannerProvider';

export default function MainStopWatch({ initSec }: { initSec: number }) {
    // const result = Math.floor(initSec / (1000 * 60 * 60))
    //     + ":" + Math.floor(initSec / (1000 * 60)) % 60
    //     + ":" + Math.floor(initSec / 1000) % 60
    // const str = new Date(initSec * 1000).toISOString().substring(11, 19)
    const cont = useContextOfPlanner()
    return <TouchableOpacity style={styles.container}
        onPress={() => { cont.isStart ? cont.setStoppingModalVisible(true) : cont.setStartingModalVisible(true) }}>
        <Icon name={cont.isStart ? 'pause' : 'play'} size={28} color='#151515'
            style={{ marginRight: 10, marginBottom: 3 }} />
        <Stopwatch laps start={cont.isStart}
            options={options}
            getMsecs={(time) => {
                // if (timerStartTimeInit != time) {
                //     const h = (new Date()).getHours(), m = (new Date()).getMinutes()
                //     if (timeblock[(h + 18) % 24].minutes[Math.floor(m / 10)].color != '#A5AED5')
                //         setServerTimeBlock(cont.user.token, route.params.id, h, Number(Math.floor(m / 10) + '0').toString(), setTimeBlockInit)
                //     timeblock[(h + 18) % 24].minutes[Math.floor(m / 10)].color = '#A5AED5'
                // }
                // timerTotalTime = time;
            }}
            startTime={initSec} />
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 20,
        justifyContent: 'center',
    }
})

const options = {
    container: {
        backgroundColor: '#0000',
        borderRadius: 5,
        // justifyContent: "center",
        // alignItems: 'center',
        marginRight: 10
    },
    text: {
        fontSize: 25,
        fontFamily: 'GodoM', color: '#151515',
        textAlignVertical: 'center',
    }
}