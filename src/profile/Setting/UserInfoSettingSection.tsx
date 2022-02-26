
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
//회원가입 정보들,
const userInfoSettingItems = [
    {
        tag: '비밀번호 변경',
        type: 'navigatorWithParams',
        option: {
            navigatorName: 'SetNotice',
            params: {
                // prevState: noticePrevState,
                isEditMode: true,
            }
        }
    },
    {
        tag: '이메일 변경',
        type: 'navigatorWithParams',
        option: {
            navigatorName: 'MakeGroup',
            params: {
                // prevState: groupPrevState,
                isEditMode: true,
            }
        }
    },
    
]


const UserInfoSettingSection = () => {
    return (
        <View style={styles.container}>
            <TextInput
                editable={false}
                style={styles.sectionTitleText}>
                회원 정보 설정
            </TextInput>
            {userInfoSettingItems.map((item, idx) => <SettingItem key={idx} {...item}></SettingItem>)}
        </View>
    )
}

export default UserInfoSettingSection

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