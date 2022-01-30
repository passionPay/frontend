import React, { useState } from 'react'
import { Dimensions, Image, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useContextOfAll } from '../Provider'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { serverIPaddress } from '../Util'
import { useNavigation } from '@react-navigation/native'

export default function SignUp() {
    const [username, setUsername] = useState('') // username == 아이디
    const [displayName, setDisplayName] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [errorMsg, setErrorMsg] = useState('')
    const [select, setSelect] = useState(-1)
    const navi = useNavigation<any>()
    const cont = useContextOfAll()
    return <View style={{ backgroundColor: '#2A2F45', flex: 1, justifyContent: 'center' }}>
        <Text style={styles.title}>SIGN UP</Text>
        <View style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center', marginVertical: '8%' }}>
            <TouchableOpacity onPress={() => { setSelect(0) }}>
                <Image source={require('../../images/profile1.png')} style={[styles.image, {backgroundColor: select == 0 ? '#fff' : '#0000'}]} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { setSelect(1) }}>
                <Image source={require('../../images/profile2.png')} style={[styles.image, {backgroundColor: select == 1 ? '#fff' : '#0000'}]} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { setSelect(2) }}>
                <Image source={require('../../images/profile3.png')} style={[styles.image, {backgroundColor: select == 2 ? '#fff' : '#0000'}]} />
            </TouchableOpacity>
        </View>
        <View style={styles.textInput}>
            <Icon name='face-outline' size={22} color='#515B81' />
            <TextInput placeholder='아이디' style={styles.text} value={username} onChangeText={setUsername}
                placeholderTextColor='#515B81' autoCapitalize='none' />
        </View>
        <View style={styles.textInput}>
            <Icon name='lock-outline' size={22} color='#515B81' />
            <TextInput placeholder='비밀번호' style={styles.text} secureTextEntry={true} value={password} onChangeText={setPassword}
                placeholderTextColor='#515B81' autoCapitalize='none' />
        </View>
        <View style={styles.textInput}>
            <Icon name='lock-outline' size={22} color='#515B81' />
            <TextInput placeholder='비밀번호 확인' style={styles.text} secureTextEntry={true} value={password2} onChangeText={setPassword2}
                placeholderTextColor='#515B81' autoCapitalize='none' />
        </View>
        <View style={styles.textInput}>
            <Icon name='account-outline' size={22} color='#515B81' />
            <TextInput placeholder='닉네임' style={styles.text} value={displayName} onChangeText={setDisplayName}
                placeholderTextColor='#515B81' autoCapitalize='none' />
        </View>
        <Text style={styles.error}>{errorMsg}</Text>
        <TouchableOpacity onPress={() => { onPress(username, displayName, password, password2, setErrorMsg, cont.setUser, select) }}>
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#F44334', '#F76220', '#FE9311']}
                style={styles.button}>
                <Text style={styles.btnText}>회원가입</Text></LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { navi.replace('Login') }}>
            <Text style={styles.login}>로그인</Text>
        </TouchableOpacity>
    </View>
}

const width = Dimensions.get('window').width

function onPress(username, displayName, password, password2, setErrorMsg, setUser, select) {
    if (password != password2) {
        setErrorMsg('비밀번호를 확인해주세요.')
        return
    }
    if (select == -1) {
        ToastAndroid.show('프로필 이미지를 선택해주세요', ToastAndroid.SHORT)
        return;
    }
    axios({
        url: serverIPaddress + '/user/register',
        method: 'post',
        data: {
            username: username,
            password: password,
            displayName: displayName
        }
    }).then(function (res) {
        console.log(res.data.accessToken)
        AsyncStorage.setItem('token', res.data.accessToken)
        setUser({ token: res.data.accessToken, username: displayName, profile: select })
    }).catch(function (error) {
        console.log(error)
    })
}

const styles = StyleSheet.create({
    title: {
        color: 'white', fontSize: 23,
        textAlign: 'center', marginTop: '8%', marginBottom: '2%',
        fontFamily: 'GodoM'
    },
    textInput: {
        borderColor: '#515B81', borderWidth: 1,
        borderRadius: 30, marginHorizontal: '10%',
        marginTop: '5%', flexDirection: 'row',
        paddingHorizontal: 15, alignItems: 'center',
    },
    text: {
        color: '#515B81', fontSize: 14, paddingHorizontal: 15,
        flex: 1, paddingVertical: 5
    },
    button: {
        borderRadius: 30, marginHorizontal: '10%',
        backgroundColor: 'red', paddingVertical: 13,
    },
    btnText: {
        color: 'white', fontSize: 14, textAlign: 'center',
        fontWeight: 'bold'
    },
    error: {
        fontSize: 14, color: 'red', marginVertical: '3%',
        marginHorizontal: '12%'
    },
    login: {
        fontSize: 14, color: 'grey',
        textAlign: 'center', marginTop: '5%'
    },
    image: {
        width: width * 0.25, height: width * 0.25,
        marginHorizontal: width * 0.01,// borderWidth: 1, borderColor: 'green',
        borderRadius: 100
    }
})