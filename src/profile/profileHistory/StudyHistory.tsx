import React, {useCallback,useState} from 'react'
import { TouchableOpacity, Image, ScrollView, Dimensions, SafeAreaView,StyleSheet, Text, View,  } from 'react-native'


import MemberIcon from '../../component/MemberIcon'


import HistoryTabBar from './HistoryTabBar'


import {useNavigation} from '@react-navigation/native'
import HistoryScreenNavigator from './HistoryScreenNavigator'

const { width, height } = Dimensions.get('window')

const StudyHistory = () => {
    const navigation = useNavigation<any>()
    const goBack = useCallback(()=>navigation.goBack(),[])
    const [tabNumber,setTabNumber] = useState(0)
    return (
        <SafeAreaView style={styles.safeContainer}>

            <TouchableOpacity style={styles.header} onPress={goBack}>
                <Text style={{fontSize: 16,
                            fontFamily: 'GodoM',
                            color: '#9F9F9F',
                            // backgroundColor:'#000000'
                            
                            }} >
                &lt; 프로필 </Text>
            </TouchableOpacity>
            <Text style={{
                    marginHorizontal:width*0.05,
                    fontSize: 18,
                    fontFamily: 'GodoM',
                }}>공부기록</Text>
                <View style={{alignItems:'center'}}>
                    <MemberIcon touchable size={width*0.9/4}/>
                    <Text style={{
                        marginVertical:height*0.01,
                        fontSize: 16,
                        fontFamily: 'GodoM',
                    }}>고달픈승구</Text>
                </View>
                <HistoryTabBar tabNumber={tabNumber} setTabNumber={setTabNumber} />
            <ScrollView style={{flex:1,}} bounces={false}>
                <HistoryScreenNavigator tabNumber={tabNumber}/>
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
    
})