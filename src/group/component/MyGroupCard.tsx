import React, {useCallback} from 'react'
import { Platform,Dimensions,StyleSheet, View, Image,Text,ScrollView ,TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native'

const currentData = getJSON()[0];
const MyGroupCard = () => {

    const navigation = useNavigation<any>()
    const myGroup = useCallback(()=>navigation.navigate('MyGroup'),[])

    return (

        <TouchableOpacity style={[styles.cardView,styles.shadow]} onPress={myGroup}>
            <Text style={styles.title}>{currentData.title}</Text>
            <Text numberOfLines={2} ellipsizeMode={'tail'} style={styles.content}>
                {currentData.content}</Text>
            <View>
                <Text style={styles.memberTitle}>그룹 멤버</Text>
                <View style={styles.memberContainer}>
                    <Image source={require('../../../images/5.png')} style={styles.memberImage} />
                    <Image source={require('../../../images/5.png')} style={styles.memberImage} />
                    <Image source={require('../../../images/5.png')} style={styles.memberImage} />
                    <Image source={require('../../../images/5.png')} style={styles.memberImage} />
                    <Image source={require('../../../images/5.png')} style={styles.memberImage} />
                    <Image source={require('../../../images/5.png')} style={styles.memberImage} />
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

export default MyGroupCard



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
    cardView: {
        width: 240,
        borderRadius: 10, 
        marginLeft:5,
        marginRight: 15,
        marginTop:10,
        marginBottom:10,

        borderWidth: 0,
        backgroundColor:'#f9f9f9',
        paddingVertical: 8, paddingHorizontal: 20,
        flex:1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        // backgroundColor:'#E5E5E5',
    },
    title:{
        fontSize: 13, paddingBottom: 5, fontWeight: 'bold',
    },
    content:{
        fontSize: 10, paddingBottom: 5, marginBottom: 'auto',
    },
    memberContainer:{
        flex: 1,
        flexDirection: 'row', // 혹은 'column'
    },
    memberTitle:{
        fontSize: 10, paddingBottom: 5, marginBottom: 'auto',
    },
    memberImage:{
        width: 24, height: 24, borderWidth: 1,
        borderRadius: 12,
        marginHorizontal:'2%'
        // backgroundColor: '#ddd',
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
        fontSize: 10,
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