import React, { FC } from 'react'
import { Text as RNText, TextProps } from 'react-native'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { IconProps } from 'react-native-vector-icons/Icon'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export const Text: FC<TextProps> = (props: TextProps) => {
    return <RNText {...props}
        style={[{ fontFamily: 'GodoM', color: '#000', fontSize: 14 }, props.style]}>
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