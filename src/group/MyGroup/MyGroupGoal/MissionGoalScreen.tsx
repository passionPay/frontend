import React, { useEffect, useState } from 'react'
import { Platform, Dimensions, StyleSheet, SafeAreaView, View, Image, Text, ScrollView, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { useMissionsState, useMissionsDispatch, MissionsType } from './GroupMisisonsContext'
import CommonModal from '../../commonComponent/CommonModal'
import { TouchableIcon } from '../../../component/CustomComponent'
import ProgressBar from '../../../component/ProgressBar'

const { width, height } = Dimensions.get('window')

const MissionProgress = ({ missionCount }) => {
    const progress = missionCount.done / missionCount.whole
    return (
        <View style={[styles.subContainer, { paddingTop: height * 0.03, }]}>
            <Text style={[(width * 0.04 < 20) ? styles.subtitleTextSmall : styles.subtitleText, { marginBottom: 10 }]}>{
                missionCount.whole}개 중 {missionCount.done}개의 미션 완료
            </Text>
            <ProgressBar style={{ width: width * 0.82, height: 7, paddingHorizontal: width * 0.01 }} progress={progress} hasIndicator />
        </View>
    )
}

const MissionItem = ({ mission }) => {
    const dispatch = useMissionsDispatch()
    const { missionName, missionId } = mission
    return (
        <TouchableOpacity
            onPress={() => dispatch({
                type: 'TOGGLE',
                id: missionId
            })}
            style={missionItemStyles.mainContainer}>
            <Image style={{ marginLeft: 15, width: 25, height: 25 }} source={require('../../../../images/group/trophy.png')} />
            <Text numberOfLines={2} style={{ fontSize: 12, marginHorizontal: 5, textAlign: 'center', flex: 1 }}>{missionName}</Text>
            <Icon name={mission.done ? 'checkbox-marked' : 'checkbox-blank-outline'}
                color={mission.done ? '#494949' : '#494949'}
                size={25} style={{ marginRight: 15, }}
            />

        </TouchableOpacity>
    )
}



const Missions = ({ hasDone, missions }) => {

    const [modalVisible, setModalVisible] = useState(false)

    const text = getMissionText(hasDone, missions)
    const Subtitle = missions.length === 0 ?
        (
            <View style={{ flexDirection: 'row' }}>
                <Text style={[(width * 0.04 < 20) ? styles.subtitleTextSmall : styles.subtitleText, { marginBottom: 10, marginRight: 5, }]}>
                    {text}
                </Text>
                <TouchableIcon
                    iconProps={{ name: 'information-outline', size: 18, color: '#65B5FF' }} style={{ marginTop: -1 }}
                    onPress={() => setModalVisible(true)}
                />
            </View>
        ) :
        (
            <Text style={[(width * 0.04 < 20) ? styles.subtitleTextSmall : styles.subtitleText, { marginBottom: 10, marginRight: 5, }]}>
                {text}
            </Text>
        )
    return (
        <View style={styles.subContainer}>
            {Subtitle}
            {missions.map((item, idx) => (
                <MissionItem
                    key={idx}
                    mission={item}
                />))}
            <CommonModal modalVisible={modalVisible} setModalVisible={setModalVisible}
                data={{ title: '', content: '미션을 터치하여 완료 상태를 변경할 수 있어요' }}
            />
        </View>
    )
}

Missions.defaultProps = {
    hasDone: true,
}
const getMissionText = (hasDone, missions) => {
    if (hasDone) {
        if (missions.length === 0) {
            return '아직 완료한 미션이 없어요'
        } else {
            return '완료한 미션'
        }
    } else {
        if (missions.length === 0) {
            return '오늘의 미션을 모두 완료했어요'
        } else return `오늘 ${missions.length}개의 완료하지 못한 미션이 남아있어요`
    }
}




const MissionGoalScreen = () => {

    const [doneMissions, setDoneMissions] = useState<{}>([])
    const [leftMissions, setLeftMissions] = useState<MissionsType>([])
    const [missionCount, setMissionCount] = useState<{ whole: number, done: number, left: number }>({ whole: 10, done: 5, left: 3 })
    const missions = useMissionsState()

    useEffect(() => {
        // console.log(missions)
        const doneMissions = missions.filter((item) => item.done)
        const leftMissions = missions.filter((item) => !item.done)
        setDoneMissions(doneMissions)
        setLeftMissions(leftMissions)
        setMissionCount({ whole: missions.length, done: doneMissions.length, left: leftMissions.length })
    }, [missions])


    return (
        <>
            <MissionProgress missionCount={missionCount} />
            <Missions missions={leftMissions} hasDone={false} />
            <Missions missions={doneMissions} hasDone />
        </>
    )
}

export default MissionGoalScreen

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

const missionItemStyles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#F9F9F9',
        padding: width * 0.01,
        height: 50,
        marginVertical: 2,
        marginHorizontal: 5,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
})