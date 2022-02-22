import React, {useCallback} from 'react'
import { TouchableOpacity,Platform,Dimensions,StyleSheet, SafeAreaView, View, Image,Text,ScrollView } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import MemberIcon from '../../../component/MemberIcon'
import CrownIcon from '../../../../svgs/CronwIcon'
const { width, height } = Dimensions.get('window')


type RankDataType ={
    name: string,
    rank: number,
    time : string,
}

const RankItem = ({data}) =>{
    return(
    <TouchableOpacity style={[itemStyles.mainContainer]}>
            <View style={itemStyles.memberRankContainer}>
                <Text style={itemStyles.titleText}>1</Text>
                {/* <CrownIcon width={'100%'} height={'100%'} color={'gold'} /> */}
            </View>
            <View style={itemStyles.memberContainer}>
                <MemberIcon size={45}/>
                <Text style={itemStyles.memberNameText}>{data.name}</Text>

            </View>
            {/* <View style={itemStyles.memberTalkContainer}>
                <Text style={itemStyles.memberTalkText}>
                    24학점은 기본이죠 윙가르디움 레비오우사 ㅁㅇㄴㄹㄴㅇasdfwefewfawefewafewfwaefweaewfaefwef
                </Text>
            </View> */}
            <View style={itemStyles.memberTimeContainer}>
                <Text style={itemStyles.memberTimeText}>
                    22:30:13
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
        paddingLeft:width*0.03,
        height: 70,
        marginVertical:5,
        marginHorizontal:5,
        borderRadius:10,
        flexDirection:'row',
        borderWidth:0.5,
        borderColor:'#c4c4c4',
    },
    
    memberRankContainer:{
        flex:1,
        // backgroundColor:'#ff0000',
        alignItems:'center',
        justifyContent:'center',
    },
    memberContainer:{
        flex:3,
        // backgroundColor:'#ffff00',

        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
    },
    memberNameText:{
        fontSize:14,
        fontFamily:'GodoM',
        marginLeft:width*0.02,
        flex:1,
    },
    memberTalkText:{
        fontSize:12,
    },
    memberTimeContainer:{

        // backgroundColor:'#00ff00',
        alignItems:'center',
        justifyContent:'center',
    },
    memberTimeText:{
        marginRight:20,
        marginLeft:15,
        fontSize:20,
        fontFamily:'GodoM',

    },


})