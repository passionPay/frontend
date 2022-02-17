import React, {useCallback} from 'react'
import { TouchableOpacity,Platform,Dimensions,StyleSheet, SafeAreaView, View, Image,Text,ScrollView } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import MemberIcon from '../../../component/MemberIcon'

const { width, height } = Dimensions.get('window')


const data = {
    rank:1,
    name:'윤예슬',
    talk:'24학점은 기본이죠 윙가르디움 레비오우사 ㅁㅇㄴㄹㄴㅇ',
    time:'22시간 30분'
}

const RankItem = ({data}) =>{
    return(
    <TouchableOpacity style={[itemStyles.mainContainer,itemStyles.shadow]}>
            <View style={itemStyles.memberRankContainer}>
                <Text style={itemStyles.titleText}>1</Text>
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

export default RankItem

const itemStyles = StyleSheet.create({
    titleText:{
        fontSize: 20,
        fontFamily: 'GodoM',
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
    )},
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