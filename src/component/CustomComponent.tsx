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
    const myTextComponent = <RNText {...props}
        style={[{
            fontFamily: 'GodoM',
            color: '#151515',
            fontSize: 14
        }, props.style]}>
        {props.children}</RNText>
    if (bbw || brw || blw || btw)
        return <View style={{
            borderBottomWidth: bbw,
            borderRightWidth: brw,
            borderLeftWidth: blw,
            borderTopWidth: btw
        }}>
            {myTextComponent}
        </View>
    return myTextComponent
}

type TouchableIconProps = TouchableOpacityProps & {
    iconProps: IconProps
}

export const TouchableIcon: FC<TouchableIconProps> = ({ children, iconProps, ...props }) => {
    return <TouchableOpacity {...props}>
        <Icon {...iconProps} />
    </TouchableOpacity>
}