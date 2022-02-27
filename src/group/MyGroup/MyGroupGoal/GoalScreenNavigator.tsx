import React, { useCallback } from 'react'
import { Platform, Dimensions, StyleSheet, SafeAreaView, View, Image, Text, ScrollView, TouchableOpacity } from 'react-native'
import { MissionsProvider } from './GroupMisisonsContext'

import MissionGoalScreen from './MissionGoalScreen'
import TimeGoalScreen from './TimeGoalScreen'

import GroupGoalChart from '../component/GroupGoalChart'

const { width, height } = Dimensions.get('window')

const OtherChart = () => {
    return (
        <View style={styles.subContainer}>
            <Text style={styles.subtitleTextSmall}>친구들은 오늘 이만큼 공부했어요</Text>
            <GroupGoalChart />
        </View>
    )
}
const GoalScreenNavigator = ({ tabNumber }) => {
    const Screen = tabNumber === 0 ? MissionGoalScreen : TimeGoalScreen
    return (
        <>
            {
                tabNumber === 0 ?
                    <MissionsProvider>
                        <Screen />
                    </MissionsProvider>
                    : <Screen />
            }

            <OtherChart />
        </>

    )
}

export default GoalScreenNavigator
GoalScreenNavigator.defaultProps = {
    tabNumber: 0
}


const styles = StyleSheet.create({
    subContainer: {
        paddingTop: height * 0.04,
    },
    subtitleText: {

        fontSize: 20,

        fontFamily: 'GodoM',
    },
    subtitleTextSmall: {
        fontSize: width * 0.04,
        fontFamily: 'GodoM',
    }

})