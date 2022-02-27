import React from 'react'
import { ViewStyle,Dimensions, StyleSheet, View, Image, TouchableOpacity } from 'react-native'

const { width, height } = Dimensions.get('window')

type MemberIconProps = {
    size: number,
    style?:ViewStyle,
    backgroundColor?:string,
    isOnline: boolean,
    touchable: boolean,
    onPress?: () => void
}

const defaultProps:MemberIconProps = {
    size:40,
    backgroundColor:'#000000',
    style:{
        marginHorizontal:0,
    },
    touchable: false,
    isOnline: false,
}

const MemberIcon = ({ size,touchable, style, backgroundColor, isOnline, onPress }:MemberIconProps) => {
    style = Object.assign({}, defaultProps.style , style)
    const borderWidth = size * 0.03
    const iconDiameter = size - borderWidth
    const onlineMarkDiameter = (iconDiameter * (1 - 1.414213 / 2) - borderWidth) * 1.3
    const onlineMark = (
        <>
            <View style={{
                width: onlineMarkDiameter, height: onlineMarkDiameter,
                borderRadius: onlineMarkDiameter / 2, borderWidth,
                position: 'absolute', right: 0, bottom: 0,
                backgroundColor: '#30E2B8', borderColor: '#ffffff'
            }}></View>
        </>
    )

    const coreImage = (
        <Image source={require('../../images/5.png')} style={[styles.memberImage, { width: iconDiameter, height: iconDiameter, backgroundColor: backgroundColor, borderRadius: iconDiameter / 2 }]} />
    )
    
    const coreItem = (
        <View style={[{ width: size, height: size, position: 'relative', justifyContent: 'center', alignItems: 'center' }, style]}>
            {coreImage}
            {isOnline ? onlineMark : <></>}
        </View>
    )
    return (
        touchable ?
            <TouchableOpacity onPress={onPress}>
                {coreItem}
            </TouchableOpacity>
            :
            <>
                {coreItem}
            </>

    )
}
MemberIcon.defaultProps = defaultProps

export default MemberIcon

const styles = StyleSheet.create({
    memberImage: {
        borderWidth: 2,
        borderColor: '#7EBEF9'
    },
})