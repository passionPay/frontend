import React, {useState,useEffect,useCallback} from 'react'
import { TouchableOpacity, Image, ScrollView, Dimensions, SafeAreaView,StyleSheet, Text, View } from 'react-native'
import moment from 'moment'

const { width, height } = Dimensions.get('window')


const defaultProps = {
    style:{
        marginTop:height*0.02,
        borderWidth:1,
        borderRadius:10,
        width:width*0.9,
        height:width*0.3,
        alignSelf:'center',
        
    },
    date:10,
}


const weekDays = ['Sun','Mon','Tue','Wed','Thr','Fri','Sat']

//(style) no height, automatically set to width/3
const WeekCalander = ({style,date,setDate}) =>{
    style = Object.assign({}, defaultProps.style , style)

    const onPressDate = useCallback((newDate)=>{
        setDate(newDate)
    },[])

    const [day,setDay]=useState(0)
    const [dateList,setDateList] = useState<any[]>([
    ])

    useEffect(()=>{
        console.log(day)
        const newDay = Math.round(Math.random()*6)
        setDay(newDay)
        const dateList:any[] = []
        for (let i =0; i<7;i++){
            dateList.push({day:weekDays[i],date:date-day+i,isOn:i==day})
        }

        setDateList(dateList)
    },[date])


    
    

    return (

                    
        <View style={[style,{paddingHorizontal:style.width*0.05,paddingVertical:style.height*0.1}]}>
            <View style={
                {
                    justifyContent:'center',
                }}>
                <Text style={{
                    fontSize:style.height*0.17,
                    fontFamily:'GodoM'
                }}>2022.02</Text>
            </View> 
            

            <View style={{
                flexDirection:'row',
                marginTop:style.height*0.1,
                }}>
                {dateList.map((item,idx)=>(
                    <TouchableOpacity 
                        onPress={()=>{onPressDate(item.date)}}
                        key={idx}
                        style={{
                            // borderWidth:1,
                            flex:1,
                            alignItems:'center',
                        }}
                    >
                        <Text style={{
                            fontSize:style.height*0.12,
                    fontFamily:'GodoM'

                        }
                        }>{item.day}</Text>
                        <View style={
                            {

                            // marginTop:style.height*0.1,
                            justifyContent:'center',
                            alignItems:'center',
                            width:style.width*0.9/7*0.9,
                            height:style.width*0.9/7*0.9,
                            margin:style.width*0.9/7*0.1,
                            borderRadius:style.width*0.9/14,
                            backgroundColor:item.isOn?'#23AEFC':undefined,
                        }}>
                            <Text style={{
                                fontSize:style.height*0.2,
                                color:item.isOn ? '#ffffff':undefined,
                    fontFamily:'GodoM'

                                }}>{item.date}
                            </Text>
                        </View>
                        
                    </TouchableOpacity>

                ))}
            </View>
        </View>
    )
}

WeekCalander.defaultProps = defaultProps

export default WeekCalander

const styles= StyleSheet.create({

})