import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { useState } from 'react'
import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Add() {
    const [tasks, setTasks] = useState(getTask())
    const navi = useNavigation<any>()
    const timeblock = getTimeBlock()
    return <ImageBackground source={require('../../images/plannerBack.png')} style={{ flex: 1 }} imageStyle={{ opacity: 0.7 }}>
        <TouchableOpacity onPress={() => { navi.goBack() }} style={styles.icon}>
            <Icon name='chevron-left' size={30} color='#5E5E64' /></TouchableOpacity>
        <ScrollView>
            <View style={styles.view}>
                <Text style={styles.date}>21.01.23 월요일</Text>
                <View style={styles.playlist}>
                    <Icon name='playlist-music' size={23} color='#65666D' />
                    <Text style={{ fontSize: 15, color: '#65666D', marginHorizontal: 10, fontWeight: 'bold' }}>See Your Eyes - 잔나비</Text></View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderColor: '#B7B7B7' }}>
                    <Text style={[styles.tasks, { flex: 1 }]}>TASKS</Text>
                    <Text style={[styles.tasks, { flex: 1, textAlign: 'right' }]}>목표 시간   <Text style={{ fontSize: 14, color: '#65666D' }}>08H 40MIN</Text></Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderColor: '#B7B7B7' }}>
                    <View style={{ flex: 3 }}>
                        {tasks.map((v, i) => <View style={{ flexDirection: 'row' }}>
                            <Text style={{
                                flex: 1, borderRightWidth: 1, paddingHorizontal: 10,
                                textAlignVertical: 'center', textAlign: 'center', borderColor: '#DDDDDD',
                                borderBottomWidth: 1
                            }}>{v.subject}</Text>
                            <View style={{ flex: 6 }}>
                                {v.tasks.map((taskName, i) => <View style={{
                                    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 5, paddingLeft: 7, borderBottomWidth: 1,
                                    borderColor: '#DDDDDD', marginRight: 7
                                }}>
                                    <Text style={styles.taskDetail}>{taskName}</Text>
                                    <TouchableOpacity style={{ flex: 1 }}>
                                        <View style={{ width: 15, height: 15, borderColor: '#AAAAAA', borderWidth: 1, marginLeft: 5 }} />
                                    </TouchableOpacity>
                                </View>)}
                            </View>
                        </View>)}
                    </View>
                    <View style={{ flex: 2, marginVertical: '1%' }}>
                        {timeblock.map((vRow, i) => <View key={vRow.hour} style={{
                            flexDirection: 'row',
                            borderTopWidth: i == 0 ? 0 : 1, borderColor: '#DDDDDD'
                        }}>
                            <Text style={{
                                flex: 1, textAlign: 'center', fontSize: 11, paddingVertical: '1%',
                                borderRightWidth: 1, borderColor: '#DDDDDD', color: '#999999'
                            }}>{vRow.hour}</Text>
                            {vRow.minutes.map((v, i) => <View style={{ flex: 1, paddingVertical: '1%' }} key={vRow.hour + v.minute}>
                                <View style={{ backgroundColor: v.color, flex: 1 }} />
                            </View>)}
                        </View>)}</View>
                </View>
            </View>
        </ScrollView></ImageBackground>
}

const checkBox = () => <TouchableOpacity style={{ width: 15, height: 15, borderColor: '#DDDDDD', borderWidth: 1, marginHorizontal: 5 }} />

const styles = StyleSheet.create({
    view: {
        marginHorizontal: 10, paddingBottom: 20
    },
    icon: {
        alignSelf: 'flex-start', backgroundColor: 'white',
        marginTop: '5%', marginLeft: '5%', borderRadius: 5,
        borderWidth: 0, borderColor: '#DFE3EA', elevation: 5,
        overflow: 'hidden', marginRight: '5%'
    },
    date: {
        fontSize: 24, color: '#65666D',
        padding: 10, borderBottomWidth: 1, borderColor: '#B7B7B7'
    },
    playlist: {
        padding: 8, borderBottomWidth: 1,
        alignItems: 'center', textAlignVertical: 'center',
        flexDirection: 'row', borderColor: '#B7B7B7'
    },
    tasks: {
        fontSize: 11, color: '#65666D',
        paddingVertical: 3, paddingHorizontal: 10,
        fontWeight: 'bold', textAlignVertical: 'center'
    },
    taskDetail: {
        fontsize: 11, color: '#65666D',
        flex: 5
    }
})

const getTask = () => {
    return [
        {
            subject: '국어',
            tasks: ['윤혜정T 나비효과 입문편 5강', '씨리얼 문학 현대시 6일차']
        }
    ]
}

const getTimeBlock = () => {
    let ret = [{
        hour: "6",
        minutes: [
            {
                minute: "0",
                color: "#A5AED5"
            },
            {
                minute: "10",
                color: "#A5AED5"
            },
            {
                minute: "20",
                color: "#A5AED5"
            },
            {
                minute: "30",
                color: "#A5AED5"
            },
            {
                minute: "40",
                color: "#A5AED5"
            },
            {
                minute: "50",
                color: "#A5AED5"
            }
        ]
    },]
    for (let i = 7; i < 30; ++i) {
        ret.push({
            hour: (i % 24).toString(),
            minutes: [
                {
                    minute: "0",
                    color: "#A5AED500"
                },
                {
                    minute: "10",
                    color: "#A5AED5"
                },
                {
                    minute: "20",
                    color: "#A5AED5"
                },
                {
                    minute: "30",
                    color: "#A5AED5"
                },
                {
                    minute: "40",
                    color: "#A5AED5"
                },
                {
                    minute: "50",
                    color: "#A5AED5"
                }
            ]
        })
    }
    return ret
}