import React from 'react'
import { Dimensions,StyleSheet, SafeAreaView, View, Image,Text,ScrollView } from 'react-native'

import MemberIcon from '../MemberIcon'

const { width, height } = Dimensions.get('window')

const Members = () =>{
    return (

            <View style={styles.mainContainer}>
                <Text style={styles.memberTitleText}>공부 중인 친구들</Text>

                <ScrollView style={styles.memberScrollContainer} horizontal={true} showsHorizontalScrollIndicator={false}>
                    <MemberIcon size={60} margin={width*0.03} isOnline touchable/>
                    <MemberIcon size={60} margin={width*0.03} isOnline touchable/>
                    <MemberIcon size={60} margin={width*0.03} isOnline touchable/>
                    <MemberIcon size={60} margin={width*0.03} isOnline touchable/>
                    <MemberIcon size={60} margin={width*0.03} isOnline touchable/>
                    <MemberIcon size={60} margin={width*0.03} isOnline touchable/>
                    <MemberIcon size={60} margin={width*0.03} isOnline touchable/>
                    <MemberIcon size={60} margin={width*0.03} isOnline touchable/>
                    <MemberIcon size={60} margin={width*0.03} isOnline touchable/>
                </ScrollView>
            </View>
    )
}

export default Members

const styles = StyleSheet.create({
    mainContainer:{
        paddingTop:height*0.04,
    },
    memberScrollContainer:{
        paddingTop:height*0.015,
    },
    memberImage:{
        width: 40, height: 40,
        borderRadius: 20,
        // backgroundColor: '#ddd',
    },
    memberTitleText:{
        fontSize: 20,
        fontFamily: 'GodoM',
    },
    memberImageContainer:{
        marginHorizontal:width*0.03,
    }



})