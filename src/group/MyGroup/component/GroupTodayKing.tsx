import React, {useCallback} from 'react'
import { TouchableOpacity,Platform,Dimensions,StyleSheet, SafeAreaView, View, Image,Text,ScrollView } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import RankItem from './RankItem'
import TitleWithSeeMore from '../../../component/TitleWithSeeMore'

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
            <TitleWithSeeMore 
                        style={styles.subtitleContainer}
                        titleStyle={styles.titleText}
                        seeMoreStyle={styles.seeMore}
                        title={'오늘의 공부왕'} seeMore={'랭킹 더보기 >'} 
                        seeMoreNavFunc={myGroupRank} />
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
        fontSize: 15,
        fontFamily: 'GodoM',
    },
    seeMore:{
        fontSize: 13,

        color:'#7EBEF9',
        fontFamily:'GodoM',
        fontWeight:'bold',

    },


})

