import React, {useCallback} from 'react'
import { Platform, Dimensions,StyleSheet, SafeAreaView, View, Image,Text,ScrollView, TouchableOpacity } from 'react-native'
import {useNavigation} from '@react-navigation/native'

import MyGroupMissionGoal from './component/myGroup/MyGroupMissionGoal'

const { width, height } = Dimensions.get('window')



export default function MyGroupGoal() {
    const navigation = useNavigation<any>()
    const goBack = useCallback(()=>navigation.goBack(),[])
    return (
    <SafeAreaView style={styles.safeContainer}>
        <View style={styles.container}>
                <TouchableOpacity style={styles.header} onPress={goBack}>
                    <Text style={{fontSize: 17,
                                fontFamily: 'GodoM',
                                color: '#9F9F9F',
                                // backgroundColor:'#000000'
                                
                                }} >
                    &lt; 3학년 1반 국어스터디 </Text>
                </TouchableOpacity>
                <Text style={styles.title}>그룹 목표</Text>

            <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}> 
                <MyGroupMissionGoal/>

            </ScrollView>
        </View>
    </SafeAreaView>
    )
}

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
    header:{
        height:60,
        // backgroundColor:'#ff0000',
        justifyContent:'center',
        alignSelf:'baseline',
    },
    safeContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container:{
        flex:1,
        paddingHorizontal: '5%',
    },
    title: {
        fontSize: 24,
        fontFamily: 'GodoM',
        color: '#000',
        marginBottom:height*0.02,
        
    },
    subContainer:{
        paddingTop:height*0.04,
    },
    subtitleText:{
        fontSize: 20,
        fontFamily: 'GodoM',
    },
})

