import React from 'react'
import { Dimensions, StyleSheet, SafeAreaView, View, Image, Text, ScrollView } from 'react-native'

import ProgressBar from '../../component/ProgressBar'

const { width, height } = Dimensions.get('window')

const ToggleButton = () => {
    return (
        <View style={{
            position: 'absolute',
            width: 100,
            height: 30,
            right: 15,
            top: 3,
            borderRadius: 15,
            backgroundColor: '#F5FBFF',
            borderWidth: 0.2,
            borderColor: '#8AC8FF',
            flexDirection: 'row',
            alignItems: 'center',
            // justifyContent:'space-around',
        }}>
            <View style={{
                marginLeft: 5,
                width: 50,
                height: 23,
                borderRadius: 10,
                backgroundColor: '#8AC8FF',
                justifyContent: 'center'
            }}>
                <Text style={{
                    textAlign: 'center',
                    color: '#ffffff',
                    fontSize: 14,
                    fontWeight: 'bold',
                }}>시간</Text>
            </View>
            <Text style={{
                marginLeft: 5,
                fontSize: 14,
                fontWeight: '500',
            }}>미션</Text>
        </View>
    )
}

const OtherGroupProgressBar = () => {
    return (
        <View style={{ position: 'relative' }}>
            <ToggleButton />
            <Text style={{
                marginTop: 10,
                marginBottom: 10,
                fontSize: 13,
                fontFamily: 'GodoM'
            }}>
                오늘 평균 목표 달성률(미션)
            </Text>
            <ProgressBar hasIndicator progress={0.5}></ProgressBar>
        </View>
    )
}

export default OtherGroupProgressBar

const styles = StyleSheet.create({

})