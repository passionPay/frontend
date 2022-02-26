
import React, { useCallback } from 'react'
import { Platform, TextInput, Dimensions, StyleSheet, SafeAreaView, View, Image, Text, ScrollView, TouchableOpacity } from 'react-native'

const { width, height } = Dimensions.get('window')

import { SettingItem, ModalSettingItem } from '../../group/MyGroup/MyGroupSetting/SettingItem'
import WarningModal from '../../group/MyGroup/MyGroupSetting/WarningModal'


const breakGroupModalData = {
    title: '그룹 해체하기',
    content: '그룹을 해체하면 그동안 기록 되었던 그룹 정보, 공부 기록 등 데이터들이 사라집니다. 한번 그룹을 해체하면 다시는 데이터를 복구할 수 없습니다. \n정말로 해체하시겠습니까?',
    buttonText: '그룹 해체하기'
}
//프로필 사진, 닉네임, 각오, 공개 설정
const profileSettingItems = [
    {
        tag: '닉네임 설정',
        type: 'navigatorWithParams',
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
        type: 'navigatorWithParams',
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
        type: 'navigatorWithParams',
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
    {
        tag: '내 공부 신분 설정',
        type: 'modal',
        option: {
            modal: WarningModal,
            modalData: breakGroupModalData
        }
    },
]


const ProfileSettingSection = () => {
    return (
        <View style={styles.container}>
            <TextInput
                editable={false}
                style={styles.sectionTitleText}>
                프로필 설정
            </TextInput>
            {profileSettingItems.map((item, idx) => <SettingItem key={idx} {...item}></SettingItem>)}

        </View>
    )
}

export default ProfileSettingSection

const styles = StyleSheet.create({
    container:{
        marginBottom:20,
    },
    sectionTitleText: {
        backgroundColor:'white',
        paddingHorizontal: width * 0.05,
        fontFamily: 'GodoM',
        fontSize: 15,
        paddingVertical:20,
        borderColor:'grey',
        borderBottomWidth:1.5,
    }
})