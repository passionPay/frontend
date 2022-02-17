import React, { FC } from 'react'
import { Text as RNText, TextProps } from 'react-native'

// export const Text: FC<{}> = (props) => {
//     // const {style} = props
//     // return <RNText {...props}
//     //     style={[{ fontFamily: 'GodoM', color: '#000' }, props.style]}>{props.children}</RNText>
//     return <RNText />
// }

export const Text: FC<TextProps> = (props: TextProps) => {
    return <RNText {...props}
        style={[{ fontFamily: 'GodoM', color: '#000' }, props.style]}>
        {props.children}</RNText>
}


// export const MyText = ({ }) => {
//     return <RNText />
// }
// export const Text = props => <Text {...props} style={[{fontFamily: 'GodoM', color: '#000'}, props.style]}>{props.children}</Text>