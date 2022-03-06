import React, {useCallback} from 'react'
import { PixelRatio, Platform, Dimensions, StyleSheet, SafeAreaView, View, Image, Text, ScrollView, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

//EventEmitter.removeListner warning
import { LogBox } from "react-native";
LogBox.ignoreLogs(["EventEmitter.removeListener"]);

import GroupGoalChart from './GroupGoalChart';
import { useGroupState } from '../MyGroupContext';
import { getFormattedTime } from '../timeManager';

const { width, height } = Dimensions.get('window')

const chartSize = {
    height: width * 0.3,
    width: width * 0.9,
    barWidth: width * 0.055,
    barMargin: width * 0.004,
}

const chartData = {
    myTimeProgress: 0.4,
    groupTimeProgress: 0.3,
    myMissionProgress: 0.2,
    groupMissionProgress: 0.1,
}

type MissionsType = {
    missionName: string,
    done: boolean,
    missionId: number,
}[]

const currentMissions: MissionsType = [
    {
        missionName: '하루 3시간 이상 국어 공부 매우매우 열심히 하기',
        done: true,
        missionId: 1,
    },
    {
        missionName: '영어 단어 day 3개 이상 ㅇ암기하기',
        done: true,
        missionId: 2,
    },
    {
        missionName: '미적분 모의고사 1회 이상 풀기',
        done: false,
        missionId: 3,
    },
    {
        missionName: '집에가기',
        done: false,
        missionId: 4,
    },
    {
        missionName: '놀러가기',
        done: false,
        missionId: 5,
    },
]


const GroupSummary = () => {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.titleText}>오늘 공부 현황</Text>
            <GroupGoalChart />
            <View style={styles.boardContainer}>
                <GroupSummaryBoard time></GroupSummaryBoard>
                <GroupSummaryBoard time={false}></GroupSummaryBoard>
            </View>
        </View>
    )
}

export default GroupSummary


const GroupSummaryBoard = ({ time }) => {
    const navigation = useNavigation<any>()
    const myGroupGoal = useCallback(() => navigation.navigate('MyGroupGoal',time?1:0), [])

    const groupState = useGroupState();

    const fontSize = 12
    const content = time ? (
        <>
            <View style={[boardStyles.groupSummaryContentContainer]}>
                <View style={{ paddingTop: 5 }}>
                    <View style={boardStyles.groupTime}>
                        <Text style={{ fontSize: fontSize, }}>그룹 목표 공부시간</Text>
                        <Text style={{ fontSize: fontSize + 3, fontWeight: '700' }}>{getFormattedTime(groupState.groupTimeGoal)}</Text>
                    </View>
                    <View style={boardStyles.groupTime}>
                        <Text style={{ fontSize: fontSize, }}>그룹 평균 공부시간</Text>
                        <Text style={{ fontSize: fontSize + 3, fontWeight: '700' }}>{getFormattedTime(groupState.groupAvgStudyTime)}</Text>
                    </View>
                    <View style={boardStyles.groupTime}>
                        <Text style={{ fontSize: fontSize, }}>내 공부시간</Text>
                        <Text style={{ fontSize: fontSize + 3, fontWeight: '700' }}>{getFormattedTime(groupState.myStudyTime)}</Text>
                    </View>
                </View>

            </View>
        </>
    )
        : (
            <>
                <View style={boardStyles.groupSummaryContentContainer}>
                    {groupState.groupMissions.map((item, idx) => (
                        <View
                            key={idx} 
                            style={boardStyles.groupEachMissionContainer}>
                            <View style={{ paddingTop: 0, paddingRight: 3 }}>
                                <Image style={{ width: 15, height: 15 }} source={require('../../../../images/group/trophy.png')} />
                            </View>
                            <Text numberOfLines={2} style={boardStyles.missionText}>{item.value}</Text>
                        </View>
                    ))}



                </View>
            </>
        )

    return (
        <TouchableOpacity 
            onPress={myGroupGoal}
            style={boardStyles.groupSummaryBoard}>
            {content}
            <View style={boardStyles.groupSummaryTitleContainer}>
                <Text style={{ fontSize: fontSize, fontWeight: '700' }}>
                    {time ? '공부시간' : '그룹미션'}
                </Text>
            </View>
        </TouchableOpacity>

    )
}






const styles = StyleSheet.create({
    titleText: {
        fontSize: 15,
        fontFamily: 'GodoM',
    },
    shadow: {
        ...Platform.select({
            ios: {
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 0.1,
                },
                shadowOpacity: 0.05,
            },
            android: {
                elevation: 3,
            },
        }
        ),
    },
    mainContainer: {
        paddingTop: height * 0.04,
    },
    boardContainer: {
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: width * 0.01,
    }
})

const boardStyles = StyleSheet.create({
    groupSummaryBoard: {
        width: width * 0.43,
        height: 200,
        backgroundColor: '#F9F9F9',
        borderRadius: 10,
        marginVertical: 5,
    },
    groupSummaryContentContainer: {
        padding: width * 0.01,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flex: 4
    },
    groupTime: {
        marginVertical: width * 0.025,
        alignItems: 'center',
        justifyContent: 'center',
    },

    groupSummaryMissionContainer: {

    },
    groupEachMissionContainer: {
        marginTop: 8,
        flex:1,
        paddingTop: 3,
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    missionText: {
        fontSize: 12,
        flex: 1,
    },

    groupSummaryTitleContainer: {
        backgroundColor: '#7EBEF9',
        flex: 1,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

})

