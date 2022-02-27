import { DrawerContentScrollView } from '@react-navigation/drawer'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, Dimensions, StyleSheet } from 'react-native'

//props here is textProps
const CommonInput = ({ state, dispatch, stateName, tagName, ...props }) => {

    return (
        <>
            <View style={styles.row}>
                <Text style={styles.tag}>{tagName}</Text>
                <TextInput
                    style={styles.info}
                    value={state[stateName]}
                    onChangeText={(text) => { dispatch({ type: 'CHANGE_INPUT', name: stateName, value: text }) }}
                    {...props}
                />
            </View>
        </>
    )
}
const NumericInput = ({ state, dispatch, stateName, tagName, ...props }) => {

    const [input, setInput] = useState('')



    const displayText = useCallback((numericState) => {
        if (isNaN(numericState)) {
            return ""
        } else {
            return numericState.toString()
        }
    }, [])

    const onChangeText = useCallback((text) => {
        dispatch({ type: 'CHANGE_INPUT', name: stateName, value: parseInt(text) })
    }, [])

    useEffect(() => {
        dispatch({ type: 'CHANGE_INPUT', name: stateName, value: parseInt(input) })
    }, [input])



    return (
        <>
            <View style={styles.row}>
                <Text style={styles.tag}>{tagName}</Text>
                <TextInput
                    style={styles.info}
                    keyboardType='numeric'
                    value={displayText(state[stateName])}
                    onChangeText={onChangeText}
                    {...props}
                />
            </View>
        </>
    )
}

export { CommonInput, NumericInput }

const styles = StyleSheet.create({
    tag: {
        fontSize: 16,
        paddingRight: 10,
        paddingLeft: 10,
    },
    info: {
        fontSize: 15, paddingVertical: 7,
        // borderRadius: 10,
        backgroundColor: '#f9f9f9',
        paddingHorizontal: 10,
        marginHorizontal: 20, flex: 1
    },
    row: {
        borderBottomWidth: 1,
        flexDirection: 'row', alignItems: 'center', paddingVertical: 6
    },
})