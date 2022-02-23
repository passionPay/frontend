import React, {useCallback,useEffect,useState} from 'react'
import { TextInput,Platform, Dimensions,StyleSheet, SafeAreaView, View, Image,Text,ScrollView, TouchableOpacity } from 'react-native'
import {useNavigation} from '@react-navigation/native'

import MemberItem from './MemberItem'


const { width, height } = Dimensions.get('window')

type RankDataType ={
    name: string,
    rank: number,
    time : string,
}

const datas : RankDataType[] = [
    {
        rank:1,
        name:'윤예슬',
        time:'22시간 30분'
    },
    {
        rank:2,
        name:'고달픈승구',
        time:'22시간 30분'
    },
    {
        rank:3,
        name:'바보',
        time:'22시간 30분'
    },
    {
        rank:4,
        name:'ghghgghhghhghghghghghghghghghghghghghghghghghghghghghgh',
        time:'22시간 30분'
    },
    {
        rank:5,
        name:'윤예슬',
        time:'22시간 30분'
    },
]

const ManageMembers = ()=>{
    const navigation = useNavigation<any>()
    const goBack = useCallback(()=>navigation.goBack(),[])

    
    return (
        <SafeAreaView style={styles.safeContainer}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.header} onPress={goBack}>
                    <Text style={{
                                    fontSize: 13,
                                    fontFamily: 'GodoM',
                                    color: '#9F9F9F',
                                }}>
                    {`< 그룹 설정`}</Text>
                </TouchableOpacity>
                <Text style={styles.title}>{'그룹 멤버 관리'}</Text>
                <ScrollView>
                    {datas.map((item,idx)=>(
                        <MemberItem data={item} key={idx} />
                    ))}
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default ManageMembers

const styles=StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container:{
        flex:1,
        paddingHorizontal:width*0.05,
    },
    header:{
        height:50,
        justifyContent:'center',
        alignSelf:'baseline',

    },
    title: {
        fontSize: 18,
        fontFamily: 'GodoM',
        color: '#000',
        marginBottom:height*0.02,
        

    },
    info: {
        fontSize: 15, 
        paddingVertical: 10,
        // paddingTop:10,
        // borderRadius: 10,
        // backgroundColor:'#f9f9f9',
        // borderBottomWidth:0.5,
        borderWidth:0.4,
        paddingHorizontal: 10, 
        marginHorizontal: 20, flex: 1
    },
    info2: {
        fontSize: 15,

        paddingTop:10,
        paddingBottom:10,
        height:300,
        // borderRadius: 10,
        // backgroundColor:'#f9f9f9',
        // borderBottomWidth:0.5,
        borderWidth:0.4,
        paddingHorizontal: 10, 
        marginHorizontal: 20, flex: 1
    },
    noticeTitleContainer:{
        flexDirection:'row',
        marginTop:10,
    },
    noticeContentContainer:{
        flexDirection:'row',
        marginTop:30,
    }
})