import React from 'react'
import { Platform, Dimensions,StyleSheet, SafeAreaView, View, Image,Text,ScrollView, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'



const { width, height } = Dimensions.get('window')
const monthChartDefaultProps = {
    style : {
        width:width*0.9,
        height:width*0.5,
        position:'relative',
    },
    timeData:[
        // {
        //     date:'02/04\n월',
        //     time:12,
        // },
        // {
        //     date:'02/05\n화',
        //     time:12,
        // },
        // {
        //     date:'02/06\n수',
        //     time:12,
        // },
        // {
        //     date:'02/07\n목',
        //     time:12,
        // },
        // {
        //     date:'02/08\n금',
        //     time:12,
        // },
        // {
        //     date:'02/09\n토',
        //     time:12,
        // },
        // {
        //     date:'02/10\n일',
        //     time:12,
        // },
        10,3,5,17,9,4,4,9,8,10,11,13,15,17,10,6,12,8,16,7,20,22,21,0,0,3,2,5,23,22.5,7
        ],
}

const paddingTop =10
const paddingBottom = 20
const paddingLeft = 30
const paddingRight = 60

const MonthChart = ({timeData,style}) =>{
    style = Object.assign({}, monthChartDefaultProps.style , style)
    style.height = (style.height<paddingTop+paddingBottom) ? paddingTop+paddingBottom : style.height
    style.width = (style.width<paddingLeft+paddingRight) ? paddingLeft+paddingRight : style.width
    // const maxTime = timeData.reduce((prev:any,cur:any)=>(prev.time>cur.time)?prev.time:cur.time,0)
    timeData= [10,3,5,17,9,4,4,9,8,,15,17,10,6,12,8,16,7,20,22,21,0,0,3,2,5,23,22.5,7]
    
    const maxTime = timeData.reduce((prev:any,cur:any)=>(prev>cur)?prev:cur)
    const dayCount = timeData.length
    let scale =24
    if (maxTime<=3) scale = 3
    else if (maxTime<=6) scale = 6
    else if (maxTime<=9) scale = 9
    else if (maxTime<=12) scale = 12
    else if (maxTime <=15) scale =15
    else if (maxTime<=18) scale =18
    else if (maxTime<=21) scale = 21
    else scale = 24
    

    const axisData = dayCount>=30 ? [10,20,30] :[10,20]
    const chartData = timeData.map((item)=>item/scale)
    const chartHeight = style.height-(paddingTop+paddingBottom)
    const chartWidth = style.width-(paddingLeft+paddingRight)


    return (
        <View style={style}>

            <View style={{
                position:'absolute',
                bottom:paddingBottom,
                width:style.width,
                height:1.5,
                backgroundColor:'#0085FF',

            }}></View>

           <View style={{
                position:'absolute',
                top:paddingTop-7,
                width:'88%',

            }}>
                <Text style={{fontSize:10,color:'#0085FF'}} numberOfLines={1} ellipsizeMode='clip'>{'- '.repeat(1200)}</Text>
            </View>
            
            

            <View style={{
                position:'absolute',
                top:paddingTop+chartHeight/2-7,
                width:'88%',


            }}>
                <Text 
                style={{fontSize:10,color:'#0085FF'}}
                numberOfLines={1} 
                ellipsizeMode='clip'>{'- '.repeat(1200)}</Text>
            </View>

            <Text style={{

                fontSize:style.width*0.03,
                position:'absolute',
                left:style.width*0.9,
                top:paddingTop-7,
                }} numberOfLines={1} ellipsizeMode='clip'>{`${scale.toString()}시간`}</Text>
            <Text style={{

                fontSize:style.width*0.03,
                position:'absolute',
                left:style.width*0.9,
                top:paddingTop+chartHeight/2-7,
                }} numberOfLines={1} ellipsizeMode='clip'>{`${(scale/2).toString()}시간`}</Text>


            {chartData.map((item,idx)=>(<React.Fragment key={idx}>
                <LinearGradient start={{x:0,y:0}} end ={{x:0,y:1}} 
                colors={['#90C8FC','#0085FF']}  
                style={{
                    position:'absolute',
                    bottom:paddingBottom,
                    left:paddingLeft+idx*chartWidth/dayCount,
                    width:chartWidth/dayCount*0.95,
                    height:chartHeight*item,
                    backgroundColor:'#0000ff',
                    borderTopLeftRadius:chartWidth/dayCount*0.3,
                    borderTopRightRadius:chartWidth/dayCount*0.3,

                }}
                    key={idx}
                >
                </LinearGradient>
            </React.Fragment>))}
            {axisData.map((item,idx)=>(
                <Text 
                    style={{

                    textAlign:'center',
                    fontSize:style.width*0.03,
                    position:'absolute',
                    left:paddingLeft+((idx+1)*10-1)*chartWidth/dayCount-chartWidth*0.025,
                    bottom:0
                    }}  ellipsizeMode='clip'>
                    {`${(idx+1)*10}일`}
                </Text>
            ))}

        </View>
    )
}
MonthChart.defaultProps = monthChartDefaultProps
export default MonthChart

const styles = StyleSheet.create({

})