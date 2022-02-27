import React, { useCallback } from 'react'
import { Platform, Dimensions, StyleSheet, SafeAreaView, View, Image, Text, ScrollView, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { SettingItem } from '../../component/SettingItem'
import WarningModal from '../../group/MyGroup/MyGroupSetting/WarningModal'
import { TouchableIcon } from '../../component/CustomComponent'
import ProfileSettingSection from './ProfileSettingSection/ProfileSettingSection'
import UserInfoSettingSection from './UserInfoSettingSection/UserInfoSettingSection'
import MiscSettingSection from './MiscSettingSection'

const { width, height } = Dimensions.get('window')

// const noticePrevState = {
//     noticeTitle: '안녕안녕',
//     noticeContent: '내용내용',
// }
// const groupPrevState = {
//     groupTitle: '3학년 1반 국어 스터디',
//     groupDescription: 'ㅁ[롱렘롱',
//     groupTimeGoal: 100000020,
//     maxMember: 3,
//     groupMissions: [
//         {
//             value: '뮻',
//             id: 1,
//         }, {
//             value: 'ㅇㅇㅇㅇ뮻',
//             id: 3,
//         },
//     ],
//     groupPrivacy: false,
//     groupPassword: undefined
// }
const breakGroupModalData = {
    title: '그룹 해체하기',
    content: '그룹을 해체하면 그동안 기록 되었던 그룹 정보, 공부 기록 등 데이터들이 사라집니다. 한번 그룹을 해체하면 다시는 데이터를 복구할 수 없습니다. \n정말로 해체하시겠습니까?',
    buttonText: '그룹 해체하기'
}

//프로필 사진, 닉네임, 각오, 공개 설정
const profileSettingItems = [
    {
        tag: '닉네임 설정',
        type: 'navigator',
        option: {
            navigatorName: 'SetNotice',
            params: {
                // prevState: noticePrevState,
                isEditMode: true,
            }
        }
    },
    {//회원가입 정보들,
        tag: '프로필 사진 설정',
        type: 'navigator',
        option: {
            navigatorName: 'MakeGroup',
            params: {
                // prevState: groupPrevState,
                isEditMode: true,
            }
        }
    },
    {
        tag: '각오 한마디 설정',
        type: 'navigator',
        option: {
            navigatorName: 'GroupMembers',
            params: {
                isManaging: true,
            }
        }
    },
    {
        tag: '공개 여부 설정',
        type: 'modal',
        option: {
            modal: WarningModal,
            modalData: breakGroupModalData
        }
    },
]


const MyGroupSetting = () => {


    const navigation = useNavigation<any>()
    const goBack = useCallback(() => navigation.goBack(), [])
    return (
        <SafeAreaView style={styles.safeContainer}>
            <View style={styles.container}>

                <TouchableOpacity style={styles.header} onPress={goBack}>
                    <Text style={{
                        fontSize: 13,
                        fontFamily: 'GodoM',
                        color: '#9F9F9F',
                    }} >
                        &lt; Profile </Text>
                </TouchableOpacity>
                <Text style={styles.title}>{'설정'}</Text>

                <ScrollView>
                    <ProfileSettingSection/>
                    <UserInfoSettingSection/>
                    <MiscSettingSection/>
                </ScrollView>
            </View>
        </SafeAreaView>
    )

}


const styles = StyleSheet.create({
    header: {
        height: 50,
        justifyContent: 'center',
        alignSelf: 'baseline',
        paddingHorizontal: width * 0.05,
    },
    safeContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
    },
    title: {
        fontSize: 18,
        fontFamily: 'GodoM',
        color: '#000',
        marginBottom: height * 0.02,
        paddingHorizontal: width * 0.05,

    },
    myGroups: {
        paddingTop: height * 0.02,
    },
    groupDescription: {
        fontSize: 14,
        color: '#484848',
    },


})



export default MyGroupSetting


