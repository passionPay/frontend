import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ImageBackground, Keyboard, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useContextOfAll } from '../Provider'
import { serverIPaddress } from '../Util'

export default function Edit() {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const navi = useNavigation<any>()
    const cont = useContextOfAll()
    // useEffect(() => {
    //     // const reload = navi.addListener('focus', () => {
    //     //     cont.setTabbarVisible(false)
    //     // })
    //     navi.addListener('blur', () => {
    //         cont.setTabbarVisible(true)
    //     })
    //     // return reload
    // }, [navi])
    // Keyboard.addListener('keyboardDidShow', () => {cont.setTabbarVisible(false)})
    return <ImageBackground source={require('../../images/gridBack.png')} style={{ flex: 1 }}>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <TouchableOpacity onPress={() => { navi.goBack() }} style={styles.icon}>
                <Icon name='chevron-left' size={30} color='#5E5E64' /></TouchableOpacity>
            <TouchableOpacity onPress={() => { save(title, content, cont, navi) }} style={styles.icon}>
                <Icon name='content-save-outline' size={30} color='#5E5E64' /></TouchableOpacity>
        </View>
        <TextInput style={styles.title} placeholder='제목' placeholderTextColor='grey' value={title} onChangeText={setTitle}/>
        <TextInput style={styles.content} placeholder='내용' placeholderTextColor='grey' multiline={true} value={content} onChangeText={setContent}/>
    </ImageBackground>
}

function save(title, content, cont, navi) {
    console.log(cont.user.token)
    axios({
        url: serverIPaddress + '/memo',
        method: 'post',
        headers: {
            'Authorization': 'Bearer ' + cont.user.token
        },
        data: {
            title: title, content: content
        }
    }).then(function (res) {
        console.log(res.data)
        navi.goBack()
    }).catch(function (error) {
        console.log(error)
        ToastAndroid.show('저장 실패', ToastAndroid.SHORT)
    })
}

const styles = StyleSheet.create({
    title: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        marginHorizontal: '5%',
        color: 'black'
    },
    content: {
        marginHorizontal: '5%',
        color: 'black', minHeight: '50%',
        textAlignVertical: 'top'
    },
    icon: {
        alignSelf: 'flex-start', backgroundColor: 'white',
        marginTop: '5%', marginLeft: '5%', borderRadius: 5,
        borderWidth: 0, borderColor: '#DFE3EA', elevation: 5,
        overflow: 'hidden', marginRight: '5%'
    }
})