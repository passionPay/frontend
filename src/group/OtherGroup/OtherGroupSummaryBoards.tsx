
import React from 'react'
import { Dimensions,StyleSheet, SafeAreaView, View, Image,Text,ScrollView } from 'react-native'

const { width, height } = Dimensions.get('window')


const OtherGroupSummaryBoard = ({style={},time=false,isOtherGroup=false}) =>{
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
                    {!isOtherGroup&&
                    <View style={boardStyles.groupTime}>
                        <Text style={{fontSize:fontSize, }}>내 공부시간</Text>
                        <Text style={{fontSize:fontSize+3, fontWeight:'700'}}>11:22:33</Text>
                    </View>
                    }
                    
                </View>
                
            </View>
        </>
    ) 
    :(
        <>
            <View style={boardStyles.groupSummaryContentContainer}>
                <View style={boardStyles.groupEachMissionContainer}>
                        <Image style={{width:15,height:15,marginRight:5}}source={require('../../../images/group/trophy.png')} />
                        <Text numberOfLines={2} style={boardStyles.missionText}>{`1시간 이상 국s어 공부하기`}</Text>
                </View>
                <View style={boardStyles.groupEachMissionContainer}>
                    <View style={{paddingTop:0, paddingRight:3}}>
                        <Image style={{width:15,height:15}}source={require('../../../images/group/trophy.png')} />
                    </View>
                        <Text numberOfLines={2} style={boardStyles.missionText}>{`외 목표개`}</Text>
                </View>
                <View style={boardStyles.groupEachMissionContainer}>
                    <View style={{paddingTop:0, paddingRight:3}}>
                        <Image style={{width:15,height:15}}source={require('../../../images/group/trophy.png')} />
                    </View>
                        <Text numberOfLines={2} style={boardStyles.missionText}>{`외 목표개`}</Text>
                </View>
                <View style={boardStyles.groupEachMissionContainer}>
                    <View style={{paddingTop:0, paddingRight:3}}>
                        <Image style={{width:15,height:15}}source={require('../../../images/group/trophy.png')} />
                    </View>
                        <Text numberOfLines={2} style={boardStyles.missionText}>{`외 목표개`}</Text>
                </View>
                <View style={boardStyles.groupEachMissionContainer}>
                    <View style={{paddingTop:0, paddingRight:3}}>
                        <Image style={{width:15,height:15}}source={require('../../../images/group/trophy.png')} />
                    </View>
                        <Text numberOfLines={2} style={boardStyles.missionText}>{`1시간 이상 국s어 공부하기asdfwfwasdfasfaweadsfweaweafwe`}</Text>
                </View>

                
                
            </View>
        </>
    )
    
    return (
        <View style={[boardStyles.groupSummaryBoard,style]}>
            {content}
            <View style={boardStyles.groupSummaryTitleContainer}>
                    <Text style={{fontSize:fontSize,fontWeight:'700'}}>
                        {time? '공부시간': '그룹미션'}
                    </Text>
            </View>
        </View>

    )
}

export default OtherGroupSummaryBoard

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

