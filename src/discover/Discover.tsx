import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Discover() {
    const [top50, setTop50] = useState(getTop50())
    const navi = useNavigation<any>()
    return <>
        {/* <TouchableOpacity onPress={() => { navi.navigate('PlannerNavigator') }} style={styles.icon}>
                <Icon name='chevron-left' size={30} color='#5E5E64' /></TouchableOpacity> */}
        <View style={styles.topView}>
            <Text style={{ color: 'grey', fontSize: 14, fontFamily: 'GodoM', marginBottom: 5 }}>Find your</Text>
            <Text style={{ color: 'black', fontSize: 24, fontFamily: 'GodoM' }}>STUDY MATES</Text>
            <TouchableOpacity style={styles.findView} onPress={() => { navi.navigate('Search') }} activeOpacity={1}>
                <Icon name='magnify' size={25} style={{ padding: 5, }} color='grey' />
                <TextInput placeholder='What are you looking for?' style={styles.textInput} editable={false}
                    placeholderTextColor='grey' /></TouchableOpacity>
        </View>
        <ScrollView horizontal={true} style={{ marginTop: 20 }}>
            <LinearGradient colors={['#C4C3C300', '#C4C3C3']} style={{ flexDirection: 'row', paddingVertical: 20 }}>
                <Image source={require('../../images/white.png')} style={styles.book} />
                <Image source={require('../../images/white.png')} style={styles.book} />
                <Image source={require('../../images/white.png')} style={styles.book} />
                <Image source={require('../../images/white.png')} style={styles.book} />
                <Image source={require('../../images/white.png')} style={styles.book} />
                <Image source={require('../../images/white.png')} style={styles.book} />
            </LinearGradient>
        </ScrollView>
        <View style={styles.bottom}>
            <Text style={styles.bottomTitle}><Image source={require('../../images/book.png')} style={{ width: 20, height: 20 }} />  금주의 TOP 50</Text>
            <ScrollView style={{ height: '27%' }}>
                {top50.map((v, i) => <Text style={styles.top50Name} key={i}>{i + 1}.  {v.name}</Text>)}
            </ScrollView>
        </View>
    </>
}

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
        elevation: 5, paddingTop: 40
    },
    findView: {
        flexDirection: 'row', alignItems: 'center',
        backgroundColor: '#F5F5F5', borderRadius: 10,
        marginTop: 10
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
        }
    ]
}