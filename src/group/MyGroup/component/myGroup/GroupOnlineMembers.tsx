import React from 'react'
import { Dimensions,StyleSheet, SafeAreaView, View, Image,Text,ScrollView } from 'react-native'

import MemberIcon from '../../../../component/MemberIcon'


const { width, height } = Dimensions.get('window')

const Members = () =>{
    return (

            <View style={styles.mainContainer}>
                <Text style={styles.memberTitleText}>공부 중인 친구들</Text>

                <ScrollView style={styles.memberScrollContainer} horizontal={true} showsHorizontalScrollIndicator={false}>
                    <MemberIcon size={50} margin={width*0.03} isOnline touchable/>
                    <MemberIcon size={50} margin={width*0.03} isOnline touchable/>
                    <MemberIcon size={50} margin={width*0.03} isOnline touchable/>
                    <MemberIcon size={50} margin={width*0.03} isOnline touchable/>
                    <MemberIcon size={50} margin={width*0.03} isOnline touchable/>
                    <MemberIcon size={50} margin={width*0.03} isOnline touchable/>
                    <MemberIcon size={50} margin={width*0.03} isOnline touchable/>
                    <MemberIcon size={50} margin={width*0.03} isOnline touchable/>

                </ScrollView>
            </View>
    )
}

export default Members

const styles = StyleSheet.create({
    mainContainer:{
        marginTop:height*0.04,

    },
    memberScrollContainer:{
        marginTop:height*0.01,
        paddingVertical:height*0.02,
        backgroundColor:'#f9f9f9',
        borderRadius:10,
        borderWidth:0.5,
        borderColor:'#c4c4c4'
    },
    memberImage:{
        width: 35, height: 35,
        borderRadius: 20,
        // backgroundColor: '#ddd',
    },
    memberTitleText:{
        fontSize: 15,
        fontFamily: 'GodoM',
    },
    memberImageContainer:{
        marginHorizontal:width*0.03,
    }



})