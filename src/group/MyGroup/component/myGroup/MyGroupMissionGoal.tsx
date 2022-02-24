import React from 'react'
import { Platform, Dimensions,StyleSheet, SafeAreaView, View, Image,Text,ScrollView, TouchableOpacity } from 'react-native'

import GroupGoalChart from '../GroupGoalChart'

import ProgressBar from '../../../../component/ProgressBar'

const { width, height } = Dimensions.get('window')

const MissionProgress = ()=>{
    return (
        <View style={styles.subContainer}>
            <Text style={(width*0.04<20)?styles.subtitleTextSmall:styles.subtitleText}>5개 중 2개의 미션 완료</Text>
            <View>
                <ProgressBar style={{width:width*0.82, height:7,paddingHorizontal:width*0.01}} progress={0.5} hasIndicator/>
            </View>
        </View>
    )
}

const MissionItem = ({hasCompleted=false}) =>{
    return(
        <TouchableOpacity style={missionItemStyles.mainContainer}>
            <Image style={{marginLeft:15,width:25,height:25}}source={require('../../../../../images/group/trophy.png')} />
            <Text numberOfLines={2} style={{ fontSize:12,marginHorizontal:5, textAlign:'center', flex:1}}> 하루 3시간 이상 국어 공부adddddddddddsdfsdfweafwefeffawfaweasfadsfsaewf하기</Text>
            <TouchableOpacity style={{marginRight:15, width:20,height:20,borderWidth:1,borderRadius:5}}></TouchableOpacity>
        </TouchableOpacity>
    )
}


const Missions = ({hasCompleted})=>{
    const text = hasCompleted ? '완료한 미션 ' : '오늘 총 3개의 완료하지 못한 미션이 남아있어요'
    return (
        <View style={styles.subContainer}>
            <Text style={[(width*0.04<20)?styles.subtitleTextSmall:styles.subtitleText,{marginBottom:10,}]}>{text}</Text>
            <MissionItem/>
            <MissionItem/>
            <MissionItem/>
        </View>
    )
}

Missions.defaultProps={
    hasCompleted:true,
}

const OtherChart = ()=>{
    return (
        <View style={styles.subContainer}>
            <Text style={styles.subtitleTextSmall}>친구들은 오늘 이만큼 공부했어요</Text>
            <GroupGoalChart/>
        </View>
    )
}




const MyGroupMissionGoal = () =>{
    return (
    <>
        <MissionProgress/>
        <Missions hasCompleted={false}/>
        <Missions hasCompleted={true}/>
        <OtherChart/>
    </>
    )
}

export default MyGroupMissionGoal

const styles = StyleSheet.create({
    subContainer:{
        paddingTop:height*0.04,
    },
    subtitleText:{
        fontSize: 20,
        fontFamily: 'GodoM',
    },
    subtitleTextSmall:{
        fontSize: width*0.04,
        fontFamily: 'GodoM',
    }

})

const missionItemStyles = StyleSheet.create({
    mainContainer :{
        backgroundColor:'#F9F9F9',
        padding:width*0.01,
        height: 50,
        marginVertical:2,
        marginHorizontal:5,
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
    },
})