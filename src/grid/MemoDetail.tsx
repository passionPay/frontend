import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Alert, ImageBackground, Keyboard, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useContextOfAll } from '../Provider'
import { serverIPaddress } from '../Util'

export default function MemoDetail({ route }) {
    const [title, setTitle] = useState(route.params.title)
    const [content, setContent] = useState(route.params.content)
    const navi = useNavigation<any>()
    const cont = useContextOfAll()
    return <ImageBackground source={require('../../images/gridBack.png')} style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <TouchableOpacity onPress={() => { navi.goBack() }} style={styles.icon}>
                <Icon name='chevron-left' size={30} color='#5E5E64' /></TouchableOpacity>
            <View style={{ flexDirection: 'row', margin: '5%', justifyContent: 'flex-end', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => { remove(route.params.memoId, cont, navi) }} style={[styles.icon, { marginVertical: 0, marginHorizontal: '5%' }]}>
                    <Icon name='delete-outline' size={30} color='#5E5E64' /></TouchableOpacity>
                <TouchableOpacity onPress={() => { update(route.params.memoId, title, content, cont, navi) }} style={[styles.icon, { marginVertical: 0, marginHorizontal: '5%' }]}>
                    <Icon name='content-save-outline' size={30} color='#5E5E64' /></TouchableOpacity>
            </View>
        </View>
        <TextInput style={styles.title} placeholder='제목' placeholderTextColor='grey' value={title} onChangeText={setTitle} />
        <TextInput style={styles.content} placeholder='내용' placeholderTextColor='grey' multiline={true} value={content} onChangeText={setContent} />
    </ImageBackground>
}

function remove(memoId, cont, navi) {
    console.log(memoId)
    Alert.alert('삭제', '삭제하시겠습니까?', [{ text: '취소' }, {
        text: '확인',
        onPress: () => {
            axios({
                url: serverIPaddress + '/memo/' + memoId,
                method: 'delete',
                headers: {
                    'Authorization': 'Bearer ' + cont.user.token
                }
            }).then(function (res) {
                navi.goBack()
            }).catch(function (error) {
                console.log(error)
                ToastAndroid.show('삭제 실패', ToastAndroid.SHORT)
            })
        }
    }])
}

function update(memoId, title, content, cont, navi) {
    axios({
        url: serverIPaddress + '/memo/' + memoId,
        method: 'post',
        headers: {
            'Authorization': 'Bearer ' + cont.user.token
        },
        data: {
            title: title, content: content
        }
    }).then(function (res) {
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
        margin: '5%', borderRadius: 5,
        borderWidth: 0, borderColor: '#DFE3EA', elevation: 5,
        overflow: 'hidden'
    }
})