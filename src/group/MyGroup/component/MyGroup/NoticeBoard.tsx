import React, { useCallback, useState } from 'react'
import { Platform, Dimensions, StyleSheet, SafeAreaView, View, Image, Text, ScrollView, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Modal from "react-native-modal";
import NoticeModal from '../../../commonComponent/NoticeModal';
import MemberModal from '../../../commonComponent/MemberModal';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const { width, height } = Dimensions.get('window')
const data = {
    groupName: '3학년 1반 국어 스터디',
    groupDescription: '1학기 매일 공부할 사람만~',
    groupNotice: {
        title: '[필독] 지켜야 할 사항',
        content: '미션 체크 후 인증게시판에 인증 사진 꼭 올려주세요. 미인증 또는 거짓 체크 시 강퇴합니다!\n'.repeat(100)
    },
    groupMissions: ['하루 3시간 이상 국어 공부하기',
        '하루 1시간 바보',
        '저녁은 언제먹지',],
    groupTimes: {
        goal: '14:00:00',
        avg: '9:20:03',
        my: '1:38:34',
    },
}

const NoticeBoard = () => {
    const navigation = useNavigation<any>()
    const myGroupGoal = useCallback(() => navigation.navigate('MyGroupGoal'), [])
    const myGroupStat = useCallback(() => navigation.navigate('MyGroupStat'), [])
    const myGroupVBoard = useCallback(() => navigation.navigate('MyGroupVBoard'), [])
    const myGroupRank = useCallback(() => navigation.navigate('MyGroupRank'), [])


    const [memberModalVisible,setMemberModalVisible] = useState<boolean>(false);

    const [modalVisible, setModalVisible] = useState<boolean>(false);

    return (
        <View style={styles.shadow}>
            <TouchableOpacity
                onPress={() => {
                    setModalVisible(true)
                }}
                style={styles.noticeContainer}>
                {/* <View style={styles.noticeIconContainer}>
                    <Image style={{width:15,height:15}}source={require('../../../../../images/group/demostration.png')} />
                </View> */}
                <Icon style={{
                    marginTop: 0,
                    marginLeft: 20,
                    marginRight: 5,
                }} name='bullhorn-outline' size={20} color='black' />
                <Text style={{
                    fontSize: 12,
                }}>
                    {data.groupNotice.title}
                </Text>
            </TouchableOpacity>
            <View style={styles.groupMenuContainer}>


                <TouchableOpacity style={styles.groupMenu} onPress={myGroupGoal}>
                    <Image style={{ width: 30, height: 30 }} source={require('../../../../../images/group/trophy.png')} />

                    <Text style={styles.menuText} >그룹목표</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity style={styles.groupMenu} onPress={myGroupStat}> */}
                <TouchableOpacity style={styles.groupMenu} onPress={()=>setMemberModalVisible(true)}>
                    <Image style={{ width: 30, height: 30 }} source={require('../../../../../images/group/analysis.png')} />

                    <Text style={styles.menuText}>공부기록</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.groupMenu} onPress={myGroupVBoard}>
                    <Image style={{ width: 30, height: 30 }} source={require('../../../../../images/group/notebook.png')} />

                    <Text style={styles.menuText}>인증게시판</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.groupMenu} onPress={myGroupRank}>
                    <Image style={{ width: 30, height: 30 }} source={require('../../../../../images/group/achievement.png')} />

                    <Text style={styles.menuText}>그룹랭킹</Text>
                </TouchableOpacity>
            </View>

            <NoticeModal data={data.groupNotice} modalVisible={modalVisible} setModalVisible={setModalVisible} />
            <MemberModal isMine modalVisible={memberModalVisible} setModalVisible={setMemberModalVisible}/>
        </View>
    )
}

export default NoticeBoard


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

        height: 60,
        width: 100,
        justifyContent: 'center',
        // justifyContent:'flex-start',
        // alignSelf: 'baseline',
        // borderWidth:1,
        // flexDirection: "row",
        // flexWrap: "wrap"
    },
    safeContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        paddingHorizontal: '5%',
    },
    title: {
        fontSize: 24,
        fontFamily: 'GodoM',
        color: '#000',

    },
    myGroups: {
        paddingTop: height * 0.02,
    },
    groupDescription: {
        fontSize: 17,
        fontFamily: 'GodoM',
        color: '#484848',
        marginTop: width * 0.05,
    },
    noticeContainer: {
        backgroundColor: '#7EBEF9',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        height: 40,
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: width * 0.05,
    },
    noticeIconContainer: {
        paddingLeft: 10,
        paddingRight: 15,
    },
    groupMenuContainer: {
        flexDirection: 'row',
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        backgroundColor: '#F9F9F9',

    },
    groupMenu: {
        flex: 1,
        flexGrow: 1,
        alignItems: 'center',
        padding: 10,
        paddingTop: 15,
    },
    menuText: {
        fontSize: 12,
        paddingTop: 5,
    },

})