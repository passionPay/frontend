import React from 'react'
import { Dimensions,StyleSheet, SafeAreaView, View, Image,Text,ScrollView } from 'react-native'
import MyGroupCard from './component/MyGroupCard'
import OtherGroupCard from './component/OtherGroupCard'
import SearchBar from './component/SearchBar'

const { width, height } = Dimensions.get('window')


export default function Group() {
    return (
    <SafeAreaView style={styles.safeContainer}>
        <ScrollView style={styles.container}> 
            <Text style={styles.title}>함께 공부하기</Text>
            <View style={styles.myGroups}>
                <Text style={styles.groupTitle}>내 스터디 그룹</Text>
                <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false}>
                    <MyGroupCard/>
                    <MyGroupCard/>
                    <MyGroupCard/>
                </ScrollView>
            </View>
            <View style={styles.otherGroups}>
                <Text style={styles.groupTitle}>둘러보기</Text>
                <SearchBar/>
                <OtherGroupCard/>
                <OtherGroupCard/>
                <OtherGroupCard/>
                <OtherGroupCard/>
                <OtherGroupCard/>
                <OtherGroupCard/>
                <OtherGroupCard/>
            </View>
        </ScrollView>
    </SafeAreaView>
    )

}


const styles = StyleSheet.create({
    
    safeContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },

    container:{
        paddingHorizontal: '7%',
        paddingTop: height*0.05,


    },
    title: {
        fontSize: 24,
        fontFamily: 'GodoM',
        color: '#000',
    },
    myGroups:{
        paddingTop: height*0.02,

    },
    groupTitle: {
        fontSize: 17,
        fontFamily: 'GodoM',
        color: '#484848',
        marginTop: 5,
    },
    image: {
        width: 60, height: 60, borderWidth: 1,
        borderRadius: 10, backgroundColor: '#ddd'
    },
    otherGroups:{
        paddingTop: height*0.02,
    }
    
})

