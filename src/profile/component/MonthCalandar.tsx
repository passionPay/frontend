import React, {useState,useCallback} from 'react'
import {View,Dimensions,StyleSheet} from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
import moment from 'moment'
const { width, height } = Dimensions.get('window')


const monthItem = [...Array(12)].map((v,i)=>({label:i+1,value:i+1}))




const MonthCalandar = ({
    yearValue,
    setYearValue,
    monthValue,
    setMonthValue,
  })=> {
  const [yearOpen, setYearOpen] = useState(false)
  const [yearItems, setYearItems] = useState([...Array(81)].map((v,i) => ({label:`${i+2000}년`,value:i+2000})))
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
        height:35,
        zIndex:200,
      }}>
        <DropDownPicker
          style={{
            height:35,
            backgroundColor:'white'
          }}
          containerStyle={{
            marginBottom:height*0.1,
            width:120,
            backgroundColor:'white',

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

            width:80,
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
export default MonthCalandar