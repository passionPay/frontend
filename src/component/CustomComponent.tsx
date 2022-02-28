import React, { FC } from 'react'
import { Text as RNText, TextProps, View } from 'react-native'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { IconProps } from 'react-native-vector-icons/Icon'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export const Text: FC<TextProps> = (props: TextProps) => {
    const bbw = props.style ? props.style['borderBottomWidth'] : undefined
    const brw = props.style ? props.style['borderRightWidth'] : undefined
    const blw = props.style ? props.style['borderLeftWidth'] : undefined
    const btw = props.style ? props.style['borderTopWidth'] : undefined
    const mb = props.style ? props.style['marginBottom'] : undefined
    const mt = props.style ? props.style['marginTop'] : undefined
    const ml = props.style ? props.style['marginLeft'] : undefined
    const mr = props.style ? props.style['marginRight'] : undefined
    const mh = props.style ? props.style['marginHorizontal'] : undefined
    const mv = props.style ? props.style['marginVertical'] : undefined
    const m = props.style ? props.style['margin'] : undefined
    if (bbw || brw || blw || btw)
        return <View style={{
            borderBottomWidth: bbw,
            borderRightWidth: brw,
            borderLeftWidth: blw,
            borderTopWidth: btw,
            borderColor: props.style ? props.style['borderColor'] : '#000',
            marginBottom: mb,
            marginTop: mt,
            marginLeft: ml,
            marginRight: mr,
            marginHorizontal: mh,
            marginVertical: mv,
            margin: m
        }}>
            <RNText {...props}
                style={[{
                    fontFamily: 'GodoM',
                    color: '#151515',
                    fontSize: 14
                }, props.style, {
                    borderBottomWidth: 0, borderRightWidth: 0, borderLeftWidth: 0, borderTopWidth: 0,
                    marginBottom: 0, marginTop: 0, marginLeft: 0, marginRight: 0, marginHorizontal: 0, marginVertical: 0, margin: 0
                }]}>
                {props.children}</RNText>
        </View>
    return <RNText {...props}
        style={[{
            fontFamily: 'GodoM',
            color: '#151515',
            fontSize: 14
        }, props.style]}>
        {props.children}</RNText>
}

type TouchableIconProps = TouchableOpacityProps & {
    iconProps: IconProps
}

export const TouchableIcon: FC<TouchableIconProps> = ({ children, iconProps, ...props }) => {
    return <TouchableOpacity {...props}>
        <Icon {...iconProps} />
    </TouchableOpacity>
}