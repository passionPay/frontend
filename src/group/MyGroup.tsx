import React, {useCallback} from 'react'
import { Platform, Dimensions,StyleSheet, SafeAreaView, View, Image,Text,ScrollView, TouchableOpacity } from 'react-native'

import NoticeBoard from './component/myGroup/NoticeBoard'

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


export default function MyGroup() {

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
                    &lt; 스터디 그룹 </Text>
                </TouchableOpacity>
            <ScrollView > 
                <Text style={styles.title}>{data.groupName}</Text>
                <Text style={styles.groupDescription}>{data.groupDescription}</Text>
                
                <NoticeBoard></NoticeBoard>
                <Text>sasdfas</Text>
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
        width:100,
        justifyContent:'center',
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
    container:{
        paddingHorizontal: '5%',
    },
    title: {
        fontSize: 24,
        fontFamily: 'GodoM',
        color: '#000',
        
    },
    myGroups:{
        paddingTop: height*0.02,
    },
    groupDescription: {
        fontSize: 17,
        fontFamily: 'GodoM',
        color: '#484848',
        marginTop: width*0.05,
    },
    noticeContainer:{
        backgroundColor:'#7EBEF9',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        height:40,
        alignItems:'center',
        flexDirection:'row',
        marginTop: width*0.05,
    },
    noticeIconContainer:{
        paddingLeft:10,
        paddingRight:15,
    },
    groupMenuContainer:{
        flexDirection:'row',
        borderBottomRightRadius:10,
        borderBottomLeftRadius:10,
        backgroundColor:'#F9F9F9',

    },
    groupMenu:{
        flex:1,
        flexGrow:1,
        alignItems:'center',
        padding:10,
        paddingTop:15,
    },
    menuText:{
        fontSize:12,
        paddingTop:5,
    }


    
})

