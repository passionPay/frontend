import React from 'react'
import { Platform,Dimensions,StyleSheet, SafeAreaView, View, Image,Text,ScrollView } from 'react-native'

const { width, height } = Dimensions.get('window')


const GroupSummaryChart = ({data}) =>{
    return (
        <>

        </>
    )
}

const GroupSummaryBoard = ({time}) =>{

    const fontSize = (width*0.038>15) ? 15 : width*0.038
    const result = time ? (<>
            <View style={[styles.groupSummaryBoard,styles.shadow]}>
                <View style={styles.groupSummaryContentContainer}>
                    <View style={styles.groupTime}>
                        <Text style={{fontSize:fontSize, }}>그룹 평균 공부시간</Text>
                        <Text style={{fontSize:fontSize, fontWeight:'700'}}>11:22:33</Text>
                    </View>
                    <View style={styles.groupTime}>
                        <Text style={{fontSize:fontSize, }}>그룹 평균 공부시간</Text>
                        <Text style={{fontSize:fontSize, fontWeight:'700'}}>11:22:33</Text>
                    </View>
                    <View style={styles.groupTime}>
                        <Text style={{fontSize:fontSize, }}>그룹 평균 공부시간</Text>
                        <Text style={{fontSize:fontSize, fontWeight:'700'}}>11:22:33</Text>
                    </View>
                </View>
                <View style={styles.groupSummaryTitleContainer}>
                    <Text style={{fontSize:fontSize,fontWeight:'700'}}>공부시간</Text>
                </View>
            </View>
        </>
    ) 
    :(
        <>
            <View style={[styles.groupSummaryBoard,styles.shadow]}>
                <View style={styles.groupSummaryContentContainer}>
                    <View style={styles.groupEachMissionContainer}>
                        <View style={{paddingTop:0, paddingRight:3}}>
                            <Image style={{width:15,height:15}}source={require('../../../../images/group/trophy.png')} />
                        </View>
                            <Text style={styles.missionText}>{`1시간 이상 국어 공부하기`}</Text>
                    </View>
                    <View style={styles.groupEachMissionContainer}>
                        <View style={{paddingTop:0, paddingRight:3}}>
                            <Image style={{width:15,height:15}}source={require('../../../../images/group/trophy.png')} />
                        </View>
                            <Text style={{fontSize:fontSize}}>{`외 목표개`}</Text>
                    </View>
                    <View style={styles.groupEachMissionContainer}>
                        <View style={{paddingTop:0, paddingRight:3}}>
                            <Image style={{width:15,height:15}}source={require('../../../../images/group/trophy.png')} />
                        </View>
                            <Text style={{fontSize:fontSize}}>{`외 목표개`}</Text>
                    </View>
                    
                </View>
                <View style={styles.groupSummaryTitleContainer}>
                    <Text style={{fontSize:fontSize,fontWeight:'700'}}>그룹미션</Text>
                </View>
            </View>

        </>
    )
    
    return (
        <View style={styles.groupSummaryBoard}>
            
            {result}
        </View>

    )
}


const GroupSummary =() =>{
    return (
    <View style={styles.mainContainer}>
        <Text style={styles.titleText}>그룹 목표</Text>
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
    groupSummaryBoard :{
        width: width*0.4,
        height: width*0.5,
        backgroundColor:'#F9F9F9',
        borderRadius:10,
        margin:5,
        
    },
    groupSummaryContentContainer:{
        
        padding:'1%',
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


    shadow:{
        ...Platform.select({
            ios: {
                shadowColor: "#000",
                shadowOffset: {
                    width: 0.1,
                    height: 0.1,
                },
                shadowOpacity: 0.25,
            },
            android: {
                elevation: 3, 
            },
        }
    )},
    mainContainer:{
        paddingTop:height*0.04,
    },
    boardContainer:{
        marginBottom:10,
        flexDirection:'row',
        alignItems:'center',
    }
})