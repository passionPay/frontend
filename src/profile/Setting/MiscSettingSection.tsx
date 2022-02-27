
import React, { useCallback } from 'react'
import { Alert, TextInput, Dimensions, StyleSheet, View,} from 'react-native'

const { width, height } = Dimensions.get('window')

import { SettingItem } from '../../component/SettingItem'

const miscSettingItems = [
    {
        tag: '로그아웃하기',
        type: 'custom',
        option: {
            onPress:()=>{
                Alert.alert('정말 로그아웃하시겠습니까?',                    
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
    {
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