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
    const fontSize = width*0.03
    const result = time ? (<>
            <View style={[boardStyles.groupSummaryBoard,styles.shadow]}>
                <View style={boardStyles.groupSummaryContentContainer}>
                    <View style={boardStyles.groupTime}>
                        <Text numberOfLines={1} style={{fontSize:fontSize, }}>
                        일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십</Text>
                        <Text style={{fontSize:fontSize, }}>
                        abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefabcdefghijabcdef</Text>
                            {/* 그룹 평균 공부시간</Text> */}
                        <Text style={{fontSize:fontSize, fontWeight:'700'}}>11:22:33</Text>
                    </View>
                    <View style={boardStyles.groupTime}>
                        <Text style={{fontSize:fontSize, }}>그룹 평균 공부시간</Text>
                        <Text style={{fontSize:fontSize, fontWeight:'700'}}>11:22:33</Text>
                    </View>
                    <View style={boardStyles.groupTime}>
                        <Text style={{fontSize:fontSize, }}>그룹 평균 공부시간</Text>
                        <Text style={{fontSize:fontSize, fontWeight:'700'}}>11:22:33</Text>
                    </View>
                </View>
                <View style={boardStyles.groupSummaryTitleContainer}>
                    <Text style={{fontSize:fontSize,fontWeight:'700'}}>공부시간</Text>
                </View>
            </View>
        </>
    ) 
    :(
        <>
            <View style={[boardStyles.groupSummaryBoard,styles.shadow]}>
                <View style={boardStyles.groupSummaryContentContainer}>
                    <View style={boardStyles.groupEachMissionContainer}>
                        <View style={{paddingTop:0, paddingRight:3}}>
                            <Image style={{width:15,height:15}}source={require('../../../../images/group/trophy.png')} />
                        </View>
                            <Text style={boardStyles.missionText}>{`1시간 이상 국s어 공부하기`}</Text>
                    </View>
                    <View style={boardStyles.groupEachMissionContainer}>
                        <View style={{paddingTop:0, paddingRight:3}}>
                            <Image style={{width:15,height:15}}source={require('../../../../images/group/trophy.png')} />
                        </View>
                            <Text style={{fontSize:fontSize}}>{`외 목표개`}</Text>
                    </View>
                    <View style={boardStyles.groupEachMissionContainer}>
                        <View style={{paddingTop:0, paddingRight:3}}>
                            <Image style={{width:15,height:15}}source={require('../../../../images/group/trophy.png')} />
                        </View>
                            <Text style={{fontSize:fontSize}}>{`외 목표개`}</Text>
                    </View>
                    
                </View>
                <View style={boardStyles.groupSummaryTitleContainer}>
                    <Text style={{fontSize:fontSize,fontWeight:'700'}}>그룹미션</Text>
                </View>
                
            </View>

        </>
    )
    
    return (
        <View style={boardStyles.groupSummaryBoard}>
            
            {result}
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
        fontSize: 20,
        fontFamily: 'GodoM',
    },
    

    shadow:{
        ...Platform.select({
            ios: {
                shadowColor: "#000",
                shadowOffset: {
                    width: 0.1,
                    height: 0,
                },
                shadowOpacity: 0.25,
            },
            android: {
                elevation: 3, 
            },
        }
    ),
        borderWidth:1,
    },
    mainContainer:{
        paddingTop:height*0.04,
    },
    boardContainer:{
        marginBottom:10,
        flexDirection:'row',
        alignItems:'center',
        // justifyContent:'space-around',
        // justifyContent:'space-evenly',
        justifyContent:'space-between',
        paddingHorizontal:width*0.01,

    }
})

const boardStyles = StyleSheet.create({
    groupSummaryBoard :{
        width: width*0.43,
        height: width*0.5,
        backgroundColor:'#F9F9F9',
        borderRadius:10,
        marginVertical:5,        
    },
    groupSummaryContentContainer:{
        padding:width*0.01,
        paddingTop:width*0.07,
        alignItems:'center',
        justifyContent:'space-evenly',
        flex:3.5
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
        flexDirection:'row', 
        alignItems:'center'
    },
    missionText:{

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

