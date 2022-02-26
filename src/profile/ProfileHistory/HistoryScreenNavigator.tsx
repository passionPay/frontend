import React, {useEffect, useState} from 'react'
import {View,Text,TouchableOpacity,StyleSheet,Dimensions} from 'react-native'

import {DailyHistoryScreen,WeeklyHistoryScreen,MonthlyHistoryScreen} from './HistoryScreen'

const { width, height } = Dimensions.get('window')


const Screen = ({tabNumber})=>{
    switch(tabNumber){
        case 0:
            return <DailyHistoryScreen/>
        case 1:
            return <WeeklyHistoryScreen/>
        case 2:
            return <MonthlyHistoryScreen/>
        default:
            throw 'wrong tabNumber at Screen at HistroyScreenNavigator.tsx'
    }
}

const HistoryScreenNavigator = ({tabNumber=0})=>{

    return (
    <>
        <Text style={{
                marginTop:height*0.02,
                marginHorizontal:width*0.05,
                fontSize: 17,
                fontFamily: 'GodoM',
                color: '#000',
            }}>히스토리
        </Text>
       <Screen tabNumber={tabNumber}/> 
    </>
    )
}

export default HistoryScreenNavigator

const styles = StyleSheet.create({
    timeCard:{
        width:width*0.44,
        borderWidth:1,
        borderRadius:10,
        borderColor:'grey',
        alignItems:'center',
        justifyContent:'center'
        
    }
})