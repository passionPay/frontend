import React from 'react'
import { TouchableOpacity, Image, ScrollView, Dimensions, SafeAreaView,StyleSheet, Text, View } from 'react-native'

import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import MemberIcon from '../component/MemberIcon'
const { width, height } = Dimensions.get('window')


export default function ProfileV2() {

    return (
        <SafeAreaView style={styles.safeContainer}>
            <View style={styles.header}>
                <View style={{}}>
                    <Text style={styles.titleText}>프로필</Text>

                </View>
                

                <Icon style={[styles.headerIcon,{marginLeft:'auto'}]} name={'bell-outline'} size={30} color='black' />
                <Icon style={styles.headerIcon} name={'cog-outline'} size={30} color='black' />
            </View>
            <View>
                <View style={{flexDirection:'row',paddingHorizontal:'5%',paddingTop:'3%',paddingBottom:'3%'}}>
                    <View style={styles.profileContainer}>
                        <MemberIcon touchable size={width*0.9/4}/>
                        <Text style={[styles.titleText,{fontSize:20,marginTop: 10}]}>고달픈승구</Text>
                    </View>
                    <View style={{flex:1.5,justifyContent:'center'}}>
                        <View style={{flexDirection:'row',flex:1,justifyContent:'space-between',marginHorizontal:width*0.9*0.66*0.07}}>
                            <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:24}}>92</Text>
                                <Text>팔로잉</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:24}}>92</Text>
                                <Text>팔로잉</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection:'row',flex:1,justifyContent:'space-between',marginHorizontal:width*0.9*0.66*0.07}}>

                            <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:24}}>92</Text>
                                <Text>팔로잉</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:24}}>92</Text>
                                <Text>팔로잉</Text>
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
    }

})