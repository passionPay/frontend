import React, { useState } from 'react'
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import BottomSheet, { bottomSheetAnimVal } from './BottomSheet'

export default function SubjectSelectFilter({ filter }) {
    return <TouchableOpacity style={ styles.container }
        onPress={() => {
            Animated.timing(bottomSheetAnimVal, {
                toValue: 1, useNativeDriver: true, duration: 200
            }).start()
            console.log(bottomSheetAnimVal)
        }}
    >
        <Icon name='filter-outline' size={20} color='#000' />
        <Text style={styles.filterText}>{filter}</Text>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        borderWidth: 1,
        alignSelf: 'flex-end',
        marginVertical: 10,
        marginRight: 50,
        borderColor: '#000',
        padding: 2,
        flexDirection: 'row',
        alignItems: 'center'
    },
    filterText: {
        fontSize: 12,
        fontFamily: 'GodoM',
        color: '#000',
        marginRight: 3
    }
})