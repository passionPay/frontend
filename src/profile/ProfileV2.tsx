import React, {useCallback} from 'react'
import { TouchableOpacity, Image, ScrollView, Dimensions, SafeAreaView,StyleSheet, Text, View } from 'react-native'

import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import MemberIcon from '../component/MemberIcon'
import WeekChart from '../component/WeekChart'
import MonthChart from '../component/MonthChart'
import ProgressBar from '../component/ProgressBar'
import {useNavigation} from '@react-navigation/native'

const { width, height } = Dimensions.get('window')


export default function ProfileV2() {
    const navigation = useNavigation<any>()
    const studyHistory = useCallback(()=>navigation.navigate('StudyHistory'),[])
    return (
        <SafeAreaView style={styles.safeContainer}>

            <View style={styles.header}>
                <View style={{}}>
                    <Text style={styles.titleText}>프로필</Text>

                </View>
                

                <Icon style={[styles.headerIcon,{marginLeft:'auto'}]} name={'bell-outline'} size={30} color='black' />
                <Icon style={styles.headerIcon} name={'cog-outline'} size={30} color='black' />
            </View>
            <ScrollView style={{flex:1,}}>

                <View>
                    <View style={{flexDirection:'row',paddingHorizontal:'5%',paddingTop:'3%',paddingBottom:'3%'}}>
                        <View style={styles.profileContainer}>
                            <MemberIcon touchable size={width*0.9/4}/>
                            <Text style={[styles.titleText,{fontSize:20,marginTop: 10}]}>고달픈승구</Text>
                        </View>
                        <View style={{flex:1.5,justifyContent:'center'}}>
                            <View style={{flexDirection:'row',flex:1,justifyContent:'space-between',marginHorizontal:width*0.9*0.66*0,marginRight:width*0.9*0.66*0.07}}>
                                <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                    <Text style={{fontSize:24}}>92</Text>
                                    <Text style={{marginTop:5, fontSize:12}}>팔로잉</Text>
                                    
                                </TouchableOpacity>
                                <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                    <Text style={{fontSize:24}}>92</Text>
                                    <Text style={{marginTop:5, fontSize:12}}>팔로워</Text>

                                </TouchableOpacity>
                            </View>
                            <View style={{flexDirection:'row',flex:1,justifyContent:'space-between',marginHorizontal:width*0.9*0.66*0,marginRight:width*0.9*0.66*0.07}}>

                                <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                    <Text style={{fontSize:24}}>92</Text>
                                    <Text style={{marginTop:5, fontSize:12}}>내가 쓴 글</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                    <Text style={{fontSize:24}}>92</Text>
                                    <Text style={{marginTop:5, fontSize:12}}>내가 쓴 댓글/답변</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{borderBottomWidth:1, borderTopWidth:1,padding:width*0.05}}>
                        <Text 
                            style={{
                            fontSize:18,
                            fontWeight:'300',
                            textAlign:'center'}}>
                                노력하는 자는 즐기는 자를 이기지 못한다
                        </Text>
                    </View>
                    
                </View>
            
                <View style={{paddingTop : height*0.05, paddingBottom:height*0.02}}>
                        <View style={{marginHorizontal:width*0.05,flexDirection:'row',paddingBottom:height*0.02,}}>
                            <Text style={styles.titleText}>공부기록</Text>
                            <TouchableOpacity 
                                onPress={studyHistory}
                                style={{
                                    marginLeft:'auto', marginRight:10, marginBottom:2,
                                    alignSelf:'flex-end'
                                }}>
                                <Text style={{
                                    color:'#7EBEF9',
                                    fontFamily:'GodoM',
                                    fontWeight:'bold',}}>
                                        공부기록 더보기 &gt;
                                </Text>
                            </TouchableOpacity>
                        </View>
                        
                        <WeekChart style={{marginHorizontal:width*0.05,
                            height:150,
                            width:width*0.9}}/>
                        <MonthChart style={{marginHorizontal:width*0.05,
                            height:150,
                            width:width*0.9}}/>


                </View>


                    <View style={{marginVertical:height*0.02, flexDirection:'row',justifyContent:'space-between', marginHorizontal:width*0.05, height:width*0.3}}>
                        <View style={styles.timeCard}>
                            <Text style={{fontSize:width*0.04}}>오늘 목표 공부시간</Text>
                            <Text style={{fontSize:width*0.06,marginTop:width*0.02,fontWeight:'bold'}}>12:30:00</Text>

                        </View>
                        <View style={styles.timeCard}>
                            <Text style={{fontSize:width*0.04}}>오늘 하루 공부시간</Text>
                            <Text style={{fontSize:width*0.06,marginTop:width*0.02,fontWeight:'bold'}}>1:30:20</Text>

                        </View>
                    </View>
                    <ProgressBar hasIndicator style={{width:width*0.8, alignSelf:'center',margin:height*0.02}}/>

                    <TouchableOpacity style={{marginBottom:height*0.04,
                        width:width*0.5,
                        height:width*0.13,
                        borderWidth:1,
                        borderRadius:10,
                        borderColor:'grey',
                        alignSelf:'center',
                        justifyContent:'center',
                        alignItems:'center'}}>
                            <Text style={{fontSize:width*0.04}}>플래너 보러가기</Text>
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
        // backgroundColor:'#ff00ff'
    },
    titleText: {
        fontSize: 24,
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
        width:width*0.44,
        borderWidth:1,
        borderRadius:10,
        borderColor:'grey',
        alignItems:'center',
        justifyContent:'center'
        
    }

})