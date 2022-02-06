import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Animated, { Easing } from 'react-native-reanimated'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import LottieView from 'lottie-react-native'

export default function Discover() {
    const navi = useNavigation<any>()
    useEffect(() => {
        const reload = navi.addListener('focus', () => {
            TopVal.setValue(0)
            Animated.timing(TopVal, {
                toValue: 1, duration: 1000, easing: Easing.elastic(1)
            }).start()
        })
        return reload
    }, [navi])
    return <View style={{ flex: 1 }}>
    </View>
}

const TopVal = new Animated.Value(0);

const TopAnim = {
    transform: [
        {
            translateY: TopVal.interpolate({
                inputRange: [0, 1],
                outputRange: [-200, 0]
            })
        },
    ],
};

const styles = StyleSheet.create({
    icon: {
        alignSelf: 'flex-start', backgroundColor: 'white',
        marginTop: '5%', marginLeft: '5%', borderRadius: 5,
        borderWidth: 0, borderColor: '#DFE3EA', elevation: 5,
        overflow: 'hidden'
    },
    topView: {
        backgroundColor: 'white',
        padding: 20,
        borderBottomLeftRadius: 20, borderBottomRightRadius: 20,
        elevation: 5, paddingTop: 70
    },
    findView: {
        flexDirection: 'row', alignItems: 'center',
        backgroundColor: '#44444411', borderRadius: 10,
        marginTop: '5%'
    },
    textInput: {
        paddingVertical: 5
    },
    book: {
        width: 150, height: 200, marginHorizontal: 10
    },
    bottom: {
        backgroundColor: 'white', padding: 20
    },
    bottomTitle: {
        color: '#595959', fontSize: 20,
        fontFamily: 'GodoM', paddingBottom: 10
    },
    top50Name: {
        color: '#595959', fontSize: 16,
        fontFamily: 'GodoM', paddingVertical: 3,
        marginHorizontal: 10
    }
})

const getTop50 = () => {
    return [
        {
            name: 'Yoon_yess'
        },
        {
            name: 'YeRIm_Park'
        },
        {
            name: 'Sana_Kang'
        },
        {
            name: 'Hermione Granger'
        },
        {
            name: 'Study_Mates'
        },
        {
            name: 'Yoon_yess22'
        },
        {
            name: 'YeRIm_Park22'
        },
        {
            name: 'Sana_Kang22'
        },
        {
            name: 'Hermione Granger22'
        },
        {
            name: 'Study_Mates22'
        },
        {
            name: 'Yoon_yess33'
        },
        {
            name: 'YeRIm_Park33'
        },
        {
            name: 'Sana_Kang33'
        },
        {
            name: 'Hermione Granger33'
        },
        {
            name: 'Study_Mates33'
        },
        {
            name: 'Yoon_yess2233'
        },
        {
            name: 'YeRIm_Park2233'
        },
        {
            name: 'Sana_Kang2233'
        },
        {
            name: 'Hermione Granger2233'
        },
        {
            name: 'Study_Mates2233'
        }
    ]
}