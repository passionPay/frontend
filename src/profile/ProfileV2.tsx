import React, {useCallback} from 'react'
import { TouchableOpacity, Image, ScrollView, Dimensions, SafeAreaView,StyleSheet, Text, View } from 'react-native'
import {  TouchableIcon } from '../component/CustomComponent'

import LinearGradient from 'react-native-linear-gradient'

import MemberIcon from '../component/MemberIcon'
import WeekChart from '../component/chart/WeekChart'
import MonthChart from '../component/chart/MonthChart'
import ProgressBar from '../component/ProgressBar'
import {useNavigation} from '@react-navigation/native'

const { width, height } = Dimensions.get('window')


export default function ProfileV2() {
    const navigation = useNavigation<any>()
    const studyHistory = useCallback(()=>navigation.navigate('StudyHistory'),[])
    return (
        <SafeAreaView style={styles.safeContainer}>

            <View style={styles.header}>
                <View>
                    <Text style={styles.titleText}>프로필</Text>
                </View>

                <View style={{flexDirection:'row'}}>
                    <TouchableIcon iconProps={{style:[styles.headerIcon,{marginLeft:'auto'}], name:'bell-outline', size:25, color:'black'}}/>
                    <TouchableIcon iconProps={{style:[styles.headerIcon], name:'cog-outline', size:23, color:'black'}}/>
                </View>
                


            </View>
            <ScrollView style={{flex:1,}} >

                <View>
                    <View style={{flexDirection:'row',paddingHorizontal:'5%',paddingTop:'3%',paddingBottom:'3%'}}>
                        <View style={styles.profileContainer}>
                            <MemberIcon touchable size={width*0.9/4}/>
                            <Text style={[styles.titleText,{fontSize:16,marginTop: 10}]}>고달픈승구</Text>
                        </View>
                        <View style={{flex:1.5,justifyContent:'center'}}>
                            <View style={{flexDirection:'row',flex:1,justifyContent:'space-between',marginHorizontal:width*0.9*0.66*0,marginRight:width*0.9*0.66*0.07}}>
                                <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                    <Text style={{fontSize:20}}>92</Text>
                                    <Text style={{marginTop:5, fontSize:12}}>팔로잉</Text>
                                    
                                </TouchableOpacity>
                                <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                    <Text style={{fontSize:20}}>92</Text>
                                    <Text style={{marginTop:5, fontSize:12}}>팔로워</Text>

                                </TouchableOpacity>
                            </View>
                            <View style={{flexDirection:'row',flex:1,justifyContent:'space-between',marginHorizontal:width*0.9*0.66*0,marginRight:width*0.9*0.66*0.07}}>

                                <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                    <Text style={{fontSize:20}}>92</Text>
                                    <Text style={{marginTop:5, fontSize:12}}>내가 쓴 글</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                    <Text style={{fontSize:20}}>92</Text>
                                    <Text style={{marginTop:5, fontSize:12}}>댓글/답변 단 글</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{borderBottomWidth:0.3, borderTopWidth:0.3,padding:width*0.05}}>
                        <Text 
                            style={{
                            fontSize:13,
                            fontWeight:'300',
                            textAlign:'center'}}>
                                노력하는 자는 즐기는 자를 이기지 못한다
                        </Text>
                    </View>
                    
                </View>
            
                <View style={{paddingTop : height*0.05, paddingBottom:height*0.02}}>
                        <View style={{marginHorizontal:width*0.05,flexDirection:'row',paddingBottom:height*0.02,}}>
                            <Text style={{
                                    fontSize: 17,
                                    fontFamily: 'GodoM',
                                    color: '#000',
                                }}>공부기록
                            </Text>
                            <TouchableOpacity 
                                onPress={studyHistory}
                                style={{
                                    marginLeft:'auto', marginRight:10, marginBottom:2,
                                    alignSelf:'flex-end'
                                }}>
                                <Text style={{
                                    color:'#7EBEF9',
                                    fontFamily:'GodoM',
                                    fontWeight:'bold',
                                    fontSize:13,}}>
                                        공부기록 더보기 &gt;
                                </Text>
                            </TouchableOpacity>
                        </View>
                        
                        <WeekChart style={{marginHorizontal:width*0.05,
                            height:150,
                            width:width*0.9}}/>



                </View>

                    
                <View style={{marginVertical:height*0.02, flexDirection:'row',justifyContent:'space-around', marginHorizontal:width*0.05, height:width*0.3}}>
                    <View style={styles.timeCard}>
                        <Text style={{fontSize:12}}>오늘 목표 공부시간</Text>
                        <Text style={{fontSize:18,marginTop:width*0.02,fontWeight:'bold'}}>12:30:00</Text>

                    </View>
                    <View style={styles.timeCard}>
                        <Text style={{fontSize:12}}>오늘 하루 공부시간</Text>
                        <Text style={{fontSize:18,marginTop:width*0.02,fontWeight:'bold'}}>1:30:20</Text>

                    </View>
                </View>
                <ProgressBar style={{width:width*0.82, height:7,paddingHorizontal:width*0.01}} progress={0.4} hasIndicator/>
                
                
                <TouchableOpacity style={{
                    marginTop:height*0.02,
                    marginBottom:height*0.04,
                    width:width*0.5,
                    height:40,
                    borderWidth:1,
                    borderRadius:10,
                    borderColor:'grey',
                    alignSelf:'center',
                    justifyContent:'center',
                    alignItems:'center'}}>
                        <Text style={{fontSize:14}}>플래너 보러가기</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
    

}

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header:{
        paddingHorizontal:'5%',
        height:60,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
        // backgroundColor:'#ff00ff'
    },
    titleText: {
        fontSize: 18,
        fontFamily: 'GodoM',
        color: '#000',
    },
    headerIcon:{
        paddingLeft:10,
    },
    profileContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'#ff0000'
    },
    timeCard:{
        width:width*0.43,
        borderWidth:1,
        borderRadius:10,
        borderColor:'grey',
        alignItems:'center',
        justifyContent:'center'
        
    }

})




