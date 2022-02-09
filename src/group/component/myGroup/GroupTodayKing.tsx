import React from 'react'
import { TouchableOpacity,Platform,Dimensions,StyleSheet, SafeAreaView, View, Image,Text,ScrollView } from 'react-native'

import MemberIcon from '../MemberIcon'

const { width, height } = Dimensions.get('window')

const data = {
    rank:1,
    name:'윤예슬',
    talk:'24학점은 기본이죠 윙가르디움 레비오우사 ㅁㅇㄴㄹㄴㅇ',
    time:'22시간 30분'
}

const RankItem = ({data}) =>{
    return(
    <TouchableOpacity style={[itemStyles.mainContainer,styles.shadow]}>
            <View style={itemStyles.memberRankContainer}>
                <Text style={styles.titleText}>1</Text>
            </View>
            <View style={itemStyles.memberIconContainer}>
                <MemberIcon size={45}/>
            </View>
            <View style={itemStyles.memberNameContainer}>
                <Text style={itemStyles.memberNameText}>윤예슬</Text>
            </View>
            <View style={itemStyles.memberTalkContainer}>
                <Text style={itemStyles.memberTalkText}>
                    24학점은 기본이죠 윙가르디움 레비오우사 ㅁㅇㄴㄹㄴㅇ
                </Text>
            </View>
            <View style={itemStyles.memberTimeContainer}>
                <Text style={itemStyles.memberTimeText}>
                    22시간 30분
                </Text>
            </View>

    </TouchableOpacity>
    )
}

const GroupTodayKing =()=>{
    return (
    <>
        <View style={styles.mainContainer}>
            <View style={styles.subtitleContainer}>
                <Text style={styles.titleText}>오늘의 공부왕</Text>
                <TouchableOpacity style={{
                    marginLeft:'auto', marginRight:10, marginBottom:2,
                    alignSelf:'flex-end'
                    }}>
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

const itemStyles = StyleSheet.create({
    mainContainer :{
        backgroundColor:'#F9F9F9',
        padding:width*0.01,
        height: 70,
        marginVertical:5,
        marginHorizontal:5,
        borderRadius:10,
        flexDirection:'row',
    },
    
    memberRankContainer:{
        flex:0.7,
        // backgroundColor:'#ff0000',
        alignItems:'center',
        justifyContent:'center',
    },
    memberIconContainer:{
        // flex:1,
        backgroundColor:'#00ff00',
        alignItems:'center',
        justifyContent:'center',
    },
    memberNameContainer:{
        flex:1,
        backgroundColor:'#0000ff',
        alignItems:'center',
        justifyContent:'center',
    },
    memberNameText:{
        fontSize:15,
    },
    memberTalkContainer:{
        backgroundColor:'#ff0000',
        flex:2.2,
        // paddingHoizontal:widh
        // alignItems:'center',
        justifyContent:'center',
    },
    memberTalkText:{
        fontSize:15,
    },
    memberTimeContainer:{
        flex:1,
        // backgroundColor:'#00ff00',
        alignItems:'center',
        justifyContent:'center',
    },
    memberTimeText:{
        fontSize:11,
    },


})