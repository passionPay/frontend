import React, {useEffect,useMemo, useState} from 'react'
import {View,Text,TouchableOpacity,StyleSheet,Dimensions} from 'react-native'
import moment from 'moment'

import ProgressBar from '../../component/ProgressBar'
import WeekChart from '../../component/chart/WeekChart'
import MonthChart from '../../component/chart/MonthChart'

import WeekCalander from './WeekCalandar'
import { getTodayWeekValue } from '../dateManager'
import {MonthSelectDropdown,WeekSelectDropdown,DateSelectDropdown} from './DateSelectDropdown'

const { width, height } = Dimensions.get('window')

const getCardText = (tabNumber) => {
    switch(tabNumber){
        case 0 :
            return ['하루 목표 공부시간','하루 공부시간']
        case 1 :
            return ['일주일 누적 공부시간','일주일 평균 공부시간']
        case 2 :
            return ['월 누적 공부시간','월 평균 공부시간']
        default :
            throw 'wrong tabNumbered occur in getCard Text'
    }
}

const DailyHistoryScreen = ()=>{
    const [date,setDate] = useState(moment().subtract(15,'d'))
    const [dateValue,setDateValue] = useState(moment().date())
    const [yearValue,setYearValue] = useState(moment().year())
    const [monthValue,setMonthValue] = useState(moment().month()+1)
    return (
    <>  
        <DateSelectDropdown 
            yearValue={yearValue}
            setYearValue={setYearValue}
            monthValue={monthValue}
            setMonthValue={setMonthValue}
            dateValue={dateValue}
            setDateValue={setDateValue}
        />  
        {/* <WeekCalander date={date} setDate={setDate}/>                */}
        <View style={{marginVertical:height*0.02, flexDirection:'row',justifyContent:'space-between', marginHorizontal:width*0.05, height:width*0.3}}>
            <View style={styles.timeCard}>
                <Text style={{fontSize:14}}>{getCardText(0)[0]}</Text>
                <Text style={{fontSize:20,marginTop:width*0.02,fontWeight:'bold'}}>12:30:00</Text>

            </View>
            <View style={styles.timeCard}>
                <Text style={{fontSize:14}}>{getCardText(0)[1]}</Text>
                <Text style={{fontSize:20,marginTop:width*0.02,fontWeight:'bold'}}>1:30:20</Text>

            </View>
        </View>
        <ProgressBar style={{width:width*0.82, height:7,paddingHorizontal:width*0.01}} progress={1} hasIndicator/>

    </>
    )
}
const WeeklyHistoryScreen = ()=>{

    const todayWeekValueSet = useMemo(()=>getTodayWeekValue(),[])
    const [weekValue,setWeekValue] = useState(todayWeekValueSet.weekValue)
    const [yearValue,setYearValue] = useState(moment().year())
    const [monthValue,setMonthValue] = useState(todayWeekValueSet.month)



    return (
    <>
        <WeekSelectDropdown 
            yearValue={yearValue}
            setYearValue={setYearValue}
            monthValue={monthValue}
            setMonthValue={setMonthValue}
            weekValue={weekValue}
            setWeekValue={setWeekValue}
        />             
        <WeekChart style={{marginHorizontal:width*0.05,
                    marginVertical:height*0.03,
                    height:150,
                    width:width*0.9}}/>     
        <View style={{marginVertical:height*0.02, flexDirection:'row',justifyContent:'space-between', marginHorizontal:width*0.05, height:width*0.3}}>
            <View style={styles.timeCard}>
                <Text style={{fontSize:14}}>{getCardText(1)[0]}</Text>
                <Text style={{fontSize:20,marginTop:width*0.02,fontWeight:'bold'}}>12:30:00</Text>
            </View>
            <View style={styles.timeCard}>
                <Text style={{fontSize:14}}>{getCardText(1)[1]}</Text>
                <Text style={{fontSize:20,marginTop:width*0.02,fontWeight:'bold'}}>1:30:20</Text>
            </View>
        </View>
    </>
    )
}

const MonthlyHistoryScreen = ()=>{

    const [yearValue,setYearValue] = useState(moment().year())
    const [monthValue,setMonthValue] = useState(moment().month()+1)


    return (
    <>
        <MonthSelectDropdown 
            yearValue={yearValue}
            setYearValue={setYearValue}
            monthValue={monthValue}
            setMonthValue={setMonthValue}
        />          
        <MonthChart style={{marginHorizontal:width*0.05,
                    marginVertical:height*0.03,
                    height:150,
                    width:width*0.9}}/>     
        <View style={{marginVertical:height*0.02, flexDirection:'row',justifyContent:'space-between', marginHorizontal:width*0.05, height:width*0.3}}>
            <View style={styles.timeCard}>
                <Text style={{fontSize:14}}>{getCardText(1)[0]}</Text>
                <Text style={{fontSize:20,marginTop:width*0.02,fontWeight:'bold'}}>12:30:00</Text>
            </View>
            <View style={styles.timeCard}>
                <Text style={{fontSize:14}}>{getCardText(1)[1]}</Text>
                <Text style={{fontSize:20,marginTop:width*0.02,fontWeight:'bold'}}>1:30:20</Text>
            </View>
        </View>


    </>
    )
}



export {DailyHistoryScreen,WeeklyHistoryScreen,MonthlyHistoryScreen}


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