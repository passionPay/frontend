import React, {useCallback} from 'react'
import { TouchableOpacity,Platform,Dimensions,StyleSheet, SafeAreaView, View, Image,Text,ScrollView } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import RankItem from './RankItem'

const { width, height } = Dimensions.get('window')

const data = {
    rank:1,
    name:'윤예슬',
    talk:'24학점은 기본이죠 윙가르디움 레비오우사 ㅁㅇㄴㄹㄴㅇ',
    time:'22시간 30분'
}


const GroupTodayKing =()=>{
    const navigation = useNavigation<any>()
    const myGroupRank = useCallback(()=>navigation.navigate('MyGroupRank'),[])

    return (
    <>
        <View style={styles.mainContainer}>
            <View style={styles.subtitleContainer}>
                <Text style={styles.titleText}>오늘의 공부왕</Text>
                <TouchableOpacity style={{
                    marginLeft:'auto', marginRight:10, marginBottom:2,
                    alignSelf:'flex-end'
                    }}
                    onPress={myGroupRank}>
                    <Text style={styles.seeMore}>랭킹 더보기 &gt;</Text>
                </TouchableOpacity>
            </View>
            <RankItem data={data}/>
            <RankItem data={data}/>
            <RankItem data={data}/>
        </View>
    
    </>
    )
}

export default GroupTodayKing

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
    mainContainer:{
        paddingTop:height*0.04,
    },
    subtitleContainer:{
        flexDirection:'row',
        paddingBottom:10,
    },
    titleText:{
        fontSize: 20,
        fontFamily: 'GodoM',
    },
    seeMore:{
        color:'#7EBEF9',
        fontFamily:'GodoM',
        fontWeight:'bold',

    },


})

