import React , {useCallback} from 'react'
import {View,Dimensions,StyleSheet,Text,TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native'

import WeekChart from '../../component/chart/WeekChart'
import TitleWithSeeMore from '../../component/TitleWithSeeMore'
import ProgressBar from '../../component/ProgressBar'


const { width, height } = Dimensions.get('window')

const RecordSection= ()=>{

    const navigation = useNavigation<any>()
    const profileHistory = useCallback(()=>navigation.navigate('ProfileHistory'),[])

    return(
        <>
            <View style={{paddingTop : height*0.05, paddingBottom:height*0.02}}>
                <TitleWithSeeMore 
                    style={{marginHorizontal:width*0.05,flexDirection:'row',paddingBottom:height*0.02,}}
                    titleStyle={{fontSize: 15,fontFamily: 'GodoM',color: '#000',}}
                    seeMoreStyle={{color:'#7EBEF9',fontFamily:'GodoM',fontWeight:'bold',fontSize:13,}}
                    title={'공부기록'} seeMore={'공부기록 더보기 >'} seeMoreNavFunc={profileHistory} />
                <WeekChart 
                    style={{
                        marginHorizontal:width*0.05,
                        height:150,
                        width:width*0.83,
                        alignSelf:'center'}}/>
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
        </>
        
    )
}
export default RecordSection

const styles = StyleSheet.create({
    timeCard:{
        width:width*0.43,
        borderWidth:1,
        borderRadius:10,
        borderColor:'grey',
        alignItems:'center',
        justifyContent:'center'
        
    },
}) 