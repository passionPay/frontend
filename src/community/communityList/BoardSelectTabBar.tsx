import React, { useRef, useState } from 'react'
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import SubjectSelectFilter from './SubjectSelectFilter';

export default function BoardSelectTabBar({ filter, currentTab, setCurrentTab }) {
    const tabBarAnimVal = useRef(new Animated.Value(0)).current;

    const tabBarAnim = {
        marginLeft: tabBarAnimVal.interpolate({
            inputRange: [0, 1],
            outputRange: ['18%', '68%']
        })
    };

    return <View style={{ backgroundColor: '#E0EDFF', borderTopRightRadius: 50, borderTopLeftRadius: 50 }}>
        <View style={{ flexDirection: 'row', marginTop: 20, width: '100%' }}>
            <TouchableOpacity onPress={() => {
                Animated.timing(tabBarAnimVal, {
                    toValue: 0, useNativeDriver: false, duration: 200
                }).start(() => { setCurrentTab(0) })
            }} style={{ flex: 1 }}>
                <Text style={[styles.text, { borderRightWidth: 1 }]}>학습 QnA</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                Animated.timing(tabBarAnimVal, {
                    toValue: 1, useNativeDriver: false, duration: 200
                }).start(() => { setCurrentTab(1) })
            }} style={{ flex: 1 }}>
                <Text style={[styles.text, { borderLeftWidth: 1 }]}>자유 게시판</Text>
            </TouchableOpacity>
        </View>
        <Animated.View style={[styles.indicator, tabBarAnim]} />
        {currentTab == 0 ?
            <SubjectSelectFilter filter={filter} /> :
            <Text style={styles.filterText}>1학년</Text>}
    </View>
}

const styles = StyleSheet.create({
    text: {
        fontSize: 15,
        fontFamily: 'GodoM',
        color: '#000',
        textAlign: 'center',
        marginVertical: 7
    },
    indicator: {
        backgroundColor: 'gold',
        width: '14%',
        height: 5,
        borderRadius: 10,
    },
    filterText: {
        fontSize: 14,
        fontFamily: 'GodoM',
        color: '#000',
        marginVertical: 14,
        alignSelf: 'center'
    }
})