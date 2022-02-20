import React, {useState,useCallback, useEffect} from 'react'
import {View,Dimensions,StyleSheet} from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
import {isLeapYear,getWeekCountFromDate,getFirstDateFromWeekValue} from '../dateManager'
const { width, height } = Dimensions.get('window')


const dateNumbers = [31,28,31,30,31,30,31,31,30,31,30,31]



 const MonthSelectDropdown = ({
    yearValue,
    setYearValue,
    monthValue,
    setMonthValue,
  })=> {
  const [yearOpen, setYearOpen] = useState(false)
  const [yearItems, setYearItems] = useState([...Array(11)].map((v,i) => ({label:`${i+2020}년`,value:i+2020})))
  const [monthOpen, setMonthOpen] = useState(false)
  const [monthItems, setMonthItems] = useState([...Array(12)].map((v,i) => ({label:`${i+1}월`,value:i+1})));
  const onYearOpen = useCallback (()=>{
    setMonthOpen(false)
  },[])
  const onMonthOpen = useCallback (()=>{
    setYearOpen(false)
  },[])
  return (
      <View style={{
        flexDirection:'row',
        marginHorizontal:width*0.05,
        marginTop:height*0.02,
        height:120,
        marginBottom:-120 +height*0.03,
        zIndex:1,

      }}>
        <DropDownPicker
          style={{
            height:35,
          }}
          containerStyle={{
            width:120,
          }}
          maxHeight={120}
          autoScroll={true}
          open={yearOpen}
          onOpen={onYearOpen}
          value={yearValue}
          items={yearItems}
          setOpen={setYearOpen}
          setValue={setYearValue}
          setItems={setYearItems}
          listMode="SCROLLVIEW"  

        />
        <DropDownPicker
          style={{
              height:35,
          }}
          containerStyle={{
            marginLeft:10,
            width:90,
          }}
          autoScroll={true}
          maxHeight={120}
          open={monthOpen}
          onOpen={onMonthOpen}
          value={monthValue}
          items={monthItems}
          setOpen={setMonthOpen}
          setValue={setMonthValue}
          setItems={setMonthItems}
          listMode="SCROLLVIEW"  
        />
      </View>
    
  );
}

const DateSelectDropdown = ({
    yearValue,
    setYearValue,
    monthValue,
    setMonthValue,
    dateValue,
    setDateValue,
  })=> {
  const [yearOpen, setYearOpen] = useState(false)
  const [yearItems, setYearItems] = useState([...Array(11)].map((v,i) => ({label:`${i+2020}년`,value:i+2020})))
  const [monthOpen, setMonthOpen] = useState(false)
  const [monthItems, setMonthItems] = useState([...Array(12)].map((v,i) => ({label:`${i+1}월`,value:i+1})));
  const [dateOpen, setDateOpen] = useState(false)
  const [dateItems, setDateItems] = useState([...Array(dateNumbers[monthValue-1])].map((v,i) => ({label:`${i+1}일`,value:i+1})));

  const onYearOpen = useCallback (()=>{
    setMonthOpen(false)
    setDateOpen(false)
  },[])
  const onMonthOpen = useCallback (()=>{
    setYearOpen(false)
    setDateOpen(false)

  },[])
  const onDateOpen = useCallback (()=>{
    setYearOpen(false)
    setMonthOpen(false)
  },[])

  useEffect(()=>{
    if (monthValue==2&&isLeapYear(yearValue)){
      setDateItems([...Array(29)].map((v,i) => ({label:`${i+1}일`,value:i+1})))
    } 
    else {
      setDateItems([...Array(dateNumbers[monthValue-1])].map((v,i) => ({label:`${i+1}일`,value:i+1})))
    }
  },[yearValue,monthValue])


  return (
      <View style={{
        flexDirection:'row',
        marginHorizontal:width*0.05,
        marginTop:height*0.02,
        height:120,
        marginBottom:-120 +height*0.03,
        zIndex:1,

      }}>
        <DropDownPicker
          style={{
            height:35,
          }}
          containerStyle={{
            width:120,
          }}
          maxHeight={120}
          autoScroll={true}
          open={yearOpen}
          onOpen={onYearOpen}
          value={yearValue}
          items={yearItems}
          setOpen={setYearOpen}
          setValue={setYearValue}
          setItems={setYearItems}
          listMode="SCROLLVIEW"  

        />
        <DropDownPicker
          style={{
              height:35,
          }}
          containerStyle={{
            marginLeft:10,
            width:90,
          }}
          autoScroll={true}
          maxHeight={120}
          open={monthOpen}
          onOpen={onMonthOpen}
          value={monthValue}
          items={monthItems}
          setOpen={setMonthOpen}
          setValue={setMonthValue}
          setItems={setMonthItems}
          listMode="SCROLLVIEW"  
        />

        <DropDownPicker
          style={{
              height:35,
          }}
          containerStyle={{
            marginLeft:10,
            width:90,
          }}
          autoScroll={true}
          maxHeight={120}
          open={dateOpen}
          onOpen={onDateOpen}
          value={dateValue}
          items={dateItems}
          setOpen={setDateOpen}
          setValue={setDateValue}
          setItems={setDateItems}
          listMode="SCROLLVIEW"  
        />  
      </View>
    
  );
}

const WeekSelectDropdown = ({
    yearValue,
    setYearValue,
    monthValue,
    setMonthValue,
    weekValue,
    setWeekValue,
  })=> {
  const [yearOpen, setYearOpen] = useState(false)
  const [yearItems, setYearItems] = useState([...Array(11)].map((v,i) => ({label:`${i+2020}년`,value:i+2020})))
  const [monthOpen, setMonthOpen] = useState(false)
  const [monthItems, setMonthItems] = useState([...Array(12)].map((v,i) => ({label:`${i+1}월`,value:i+1})));
  const [weekOpen, setWeekOpen] = useState(false)
  const [weekItems, setWeekItems] = useState([...Array(dateNumbers[monthValue-1])].map((v,i) => ({label:`${i+1}주차`,value:i+1})));

  const onYearOpen = useCallback (()=>{
    setMonthOpen(false)
    setWeekOpen(false)
  },[])
  const onMonthOpen = useCallback (()=>{
    setYearOpen(false)
    setWeekOpen(false)

  },[])
  const onWeekOpen = useCallback (()=>{
    setYearOpen(false)
    setMonthOpen(false)
  },[])

  useEffect(()=>{
    const weekCount = getWeekCountFromDate({year:yearValue,month:monthValue})
    getFirstDateFromWeekValue({year:yearValue,month:monthValue},weekValue)
    setWeekItems([...Array(weekCount)].map((v,i) => ({label:`${i+1}주차`,value:i+1})))
  },[yearValue,monthValue,weekValue])
  
  
  return (
      <View style={{
        flexDirection:'row',
        marginHorizontal:width*0.05,
        marginTop:height*0.02,
        height:120,
        marginBottom:-120 +height*0.03,
        zIndex:1,

      }}>
        <DropDownPicker
          style={{
            height:35,
          }}
          containerStyle={{
            width:120,
          }}
          maxHeight={120}
          autoScroll={true}
          open={yearOpen}
          onOpen={onYearOpen}
          value={yearValue}
          items={yearItems}
          setOpen={setYearOpen}
          setValue={setYearValue}
          setItems={setYearItems}
          listMode="SCROLLVIEW"  

        />
        <DropDownPicker
          style={{
              height:35,
          }}
          containerStyle={{
            marginLeft:10,
            width:90,
          }}
          autoScroll={true}
          maxHeight={120}
          open={monthOpen}
          onOpen={onMonthOpen}
          value={monthValue}
          items={monthItems}
          setOpen={setMonthOpen}
          setValue={setMonthValue}
          setItems={setMonthItems}
          listMode="SCROLLVIEW"  
        />

        <DropDownPicker
          style={{
              height:35,
          }}
          containerStyle={{
            marginLeft:10,
            width:90,
          }}
          autoScroll={true}
          maxHeight={120}
          open={weekOpen}
          onOpen={onWeekOpen}
          value={weekValue}
          items={weekItems}
          setOpen={setWeekOpen}
          setValue={setWeekValue}
          setItems={setWeekItems}
          listMode="SCROLLVIEW"  
        />  
      </View>
    
  );
}
export {MonthSelectDropdown,WeekSelectDropdown,DateSelectDropdown}