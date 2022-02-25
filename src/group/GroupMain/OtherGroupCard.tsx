import React, { useCallback, useState } from 'react'
import { Platform, Dimensions, StyleSheet, View, Image, Text, ScrollView, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicon from 'react-native-vector-icons/Ionicons'
import PrivateGroupEnteringModal from './PrivateGroupEnteringModal'
import { useNavigation } from '@react-navigation/native'


import ProgressBar from '../../component/ProgressBar';
const { width, height } = Dimensions.get('window')


const currentData = getTempData();
const OtherGroupCard = () => {
    const { groupName, groupMember, groupMissions, groupDescription, groupPrivacy, maxMember } = currentData
    const navigation = useNavigation<any>()
    const otherGroup = useCallback(() => navigation.navigate('OtherGroup'), [])

    const [modalVisible, setModalVisible] = useState(false)
    return (
        <>
            <TouchableOpacity style={[styles.cardView, styles.shadow]}
                onPress={groupPrivacy?()=>setModalVisible(true):otherGroup}
            >
                <View style={{ flexDirection: 'row' }}>
                    {groupPrivacy && <Icon style={{ marginTop: 1, marginRight: 3, }} name='lock-outline' size={15} color='black' />}
                    <Text style={styles.title}>{groupName}</Text>
                    <View style={styles.headCountContainer}>
                        <Ionicon style={{ marginTop: 0, marginRight: 1, }} name='people-outline' size={16} color='black' />
                        <Text style={{ fontSize: 13, }}>{`${groupMember.length}/${maxMember}`}</Text>
                    </View>
                </View>
                <Text numberOfLines={2} ellipsizeMode={'tail'} style={styles.content}>
                    {groupDescription}</Text>
                <View>
                    <View style={styles.groupTime}>
                        <Text style={{ fontSize: 12, }}>오늘 평균 공부시간</Text>
                        <Text style={{ fontSize: 12, fontWeight: '700', marginLeft: 15 }}>11:22:33</Text>
                    </View>

                </View>
                <View>
                    <View style={styles.progressBarContainer}>
                        <Text style={styles.progressText}>오늘 평균 목표 달성률(시간)</Text>
                        <ProgressBar hasIndicator={false} style={styles.progressBar} />
                    </View>
                    <View style={styles.progressBarContainer}>
                        <Text style={styles.progressText}>오늘 평균 목표 달성률(미션)</Text>
                        <ProgressBar hasIndicator={false} style={styles.progressBar} />

                    </View>
                </View>
                <View style={styles.groupMissionContainer}>
                    <View style={{ paddingTop: 0, paddingRight: 3 }}>
                        <Image style={{ width: 10, height: 10 }} source={require('../../../images/group/trophy.png')} />
                    </View>
                    <Text style={styles.mission}>{`${groupMissions[0].missionName} 외 목표 ${groupMissions.length - 1}개`}</Text>
                </View>
            </TouchableOpacity>
            <PrivateGroupEnteringModal 
                modalVisible={modalVisible} setModalVisible={setModalVisible} 
                data={{ groupName: '3학년 1반 국어 스터디' }} 
                navFunction={otherGroup}
            />
        </>

    )
}

export default OtherGroupCard



const styles = StyleSheet.create({
    cardView: {
        width: width * 0.85,
        borderWidth: 1.3,
        borderColor: '#c4c4c4',
        borderRadius: 10,
        marginTop: 10,

        backgroundColor: '#ffffff',
        paddingTop: 20, paddingBottom: 15, paddingHorizontal: 20,
        flex: 1,

        alignSelf: 'center',
    },
    shadow: {
        ...Platform.select({
            ios: {
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.02,
            },
            android: {
                elevation: 0.05,
            },
        }
        )
    },
    title: {
        fontFamily: 'GodoM',
        fontSize: 15, paddingBottom: 10, fontWeight: '500',
        flex: 1,
    },
    content: {
        textAlign: 'center',
        fontWeight: 'normal',
        fontSize: 12, paddingBottom: 8, marginBottom: 'auto',
    },
    groupTime: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
    },
    progressBarContainer: {
        marginTop: 1,
        marginBottom: 3,
    },
    progressBar: {
        width: width * 0.75,
        height: 3,
        backgroundColor: '#0085FF',
    },
    progressText: {
        fontSize: 9,
        marginBottom: 2,
        alignSelf: 'flex-end',
    },
    mission: {
        fontFamily: 'GodoM',
        fontSize: 10,
    },
    groupMissionContainer: {
        marginTop: 8,
        paddingTop: 3,
        flexDirection: 'row',
        alignItems: 'center'
    },
    headCountContainer: {
        flexDirection: 'row'
    }
})






function getTempData() {
    return (
        {
            groupName: '3학년 1반 국어 스터디',
            groupMember: [{ photoUrl: '' }, { photoUrl: '' }],
            groupMissions: [{
                "groupMissionId": 6,
                "missionName": "배고팡"
            }],
            groupDescription: '매일 공부할 사람만!',
            groupPrivacy: true,
            maxMember: 10,
        }
    )
}