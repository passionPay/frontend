import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Edit() {
    const navi = useNavigation<any>()
    return <ImageBackground source={require('../../images/gridBack.png')} style={{ flex: 1 }}>
        <TouchableOpacity onPress={() => { navi.goBack() }} style={styles.icon}>
            <Icon name='chevron-left' size={30} color='#5E5E64' /></TouchableOpacity>
        <TextInput style={styles.title} placeholder='제목' />
        <TextInput style={styles.content} placeholder='내용' />
    </ImageBackground>
}

const styles = StyleSheet.create({
    title: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        marginHorizontal: '5%',
    },
    content: {
        marginHorizontal: '5%',
    },
    icon: {
        alignSelf: 'flex-start', backgroundColor: 'white',
        marginTop: '5%', marginLeft: '5%', borderRadius: 5,
        borderWidth: 0, borderColor: '#DFE3EA', elevation: 5,
        overflow: 'hidden'
    }
})