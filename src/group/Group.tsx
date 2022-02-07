import React from 'react'
import { Dimensions,StyleSheet, SafeAreaView, View, Image,Text,ScrollView } from 'react-native'
import MyGroupCard from './component/MyGroupCard'

const { width, height } = Dimensions.get('window')


export default function Group() {
    return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
            <View style={styles.topView}>
                    <Text style={styles.title}>함께 공부하기</Text>
            </View>
            <View style={styles.myGroup}>
                <Text style={styles.myGroupTitle}>내 스터디 그룹</Text>
                <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false}>
                    <MyGroupCard/>
                    <MyGroupCard/>
                    <MyGroupCard/>
                </ScrollView>
            </View>
            
        </ScrollView>

    </SafeAreaView>
    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: '10%',
    },
    topView: {
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingTop: '15%',
        paddingBottom: '10%'
    },
    title: {
        fontSize: 24,
        fontFamily: 'GodoM',
        color: '#000'
    },
    myGroupTitle: {
        fontSize: 17,
        fontFamily: 'GodoM',
        color: '#484848',
        marginTop: 5
    },
    image: {
        width: 60, height: 60, borderWidth: 1,
        borderRadius: 10, backgroundColor: '#ddd'
    },
    myGroup:{

    }
})








//////////-----------------temporary-----------------------------------/////
function getJSON() {
    return [
        {
            _id: '0',
            title: "3학년 1반 국어 스터디",
            content: "1학기 매일 공부할 사람만~",
            timeProgress: 40,
            missonProgress:40,
            firstMission :"하루 3시간 이상 국어 공부하기",
        },
        {
            _id: '1',
            title: "3학년 1반 국어 스터디",
            content: "1학기 매일 공부할 사람만~",
            timeProgress: 40,
            missonProgress:40,
            firstMission :"하루 3시간 이상 국어 공부하기",
        },
        {
            _id: '2',
            title: "3학년 1반 국어 스터디",
            content: "1학기 매일 공부할 사람만~",
            timeProgress: 40,
            missonProgress:40,
            firstMission :"하루 3시간 이상 국어 공부하기",
        },
        {
            _id: '3',
            title: "3학년 1반 국어 스터디",
            content: "1학기 매일 공부할 사람만~",
            timeProgress: 40,
            missonProgress:40,
            firstMission :"하루 3시간 이상 국어 공부하기",
        },

    ]
}
