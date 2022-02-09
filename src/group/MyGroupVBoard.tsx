import React, {useCallback} from 'react'
import { Platform, Dimensions,StyleSheet, SafeAreaView, View, Image,Text,ScrollView, TouchableOpacity } from 'react-native'
import {useNavigation} from '@react-navigation/native'

const { width, height } = Dimensions.get('window')


const data ={
    groupName:'3학년 1반 국어 스터디',
    groupDescription:'1학기 매일 공부할 사람만~',
    groupNoticeTitle:'[필독] 지켜야 할 사항',
    groupMissions:['하루 3시간 이상 국어 공부하기',
                    '하루 1시간 바보',
                '저녁은 언제먹지',],
    groupTimes:{goal:'14:00:00',
                avg:'9:20:03',
                my:'1:38:34',},
}


export default function MyGroupVBoard() {

    const navigation = useNavigation<any>()
    const goBack = useCallback(()=>navigation.goBack(),[])

    return (
    <SafeAreaView style={styles.safeContainer}>
        <View style={styles.container}>

                <TouchableOpacity style={styles.header} onPress={goBack}>
                    <Text style={{fontSize: 17,
                                fontFamily: 'GodoM',
                                color: '#9F9F9F',
                                // backgroundColor:'#000000'
                                
                                }} >
                    &lt; 3학년 1반 국어스터디 </Text>
                </TouchableOpacity>
            <ScrollView showsVerticalScrollIndicator={false}> 
                <Text style={styles.title}>인증게시판</Text>
                <Text style={styles.groupDescription}>{data.groupDescription}</Text>
            </ScrollView>
            
        </View>
    </SafeAreaView>
    )

}


const styles = StyleSheet.create({
    shadow:{
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
    )},
    header:{

        height:60,

        // backgroundColor:'#ff0000',
        justifyContent:'center',
        alignSelf:'baseline',


    },
    safeContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container:{
        paddingHorizontal: '5%',
    },
    title: {
        fontSize: 24,
        fontFamily: 'GodoM',
        color: '#000',
        
    },

    groupDescription: {
        fontSize: 17,
        fontFamily: 'GodoM',
        color: '#484848',
        marginTop: width*0.05,
    },
    

})

