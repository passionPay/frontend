import React from 'react'
import { Platform,Dimensions,StyleSheet, View, Image,Text,ScrollView ,TouchableOpacity} from 'react-native'

import ProgressBar from '../../../component/ProgressBar';
const { width, height } = Dimensions.get('window')


const currentData = getJSON()[0];
const OtherGroupCard = () => {
    return (

        <TouchableOpacity style={[styles.cardView,styles.shadow]} onPress={() => {

        }}>
            <Text style={styles.title}>{currentData.title}</Text>
            <Text numberOfLines={2} ellipsizeMode={'tail'} style={styles.content}>
                {currentData.content}</Text>
            <View>
                <View style={styles.groupTime}>
                    <Text style={{fontSize:12, }}>그룹 평균 공부시간</Text>
                    <Text style={{fontSize:12, fontWeight:'700', marginLeft:15}}>11:22:33</Text>
                </View>

            </View>
            <View>
                <View style={styles.progressBarContainer}>
                    <Text style={styles.progressText}>평균 목표 달성률(시간)</Text>
                    <ProgressBar hasIndicator={false} style={styles.progressBar}/>
                </View>
                <View style={styles.progressBarContainer}>
                    <Text style={styles.progressText}>평균 목표 달성률(미션)</Text>
                    <ProgressBar hasIndicator={false} style={styles.progressBar}/>

                </View>
            </View>
            <View style={styles.groupMissionContainer}>
                <View style={{paddingTop:0, paddingRight:3}}>
                    <Image style={{width:10,height:10}}source={require('../../../../images/group/trophy.png')} />
                </View>
                    <Text style={styles.mission}>{`${currentData.firstMission} 외 목표 ${currentData.missionCount-1}개`}</Text>
            </View>
            
        </TouchableOpacity>
    )
}

export default OtherGroupCard



const styles = StyleSheet.create({
    cardView: {
        width: width*0.85,
        borderWidth:1.3,
        borderColor :'#c4c4c4',
        borderRadius: 10, 
        marginTop:10,

        backgroundColor:'#ffffff',
        paddingTop: 20, paddingBottom :15, paddingHorizontal: 20,
        flex:1,
        
        alignSelf:'center',
    },
    shadow:{
        ...Platform.select({
            ios: {
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.02,
            },
            android: {
                elevation: 0.05, 
            },
        }
    )
    },
    title:{
        fontFamily: 'GodoM',
        fontSize: 15, paddingBottom: 10, fontWeight: '500',
    },
    content:{
        textAlign:'center',
        fontWeight: 'normal',
        fontSize: 12, paddingBottom: 8, marginBottom: 'auto',
    },
    groupTime:{
        flex: 1,
        flexDirection: 'row',
        justifyContent:'center',
        marginBottom:20,
    },
    progressBarContainer:{
        marginTop:1,
        marginBottom: 3,
    },
    progressBar:{
        width:width*0.75,
        height:3,
        backgroundColor:'#0085FF',
    },
    progressText:{
        fontSize: 9,
        marginBottom:2,
        alignSelf:'flex-end',
    },
    mission:{
        fontFamily: 'GodoM',
        fontSize: 10,
    },
    groupMissionContainer:{
        marginTop:8,
        paddingTop:3, 
        flexDirection:'row', 
        alignItems:'center'
    }
})






function getJSON() {
    return [
        {
            _id: '0',
            title: "3학년 1반 국어 스터디",
            content: "1학기 매일 공부할 사람만~",
            timeProgress: 40,
            missonProgress:40,
            firstMission :"하루 3시간 이상 국어 공부하기",
            missionCount:3,
        },
        {
            _id: '1',
            title: "3학년 1반 국어 스터디",
            content: "1학기 매일 공부할 사람만~",
            timeProgress: 40,
            missonProgress:40,
            firstMission :"하루 3시간 이상 국어 공부하기",
            missionCount:3,

        },
        {
            _id: '2',
            title: "3학년 1반 국어 스터디",
            content: "1학기 매일 공부할 사람만~",
            timeProgress: 40,
            missonProgress:40,
            firstMission :"하루 3시간 이상 국어 공부하기",
            missionCount:3,

        },
        {
            _id: '3',
            title: "3학년 1반 국어 스터디",
            content: "1학기 매일 공부할 사람만~",
            timeProgress: 40,
            missonProgress:40,
            firstMission :"하루 3시간 이상 국어 공부하기",
            missionCount:3,

        },

    ]
}