import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ImageBackground, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useContextOfAll } from '../Provider'
import { serverIPaddress } from '../Util'

export default function Edit() {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const navi = useNavigation<any>()
    const cont = useContextOfAll()
    return <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <TouchableOpacity onPress={() => { navi.goBack() }} style={styles.icon}>
                <Icon name='chevron-left' size={30} color='#5E5E6499' /></TouchableOpacity>
            <TouchableOpacity onPress={() => { save(title, content, cont, navi) }} style={styles.icon}>
                <Icon name='content-save-outline' size={30} color='#5E5E6499' /></TouchableOpacity>
        </View>
        <View style={{ padding: 20 }}>
            <TextInput style={styles.title} placeholder='새로운 메모' placeholderTextColor='#595959' value={title} onChangeText={setTitle} />
            <LinearGradient colors={['#f5f7fa','#c3cfe2']}>
                <TextInput style={styles.content} multiline={true} value={content} onChangeText={setContent} />
            </LinearGradient>
        </View>
    </View>
}

function save(title, content, cont, navi) {
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
        // borderBottomWidth: 1,
        // borderBottomColor: 'black',
        marginHorizontal: '5%',
        color: '#59595999', textAlign: 'center',
        fontSize: 25, marginBottom: '10%',
        marginTop: '5%', fontFamily: 'GodoM'
    },
    content: {
        // marginHorizontal: '5%',
        color: 'black', minHeight: '50%',
        textAlignVertical: 'center',// backgroundColor: 'red'
        textAlign: 'center', fontFamily: 'GodoM'
    },
    icon: {
        alignSelf: 'flex-start', backgroundColor: 'white',
        marginTop: '10%', marginLeft: '10%', borderRadius: 5,
        borderWidth: 0, borderColor: '#DFE3EA', elevation: 5,
        overflow: 'hidden', marginRight: '10%'
    },
})