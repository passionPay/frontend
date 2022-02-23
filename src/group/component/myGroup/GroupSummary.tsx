import React from 'react'
import { PixelRatio,Platform,Dimensions,StyleSheet, SafeAreaView, View, Image,Text,ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

import GroupGoalChart from '../GroupGoalChart';

const { width, height } = Dimensions.get('window')

const chartSize = {
    height:width*0.3,
    width:width*0.9,
    barWidth:width*0.055,
    barMargin:width*0.004,
}

const chartData={
    myTimeProgress:0.4,
    groupTimeProgress:0.3,
    myMissionProgress:0.2,
    groupMissionProgress:0.1,
}



const GroupSummaryBoard = ({time}) =>{
    // const fontSize = (width*0.038>15) ? 15 : width*0.038
    // console.log('dsfd',PixelRatio.getFontScale())
    const fontSize = 12
    const content = time ? (
        <>
            <View style={[boardStyles.groupSummaryContentContainer]}>
                <View style={{paddingTop:5}}>
                    <View style={boardStyles.groupTime}>
                        <Text style={{fontSize:fontSize, }}>그룹 목표 공부시간</Text>
                        <Text style={{ fontSize:fontSize+3, fontWeight:'700'}}>11:22:33</Text>
                    </View>
                    <View style={boardStyles.groupTime}>
                        <Text style={{fontSize:fontSize, }}>그룹 평균 공부시간</Text>
                        <Text style={{fontSize:fontSize+3, fontWeight:'700'}}>11:22:33</Text>
                    </View>
                    <View style={boardStyles.groupTime}>
                        <Text style={{fontSize:fontSize, }}>내 공부시간</Text>
                        <Text style={{fontSize:fontSize+3, fontWeight:'700'}}>11:22:33</Text>
                    </View>
                </View>
                
            </View>
        </>
    ) 
    :(
        <>
            <View style={boardStyles.groupSummaryContentContainer}>
                <View style={boardStyles.groupEachMissionContainer}>
                        <Image style={{width:15,height:15,marginRight:5}}source={require('../../../../images/group/trophy.png')} />
                        <Text numberOfLines={2} style={boardStyles.missionText}>{`1시간 이상 국s어 공부하기`}</Text>
                </View>
                <View style={boardStyles.groupEachMissionContainer}>
                    <View style={{paddingTop:0, paddingRight:3}}>
                        <Image style={{width:15,height:15}}source={require('../../../../images/group/trophy.png')} />
                    </View>
                        <Text numberOfLines={2} style={boardStyles.missionText}>{`외 목표개`}</Text>
                </View>
                <View style={boardStyles.groupEachMissionContainer}>
                    <View style={{paddingTop:0, paddingRight:3}}>
                        <Image style={{width:15,height:15}}source={require('../../../../images/group/trophy.png')} />
                    </View>
                        <Text numberOfLines={2} style={boardStyles.missionText}>{`외 목표개`}</Text>
                </View>

                
                
            </View>
        </>
    )
    
    return (
        <View style={boardStyles.groupSummaryBoard}>
            {content}
            <View style={boardStyles.groupSummaryTitleContainer}>
                    <Text style={{fontSize:fontSize,fontWeight:'700'}}>
                        {time? '공부시간': '그룹미션'}
                    </Text>
            </View>
        </View>

    )
}


const GroupSummary =() =>{
    return (
    <View style={styles.mainContainer}>
        <Text style={styles.titleText}>그룹 목표</Text>
        <GroupGoalChart/>
        <View style={styles.boardContainer}>
            <GroupSummaryBoard time></GroupSummaryBoard>
            <GroupSummaryBoard time={false}></GroupSummaryBoard>
        </View>
    </View>
    )
}

export default GroupSummary



const styles = StyleSheet.create({
    titleText:{
        fontSize: 15,
        fontFamily: 'GodoM',
    },
    shadow:{
        ...Platform.select({
            ios: {
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 0.1,
                },
                shadowOpacity: 0.05,
            },
            android: {
                elevation: 3, 
            },
        }
        ),
    },
    mainContainer:{
        paddingTop:height*0.04,
    },
    boardContainer:{
        marginBottom:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:width*0.01,
    }
})

const boardStyles = StyleSheet.create({
    groupSummaryBoard :{
        width: width*0.43,
        height: 200,
        backgroundColor:'#F9F9F9',
        borderRadius:10,
        marginVertical:5,        
    },
    groupSummaryContentContainer:{
        padding:width*0.01,
        alignItems:'center',
        justifyContent:'space-evenly',
        flex:4
    },
    groupTime:{
        marginVertical:width*0.025,
        alignItems:'center',
        justifyContent:'center',
    },

    groupSummaryMissionContainer:{
        
    },
    groupEachMissionContainer:{
        marginTop:8,
        paddingTop:3, 
        width:'90%',
        flexDirection:'row', 
        alignItems:'center'
    },
    missionText:{
        fontSize:12,
        flex:1,
    },

    groupSummaryTitleContainer:{
        backgroundColor:'#7EBEF9',
        flex:1,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        alignItems:'center',
        justifyContent:'center',
    },

})

