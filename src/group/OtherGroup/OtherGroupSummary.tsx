import React from 'react'
import { Dimensions, StyleSheet, SafeAreaView, View, Image, Text, ScrollView } from 'react-native'

import OtherGroupSummaryBoard from './OtherGroupSummaryBoard'
import OtherGroupProgressBar from './OtherGroupProgressBar'

const { width, height } = Dimensions.get('window')

const OtherGroupSummary = ({data}) => {
    const {groupTimes,groupMissions,groupGoalProgresses}=data
    return (
        <>
            <Text style={{
                marginTop: 20,
                marginBottom: 10,
                fontSize: 15,
                fontFamily: 'GodoM'
            }}>
                오늘 그룹 공부 현황
            </Text>
            <OtherGroupProgressBar groupGoalProgresses={groupGoalProgresses} />

            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <OtherGroupSummaryBoard isOtherGroup time data={groupTimes}/>
                <OtherGroupSummaryBoard data={groupMissions}/>
            </View>
        </>

    )
}

export default OtherGroupSummary

const styles = StyleSheet.create({

})