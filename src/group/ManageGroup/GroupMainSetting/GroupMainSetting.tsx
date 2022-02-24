import React, {useCallback} from 'react'
import { Platform, Dimensions,StyleSheet, SafeAreaView, View, Image,Text,ScrollView, TouchableOpacity } from 'react-native'
import {useNavigation} from '@react-navigation/native'

import {SettingItem}from '../MyGroupSetting/SettingItem'
import { TouchableIcon } from '../../../component/TouchableIcon'

const { width, height } = Dimensions.get('window')

const settingItems = [
    {
        tag:'내가 만든 그룹',
        type:'navigatorWithState',
        option:{
            navigatorName:'EditNotice'
        }
    },
    {
        tag:'내가 소속된 그룹',
        type:'navigatorWithState',
        option:{
            navigatorName:'EditNotice'
        }
    },
]

const MyGroupSetting=()=> {


    const navigation = useNavigation<any>()
    const goBack = useCallback(()=>navigation.goBack(),[])
    return (
    <SafeAreaView style={styles.safeContainer}>
        <View style={styles.container}>

            <TouchableOpacity style={styles.header} onPress={goBack}>
                <Text style={{
                                fontSize: 13,
                                fontFamily: 'GodoM',
                                color: '#9F9F9F',
                            }}>
                {`< Study Group`}</Text>
            </TouchableOpacity>
            <Text style={styles.title}>{'내 그룹 설정'}</Text>
            <ScrollView>
                {settingItems.map((item,idx)=>
                    <SettingItem {...item} key={idx}/>)
                }
            </ScrollView>
        </View>
    </SafeAreaView>
    )

}


const styles = StyleSheet.create({
    header:{
        height:50,
        justifyContent:'center',
        alignSelf:'baseline',
        paddingHorizontal: width*0.05,
    },
    safeContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container:{
        flex:1,
    },
    title: {
        fontSize: 18,
        fontFamily: 'GodoM',
        color: '#000',
        marginBottom:height*0.02,
        paddingHorizontal: width*0.05,

    },
    myGroups:{
        paddingTop: height*0.02,
    },
    groupDescription: {
        fontSize: 14,
        color: '#484848',
    },
    

})



export default MyGroupSetting


