
import React, { useCallback } from 'react'
import { Alert, TextInput, Dimensions, StyleSheet, View,} from 'react-native'

const { width, height } = Dimensions.get('window')

import { SettingItem } from '../../component/SettingItem'
import WarningModal from '../../group/MyGroup/MyGroupSetting/WarningModal'


const breakGroupModalData = {
    title: '그룹 해체하기',
    content: '그룹을 해체하면 그동안 기록 되었던 그룹 정보, 공부 기록 등 데이터들이 사라집니다. 한번 그룹을 해체하면 다시는 데이터를 복구할 수 없습니다. \n정말로 해체하시겠습니까?',
    buttonText: '그룹 해체하기'
}
//프로필 사진, 닉네임, 각오, 공개 설정
const miscSettingItems = [
    {
        tag: '로그아웃하기',
        type: 'custom',
        option: {
            onPress:()=>{
                Alert.alert(                    
                    '정말 로그아웃하시겠습니까?',                    
                    '',
                    [
                        {
                            text: "아니요",
                            style: "cancel"
                        },
                        { text: "네", onPress: () => console.log('log-outted') },
                    ],
                    { cancelable: false }
                )
            }
        }
    },
    {//회원가입 정보들,
        tag: '회원 탈퇴하기',
        type: 'custom',
        option: {
            onPress:()=>{
                Alert.alert(                    
                    '정말 탈퇴하시겠습니까?',                    
                    '',
                    [
                        {
                            text: "아니요",
                            style: "cancel"
                        },
                        { text: "네", onPress: () => console.log('quitted membership') },
                    ],
                    { cancelable: false }
                )
            }
        }
    },

]


const MiskSettingSection = () => {
    return (
        <View style={styles.container}>
            <TextInput
                editable={false}
                style={styles.sectionTitleText}>
                기타 설정
            </TextInput>
            {miscSettingItems.map((item, idx) => <SettingItem key={idx} {...item}></SettingItem>)}

        </View>
    )
}

export default MiskSettingSection

const styles = StyleSheet.create({
    container:{
        marginBottom:0,
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