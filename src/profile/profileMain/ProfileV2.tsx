import React, {useCallback, useState} from 'react'
import { TouchableOpacity, Image, ScrollView, Dimensions, SafeAreaView,StyleSheet, Text, View } from 'react-native'
import {  TouchableIcon } from '../../component/CustomComponent'

import LinearGradient from 'react-native-linear-gradient'


import ProfileSection from './ProfileSection'
import RecordSection from './RecordSection'

import TitleWithSeeMore from '../../component/TitleWithSeeMore'
import MemberIcon from '../../component/MemberIcon'
import WeekChart from '../../component/chart/WeekChart'
import MonthChart from '../../component/chart/MonthChart'
import ProgressBar from '../../component/ProgressBar'
import {useNavigation} from '@react-navigation/native'

const { width, height } = Dimensions.get('window')

type ProfileDataType = {
    memberProfile:MemberProfileType,
    date:string,

}


type MemberProfileType = {
    memberImage:string,
    memberName:string,
    followingCount:number,
    followerCount:number,
    postCount:number,
    commentPostCount:number,
    motto:string,
}
const initState :ProfileDataType = {
    memberProfile:{
        memberImage:'/',
        memberName:'고달픈승구',
        followingCount:100,
        followerCount:1000,
        postCount:10000,
        commentPostCount:100000,
        motto:'노력하는 자는 즐기는 자를 이기지 못한다. ㅁㄴㅇㄹ'
    },
    date:'2022-02-21',
}




export default function ProfileV2() {
    const navigation = useNavigation<any>()
    const studyHistory = useCallback(()=>navigation.navigate('StudyHistory'),[])
    
    const [data,setData] = useState(initState)
    
    return (
        <SafeAreaView style={styles.safeContainer}>
            <View style={styles.header}>
                <View>
                    <Text style={styles.titleText}>프로필</Text>
                </View>

                <View style={{flexDirection:'row'}}>
                    <TouchableIcon iconProps={{style:[styles.headerIcon,{marginLeft:'auto'}], name:'bell-outline', size:25, color:'black'}}/>
                    <TouchableIcon iconProps={{style:[styles.headerIcon], name:'cog-outline', size:23, color:'black'}}/>
                </View>
            </View>

            <ScrollView style={{flex:1,}} >
                <ProfileSection profileData={data.memberProfile}/>
                <RecordSection/>
                <TouchableOpacity style={styles.plannerButton}>
                        <Text style={{fontSize:14}}>플래너 보러가기</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
    

}

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header:{
        paddingHorizontal:'5%',
        height:60,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
        // backgroundColor:'#ff00ff'
    },
    titleText: {
        fontSize: 18,
        fontFamily: 'GodoM',
        color: '#000',
    },
    headerIcon:{
        paddingLeft:10,
    },
    
    timeCard:{
        width:width*0.43,
        borderWidth:1,
        borderRadius:10,
        borderColor:'grey',
        alignItems:'center',
        justifyContent:'center'
        
    },
    plannerButton:{
        marginTop:height*0.02,
        marginBottom:height*0.04,
        width:width*0.5,
        height:40,
        borderWidth:1,
        borderRadius:10,
        borderColor:'grey',
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center'
    }

})




