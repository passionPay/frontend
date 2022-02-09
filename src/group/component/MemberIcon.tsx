import React from 'react'
import { Platform, Dimensions,StyleSheet, SafeAreaView, View, Image,Text,ScrollView, TouchableOpacity } from 'react-native'

const { width, height } = Dimensions.get('window')

const MemberIcon = ({size,margin,backgroundColor, touchable}) =>{
    const coreImage = (
        <Image source={require('../../../images/5.png')} style={[styles.memberImage,{width:size,height:size,backgroundColor:backgroundColor, borderRadius:size/2}]} />
    )

    return (
        touchable?
        <TouchableOpacity style={[styles.memberImageContainer,{marginHorizontal:margin}]}>
            {coreImage}
        </TouchableOpacity>
        
        :
        <View style={[styles.memberImageContainer,{marginHorizontal:margin}]}>
            {coreImage}
        </View>

    )
}
MemberIcon.defaultProps = {
    size: 40,
    margin:width*0.03,
    backgroundColor:'#000000',
    touchable:false,
}
export default MemberIcon

const styles = StyleSheet.create({
    memberImageContainer:{
        // marginHorizontal:width*0.03,
    },
    memberImage:{
        // backgroundColor: '#ddd',
        borderWidth:2,
        borderColor:'#7EBEF9'
    },
})