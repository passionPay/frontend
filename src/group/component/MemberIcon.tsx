import React from 'react'
import { Platform, Dimensions,StyleSheet, SafeAreaView, View, Image,Text,ScrollView, TouchableOpacity } from 'react-native'

const { width, height } = Dimensions.get('window')

const MemberIcon = ({size,margin,backgroundColor, touchable, isOnline}) =>{
    const borderWidth=size*0.03
    const iconDiameter = size-borderWidth
    const onlineMarkDiameter = (iconDiameter*(1-1.414213/2)-borderWidth)*1.3

    

    const onlineMark = (
        <>
            <View style={{
                width:onlineMarkDiameter,height:onlineMarkDiameter,
                borderRadius:onlineMarkDiameter/2,borderWidth,
                position:'absolute',right:0,bottom:0,
                backgroundColor:'#30E2B8',borderColor:'#ffffff'}}></View>
            {/* <View style={{width:onlineMarkDiameter,height:onlineMarkDiameter,position:'absolute',right:1,bottom:1,backgroundColor:'#fff000'}}></View> */}
        </>
    )

    const coreImage = (
        <Image source={require('../../../images/5.png')} style={[styles.memberImage,{width:iconDiameter,height:iconDiameter,backgroundColor:backgroundColor, borderRadius:iconDiameter/2}]} />
    )
    
    const coreItem= (
        <View style={[{width:size,height:size,position:'relative',marginHorizontal:margin, justifyContent:'center', alignItems:'center',}]}>
            {coreImage}
            {isOnline ? onlineMark:<></>}
        </View>
    )
    return (
        touchable?
        <TouchableOpacity>
            {coreItem}
        </TouchableOpacity>
        :
        <>
            {coreItem}
        </>

    )
}
MemberIcon.defaultProps = {
    size: 40,
    margin:width*0,
    backgroundColor:'#000000',
    touchable:false,
    isOnline:false,
}
export default MemberIcon

const styles = StyleSheet.create({
    memberImageContainer:{
        
    },
    memberImage:{
        // backgroundColor: '#ddd',
        borderWidth:2,
        borderColor:'#7EBEF9'
    },
})