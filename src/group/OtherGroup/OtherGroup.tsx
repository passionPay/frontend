import React, { useCallback } from 'react'
import { Platform, Dimensions, StyleSheet, SafeAreaView, View, Image, Text, ScrollView, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Ionicon from 'react-native-vector-icons/Ionicons'

import Notice from './Notice'
import OtherGroupSummary from './OtherGroupSummary'


const { width, height } = Dimensions.get('window')


const data = {
    groupName: '3학년 1반 국어 스터디',
    groupDescription: '1학기 매일 공부할 사람만~',
    groupNoticeTitle: '[필독] 지켜야 할 사항',
    groupMissions: ['하루 3시간 이상 국어 공부하기',
        '하루 1시간 바보',
        '저녁은 언제먹지',
        '저녁은 언제먹지',
        '저녁은 언제먹adfsdfsdfs지',],
    groupTimes: {
        goal: '14:00:00',
        avg: '9:20:03',
    },
    groupGoalProgresses:{
        mission: 0.0059,
        time:0.5,
    }
}


export default function OtherGroup() {


    const navigation = useNavigation<any>()
    const myGroupSetting = useCallback(() => navigation.navigate('MyGroupSetting', { groupName: '3학년 1 반 국어스터디', isLeader: true }), [])
    const goBack = useCallback(() => navigation.goBack(), [])

    return (
        <SafeAreaView style={styles.safeContainer}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.header} onPress={goBack}>
                    <Text style={{
                        fontSize: 13,
                        fontFamily: 'GodoM',
                        color: '#9F9F9F',
                    }}>
                        &lt; 스터디 그룹
                    </Text>
                </TouchableOpacity>
                <View style={{
                    flexDirection: 'row', justifyContent: 'space-between',
                    marginBottom: height * 0.02,
                }}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start' }}>
                        <Text style={styles.title}>{data.groupName}</Text>
                        <View style={styles.headCountContainer}>
                            <Ionicon style={{ marginTop: 0, marginRight: 1, }} name='people-outline' size={16} color='black' />
                            <Text style={{ fontSize: 13, }}>{`${3}/${5}`}</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.joinButton}>
                        <Text style={{
                            color:'white',
                            textAlign:'center',
                            fontSize:14,
                            fontWeight:'700'
                        }}>
                            가입하기
                        </Text>
                    </TouchableOpacity>

                </View>
                <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                    <Text style={styles.groupDescription}>{data.groupDescription}</Text>

                    <Notice />
                    <OtherGroupSummary data={data}/>




                </ScrollView>

            </View>
        </SafeAreaView>
    )

}


const styles = StyleSheet.create({
    shadow: {
        ...Platform.select({
            ios: {
                shadowColor: "#000",
                shadowOffset: {
                    width: 0.1,
                    height: 0.1,
                },
                shadowOpacity: 0.25,
            },
            android: {
                elevation: 3,
            },
        }
        )
    },
    header: {

        height: 50,
        width: 100,
        justifyContent: 'center',
        alignSelf: 'baseline',
        // flexDirection:'row',
    },
    safeContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
        paddingHorizontal: width * 0.05,
    },
    title: {
        // flex:1,
        fontSize: 18,
        fontFamily: 'GodoM',
        color: '#000',
        alignSelf:'center',
    },
    myGroups: {
        paddingTop: height * 0.02,
    },
    groupDescription: {
        fontSize: 14,

        color: '#484848',

    },
    headCountContainer: {
        alignSelf:'center',
        flexDirection: 'row',
        marginTop: -2,
        marginLeft: 10,
        // borderWidth:1,
    },
    joinButton: {
        width: 80,
        height: 30,
        marginLeft: 10,
        borderRadius:10,
        alignSelf: 'center',
        backgroundColor: '#7EBEF9',
        justifyContent:'center',
    }


})

