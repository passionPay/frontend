import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Animated, { Easing } from 'react-native-reanimated'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Discover() {
    const [top50, setTop50] = useState(getTop50())
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
        {/* <TouchableOpacity onPress={() => { navi.navigate('PlannerNavigator') }} style={styles.icon}>
                <Icon name='chevron-left' size={30} color='#5E5E64' /></TouchableOpacity> */}
        <Animated.View style={[styles.topView, TopAnim]}>
            <Text style={{ color: 'grey', fontSize: 17, fontFamily: 'GodoM', fontWeight: 'bold' }}>Find your</Text>
            <Text style={{ color: 'black', fontSize: 25, fontFamily: 'GodoM', fontWeight: 'bold' }}>STUDY MATES</Text>
            <TouchableOpacity style={styles.findView} onPress={() => { navi.navigate('Search') }} activeOpacity={1}>
                <Icon name='magnify' size={25} style={{ padding: 5, }} color='grey' />
                <TextInput placeholder='What are you looking for?' style={styles.textInput} editable={false}
                    placeholderTextColor='grey' /></TouchableOpacity>
        </Animated.View>
        <View style={{ height: 275 }}>
            <ScrollView horizontal={true} style={{ marginTop: 35 }}>
                <LinearGradient colors={['#6667AB00', '#6667AB33']} style={{ flexDirection: 'row', paddingVertical: 20 }}>
                    <Image source={require('../../images/white.png')} style={styles.book} />
                    <Image source={require('../../images/white.png')} style={styles.book} />
                    <Image source={require('../../images/white.png')} style={styles.book} />
                    <Image source={require('../../images/white.png')} style={styles.book} />
                    <Image source={require('../../images/white.png')} style={styles.book} />
                    <Image source={require('../../images/white.png')} style={styles.book} />
                </LinearGradient>
            </ScrollView></View>
        <ScrollView>
            <View style={styles.bottom}>
                <Text style={styles.bottomTitle}><Image source={require('../../images/book.png')} style={{ width: 20, height: 20 }} />  금주의 TOP 50</Text>
                {top50.map((v, i) => <Text style={styles.top50Name} key={i}>{i + 1}.  {v.name}</Text>)}
            </View>
        </ScrollView>
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
        elevation: 5, paddingTop: 50
    },
    findView: {
        flexDirection: 'row', alignItems: 'center',
        backgroundColor: '#7575ff33', borderRadius: 10,
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