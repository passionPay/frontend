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

const StudyHistory = () => {
    const navigation = useNavigation<any>()
    const goBack = useCallback(()=>navigation.goBack(),[])

    return (
        <SafeAreaView style={styles.safeContainer}>

            <TouchableOpacity style={styles.header} onPress={goBack}>
                <Text style={{fontSize: 17,
                            fontFamily: 'GodoM',
                            color: '#9F9F9F',
                            // backgroundColor:'#000000'
                            
                            }} >
                &lt; 프로필 </Text>
            </TouchableOpacity>
            <Text style={{
                    marginHorizontal:width*0.05,
                    fontSize: 24,
                    fontFamily: 'GodoM',
                }}>공부기록</Text>
                <View style={{alignItems:'center'}}>
                    <MemberIcon touchable size={width*0.9/4}/>
                    <Text style={{
                        marginVertical:height*0.01,
                        fontSize: 20,
                        fontFamily: 'GodoM',
                    }}>고달픈승구</Text>
                </View>
                <View style={{
                    flexDirection:'row',
                    borderBottomWidth:1,
                    paddingHorizontal:width*0.05,
                    

                }}>
                    <TouchableOpacity
                        style={styles.historyTab}>
                        <Text style={styles.historyTabText}> 일간</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.historyTab}>
                        <Text style={styles.historyTabText}> 주간</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.historyTab}>
                        <Text style={styles.historyTabText}> 월간</Text>
                    </TouchableOpacity>
                    
                    
                </View>
            <ScrollView style={{flex:1,}}>
                
            </ScrollView>
        </SafeAreaView>
    )
    

}

export default StudyHistory

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

    historyTab:{
        flex:1,
        alignItems:'center',
        fontSize:17,
        borderWidth:1,
        paddingVertical:height*0.01,
    },
    historyTabText:{
        fontSize:17,

    }

})