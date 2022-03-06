import React, { useState } from 'react'
import { Dimensions, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { TouchableIcon } from '../../../component/CustomComponent'
import CommonModal from '../../commonComponent/CommonModal'


import ProgressBar from '../../../component/ProgressBar'
import { getFormattedTime } from '../timeManager'

const { width, height } = Dimensions.get('window')

type TimeProgressProps = {
    myStudyTime: number,
    groupTimeGoal: number,

}
const TimeProgress = ({ myStudyTime, groupTimeGoal }: TimeProgressProps) => {
    const progress: number = myStudyTime / groupTimeGoal
    const [myHour, myMin, mySec] = [Math.floor(myStudyTime / 1000 / 60 / 60), Math.floor(myStudyTime / 1000 / 60 % 60), Math.floor(myStudyTime / 1000 % 60)]
    const [groupHour, groupMin] = [Math.floor(groupTimeGoal / 1000 / 60 / 60), Math.floor(groupTimeGoal / 1000 / 60 % 60)]
    return (
        <View style={[styles.subContainer, { paddingTop: height * 0.03, }]}>
            <View style={{ flexDirection: 'row' }}>
                <Icon name={'clock-time-four-outline'} size={18} style={{ marginLeft: 0, marginRight: 5, }} />
                <Text style={[(width * 0.04 < 20) ? styles.subtitleTextSmall : styles.subtitleText, { marginBottom: 10 }]}>
                    {`${myHour}:${myMin.toString().padStart(2, '0')}:${mySec.toString().padStart(2, '0')}/${groupHour}:${groupMin.toString().padStart(2, '0')}:00`}
                </Text>
            </View>
            <View>
                <ProgressBar style={{ width: width * 0.82, height: 7, paddingHorizontal: width * 0.01 }} progress={progress} hasIndicator />
            </View>
        </View>
    )
}




const StudyTime = ({ myStudyTime, groupAvgStudyTime, groupTimeGoal }) => {


    const [modalVisible, setModalVisible] = useState(false)


    return (
        <View style={styles.subContainer}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={[(width * 0.04 < 20) ? styles.subtitleTextSmall : styles.subtitleText, { marginBottom: 10, marginRight: 5, }]}>
                    공부시간을 확인하세요
                </Text>
                <TouchableIcon
                    onPress={() => setModalVisible(true)}
                    iconProps={{ size: 17, name: 'information-outline', color: '#65b5ff' }} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: height * 0.01, }}>
                <View style={{ alignItems: 'center', flex: 0.85 }}>
                    <Text style={{ fontSize: 13, marginBottom: 3, }}>내 공부시간</Text>
                    <Text style={{ fontSize: 16, fontWeight: '600' }}>
                        {getFormattedTime(myStudyTime)}
                    </Text>
                </View>
                <View style={{ alignItems: 'center', flex: 1, borderColor: '#61B8F6', borderRightWidth: 1, borderLeftWidth: 1, }}>
                    <Text style={{ fontSize: 13, marginBottom: 3, }}>그룹 평균 공부시간</Text>
                    <Text style={{ fontSize: 16, fontWeight: '600' }}>
                        {getFormattedTime(groupAvgStudyTime)}
                    </Text>
                </View>
                <View style={{ alignItems: 'center', flex: 1 }}>
                    <Text style={{ fontSize: 13, marginBottom: 3, }}>그룹 목표 공부시간</Text>
                    <Text style={{ fontSize: 16, fontWeight: '600' }}>
                        {getFormattedTime(groupTimeGoal)}
                    </Text>
                </View>
            </View>
            <CommonModal modalVisible={modalVisible} setModalVisible={setModalVisible}
                data={{ title: '', content: '플래너의 타이머를 이용해 공부 시간을 측정해 주세요. 타이머가 끝난 후에 정보가 업데이트 됩니다.' }}
            />
        </View>
    )
}











const styles = StyleSheet.create({
    subContainer: {
        paddingTop: height * 0.04,
    },
    subtitleText: {
        fontSize: 17,
        fontFamily: 'GodoM',
    },
    subtitleTextSmall: {

        fontSize: width * 0.04,
        fontFamily: 'GodoM',
    }

})




type TimeGoalScreenDataType = {
    myStudyTime: number,
    groupAvgStudyTime: number,
    groupTimeGoal: number,
}
const initState: TimeGoalScreenDataType = {
    myStudyTime: 7200000,
    groupAvgStudyTime: 62022000,
    groupTimeGoal: 21600000,

}
const TimeGoalScreen = () => {
    const [data, setData] = useState<TimeGoalScreenDataType>(initState)
    return (
        <>
            <TimeProgress {...data} />
            <StudyTime {...data} />
        </>
    )
}

export default TimeGoalScreen
