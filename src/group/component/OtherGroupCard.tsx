import React from 'react'
import { Platform,Dimensions,StyleSheet, View, Image,Text,ScrollView ,TouchableOpacity} from 'react-native'

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
                    <Text style={{fontSize:10, }}>그룹 평균 공부시간</Text>
                    <Text style={{fontSize:10, fontWeight:'700', marginLeft:15}}>11:22:33</Text>
                </View>
                <View style={styles.groupTime}>
                    <Text style={{fontSize:10, }}>그룹 평균 공부시간</Text>
                    <Text style={{fontSize:10, fontWeight:'700', marginLeft:15}}>11:22:33</Text>
                </View>
            </View>
            <View>
                <View style={styles.progressBarContainer}>
                    <Text style={styles.progressText}>평균 목표 달성률(시간)</Text>
                    <View style={styles.progressBar}>
                    </View>
                </View>
                <View style={styles.progressBarContainer}>
                    <Text style={styles.progressText}>평균 목표 달성률(미션)</Text>

                    <View style={styles.progressBar}>
                    </View>
                </View>
            </View>
            <View>
                <Text style={styles.mission}>{`${currentData.firstMission} 외 목표 ${currentData.missionCount-1}개`}</Text>
            </View>
            
        </TouchableOpacity>
    )
}

export default OtherGroupCard



const styles = StyleSheet.create({
    cardView: {
        marginHorizontal:5,
        width: '100%',
        borderRadius: 10, 
        marginRight: 20,
        marginTop:15,
        borderWidth: 0,
        backgroundColor:'#f9f9f9',
        paddingVertical: 30, paddingHorizontal: 20,
        flex:1,
        // backgroundColor:'#E5E5E5',
    },
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
    )
    },
    title:{
        fontSize: 13, paddingBottom: 5, fontWeight: 'bold',
    },
    content:{
        fontSize: 10, paddingBottom: 5, marginBottom: 'auto',
    },
    groupTime:{
        flex: 1,
        flexDirection: 'row',
        paddingTop:10,
    },
    progressBarContainer:{
        marginTop:1,
        marginBottom: 3,
    },
    progressBar:{
        height:3,
        backgroundColor:'#000000',
    },
    progressText:{
        fontSize: 9,
        marginBottom:2,
        alignSelf:'flex-end',
    },
    mission:{
        fontSize: 10
    },
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