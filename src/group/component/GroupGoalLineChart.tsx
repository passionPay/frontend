import React from 'react'
import { PixelRatio,Platform,Dimensions,StyleSheet, SafeAreaView, View, Image,Text,ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import Canvas from 'react-native-canvas';

const { width, height } = Dimensions.get('window')

const chartSize = {
    height:width*0.3,
    width:width*0.9,
    barWidth:width*0.055,
    barMargin:width*0.004,
}
const chartData={
    myTimeProgress:0.4,
    groupTimeProgress:0.5,
    myMissionProgress:1.0,
    groupMissionProgress:0.7,
}

const myWeekData=[0.3,0.5,0.7,0.8,0.9,0.34,0.1]
const groupWeekData = [0.1,0.34,0.9,0.7,0.9,0.8,1.0]
const canvasMarginTop = 3


const GroupGoalChart = () =>{
    const {barWidth,barMargin} = chartSize
    const handleCanvas = (width,height) => ((canvas) => {
        if (canvas!==null){
            canvas.width=width,
            canvas.height=height
            const chartHeight = height-canvasMarginTop
            

            

            //myProgress
            const ctx = canvas.getContext('2d');

            ctx.setLineDash([4, 3]);/*dashes are 5px and spaces are 3px*/
            ctx.beginPath();
            ctx.moveTo(0,canvasMarginTop);
            ctx.lineTo(width*0.9, canvasMarginTop );
            ctx.strokeStyle = '#0085FF'
            ctx.stroke();

            ctx.setLineDash([4, 3]);/*dashes are 5px and spaces are 3px*/
            ctx.beginPath();
            ctx.moveTo(0,canvasMarginTop + chartHeight/2);
            ctx.lineTo(width*0.9, canvasMarginTop +chartHeight/2);
            ctx.strokeStyle = '#0085FF'
            ctx.stroke();
            ctx.setLineDash([1,0]);/*dash to solid*/

            ctx.beginPath()
            ctx.moveTo(width*(1)/15, canvasMarginTop +chartHeight*(1-myWeekData[0]))
            for (let i =0 ; i<myWeekData.length-1; i++){
                ctx.lineTo(width*(3+2*i)/15,canvasMarginTop +chartHeight*(1-myWeekData[i+1])) 
            }
            ctx.strokeStyle = '#0085FF'
            ctx.stroke()

            for (let i =0 ; i<myWeekData.length; i++){
                ctx.beginPath();
                ctx.arc(width*(1+2*i)/15,canvasMarginTop +chartHeight*(1-myWeekData[i]), 2,0, Math.PI * 2);
                ctx.strokeStyle = '#0085FF'
                ctx.stroke()
                ctx.fillStyle = '#0085FF'
                ctx.fill()
            }

            //groupProgress
            ctx.beginPath()
            ctx.moveTo(width*(1)/15, canvasMarginTop +chartHeight*(1-groupWeekData[0]))
            for (let i =0 ; i<groupWeekData.length-1; i++){
                ctx.lineTo(width*(3+2*i)/15,canvasMarginTop +chartHeight*(1-groupWeekData[i+1])) 
            }
            ctx.strokeStyle = '#000000'
            ctx.stroke()

            for (let i =0 ; i<groupWeekData.length; i++){
                ctx.beginPath();
                ctx.arc(width*(1+2*i)/15,canvasMarginTop +chartHeight*(1-groupWeekData[i]), 2,0, Math.PI * 2);
                ctx.stroke();
                ctx.fillStyle = '#000000'
                ctx.fill()
            }
           
        }
      })
    return (
        <View style={chartStyles.mainContainer}>
            <View style={chartStyles.legendContainer}>
                <View style={{flexDirection:'row'}}>
                    <LinearGradient style={chartStyles.legendBar} start={{ x: 0, y: 1 }} end={{ x: 1, y: 1 }} colors={["#0085FF","#90C8FC", ]}></LinearGradient>
                    <Text style={{fontSize:13}}>내 목표 달성률</Text>
                </View>
                
                <View style={{flexDirection:'row'}}>
                    <LinearGradient style={chartStyles.legendBar} start={{ x: 0, y: 1 }} end={{ x: 1, y: 1 }} colors={["#000000","#BCBCBC", ]}></LinearGradient>
                    <Text style={{fontSize:13}}>그룹 평균 목표 달성률</Text>
                </View>
            </View>
            

            <View style={{position:'relative'}}>
                <View style={[chartStyles.bottomLine,{left:0,bottom:0}]}/>
                <Text style={{position:'absolute', color:'#0085FF', fontSize:10, top: -5, left:chartSize.width*0.92, }}>100%</Text>
                <Text style={{position:'absolute', color:'#0085FF', fontSize:10, top: chartSize.height/2-5, left:chartSize.width*0.92, }}>50%</Text>
                <Canvas  ref={handleCanvas(chartSize.width,chartSize.height)}></Canvas>
            </View>
            <View style={{width:chartSize.width*0.9, flexDirection:'row', justifyContent:'space-evenly'}}>
                    <Text style={{textAlign:'center' }}>02/03 {`\n`}일</Text>
                    <Text style={{textAlign:'center'}}>02/04 {`\n`}월</Text>
                    <Text style={{textAlign:'center'}}>02/05 {`\n`}화</Text>
                    <Text style={{textAlign:'center'}}>02/06 {`\n`}수</Text>
                    <Text style={{textAlign:'center'}}>02/07 {`\n`}목</Text>
                    <Text style={{textAlign:'center'}}>02/08 {`\n`}금</Text>
                    <Text style={{textAlign:'center'}}>02/09 {`\n`}토</Text>

            </View>
        </View>
    )
}

export default GroupGoalChart

const chartStyles = StyleSheet.create({
    mainContainer:{

    },
    legendContainer:{
        // backgroundColor:'#fff000',
        paddingVertical:20,
    },
    legendBar:{
        width :50,
        height:10,
        alignSelf:'center',
        borderRadius:5,
        marginRight:5,
    },
    chartContainer:{
        position:'relative',
        height:chartSize.height,
        // backgroundColor:'#00ff00',
    },
    bottomLine:{
        position:'absolute',
        backgroundColor:'#0085ff',
        width:'100%',
        height:2,
        zIndex:1,
    },
    dashLine:{
        position:'absolute',
        width:chartSize.width*0.9,
        // borderWidth:1,
        // borderColor:'#0085FF',
        // borderStyle:'dashed',
        // borderRadius:1,
    },
    myBar:{
        position:'absolute',
        // backgroundColor:'#0000ff',
        width:chartSize.barWidth,
        borderTopLeftRadius:chartSize.width*0.02,
        borderTopRightRadius:chartSize.width*0.02,
    },
    groupBar:{
        position:'absolute',
        backgroundColor:'#000000',
        width:chartSize.barWidth,

        borderTopLeftRadius:chartSize.width*0.02,
        borderTopRightRadius:chartSize.width*0.02,
        
    },
    labelContainer:{
        // flexDirection:'row',
        // justifyContent:'space-evenly'
        position:'relative',
        width:'100%',
        height:50,
        // backgroundColor:'#fff000'
    },
    labelTextContainer:{
        position:'absolute',
        width:chartSize.width*(0.16+0.004),
        // backgroundColor:'#00ffff'
    },
})