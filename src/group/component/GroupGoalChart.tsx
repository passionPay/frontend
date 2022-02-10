import React from 'react'
import { PixelRatio,Platform,Dimensions,StyleSheet, SafeAreaView, View, Image,Text,ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

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

const GroupGoalChart = () =>{
    const {barWidth,barMargin} = chartSize
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
            <View style={[chartStyles.chartContainer,{height:chartSize.height}]}>
                <View style={[chartStyles.bottomLine,{left:0,bottom:0}]}/>
                <View style={[chartStyles.dashLine,{left:0,top:-5}]}>
                    <Text ellipsizeMode="clip" numberOfLines={1} style={{fontSize:10, color:'#0085FF'}}>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</Text>
                </View>
                <View style={[chartStyles.dashLine,{left:0,top:chartSize.height/2-5}]}>
                    <Text ellipsizeMode="clip" numberOfLines={1} style={{fontSize:10, color:'#0085FF'}}>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</Text>
                </View>
                <View style={[chartStyles.dashLine,{left:0,top:chartSize.height/2}]}/>
                <Text style={{position:'absolute', color:'#0085FF', fontSize:10, top: -5, left:chartSize.width*0.92, }}>100%</Text>
                <Text style={{position:'absolute', color:'#0085FF', fontSize:10, top: chartSize.height/2-5, left:chartSize.width*0.92, }}>50%</Text>
                <LinearGradient style={[chartStyles.myBar,{left:chartSize.width*(1/4)-barWidth-barMargin/2,bottom:0,height:chartSize.height*chartData.myTimeProgress}]}  colors={["#90C8FC","#0085FF", ]}/>
                <LinearGradient style={[chartStyles.groupBar,{left:chartSize.width*(1/4)+barMargin/2,bottom:0,height:chartSize.height*chartData.groupTimeProgress}]}  colors={["#BCBCBC","#000000", ]}/>
                <LinearGradient style={[chartStyles.myBar,{left:chartSize.width*(3/4)-barWidth-barMargin/2,bottom:0,height:chartSize.height*chartData.myMissionProgress}]} colors={["#90C8FC","#0085FF", ]}/>
                <LinearGradient style={[chartStyles.groupBar,{left:chartSize.width*(3/4)+barMargin/2,bottom:0,height:chartSize.height*chartData.groupMissionProgress}]}  colors={["#BCBCBC","#000000", ]}/>
            </View>

            <View style={{flexDirection:'row', justifyContent:'space-evenly', paddingTop:5, height:50,}}>
                <Text style={{fontSize:13,textAlign:'center',flex:1}}>목표달성률{'\n'}(시간)</Text>
                <Text style={{fontSize:13, textAlign:'center',flex:1}}>목표달성률{'\n'}(미션)</Text>
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