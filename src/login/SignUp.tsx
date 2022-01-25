import React, { useState } from 'react'
import { AsyncStorage, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useContextOfAll } from '../Provider'

export default function SignUp() {
    const [username, setUsername] = useState('') // username == 아이디
    const [displayName, setDisplayName] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [errorMsg, setErrorMsg] = useState('에러메시지 ')
    const cont = useContextOfAll()
    return <View style={{ backgroundColor: '#2A2F45', flex: 1, justifyContent: 'center' }}>
        <Text style={styles.title}>Sign Up</Text>
        <View style={styles.textInput}>
            <Icon name='face-outline' size={28} color='#515B81' />
            <TextInput placeholder='아이디' style={styles.text} value={username} onChangeText={setUsername} placeholderTextColor='#515B81' />
        </View>
        <View style={styles.textInput}>
            <Icon name='lock-outline' size={28} color='#515B81' />
            <TextInput placeholder='비밀번호' style={styles.text} secureTextEntry={true} value={password} onChangeText={setPassword} placeholderTextColor='#515B81' />
        </View>
        <View style={styles.textInput}>
            <Icon name='lock-outline' size={28} color='#515B81' />
            <TextInput placeholder='비밀번호 확인' style={styles.text} secureTextEntry={true} value={password2} onChangeText={setPassword2} placeholderTextColor='#515B81' />
        </View>
        <View style={styles.textInput}>
            <Icon name='account-outline' size={28} color='#515B81' />
            <TextInput placeholder='닉네임' style={styles.text} value={displayName} onChangeText={setDisplayName} placeholderTextColor='#515B81' />
        </View>
        <Text style={styles.error}>{errorMsg}</Text>
        <TouchableOpacity onPress={() => { onPress(username, displayName, password, password2, setErrorMsg, cont.setUser) }}>
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#F44334', '#F76220', '#FE9311']}
                style={styles.button}>
                <Text style={styles.btnText}>회원가입</Text></LinearGradient>
        </TouchableOpacity>
    </View>
}

function onPress(username, displayName, password, password2, setErrorMsg, setUser) {
    axios({
        url: serverIPaddress + '/rest-auth/registration/',
        method: 'post',
        data: {
            username: name,
            email: email,
            password1: password1,
            password2: password2
        }
    }).then(function (res) {
        console.log(res.data.key)
        AsyncStorage.setItem('token', res.data.key)
        setUser({ token: res.data.key, username: name })
    }).catch(function (error) {
        console.log(error)
    }
}

const styles = StyleSheet.create({
    title: {
        color: 'white', fontSize: 23,
        textAlign: 'center', marginBottom: '10%'
    },
    textInput: {
        borderColor: '#515B81', borderWidth: 1,
        borderRadius: 30, marginHorizontal: '10%',
        marginBottom: '5%', flexDirection: 'row',
        paddingHorizontal: 15, alignItems: 'center'
    },
    text: {
        color: '#515B81', fontSize: 18, paddingHorizontal: 15
    },
    button: {
        borderRadius: 30, marginHorizontal: '10%',
        backgroundColor: 'red', paddingVertical: 13,
    },
    btnText: {
        color: 'white', fontSize: 15, textAlign: 'center',
        fontWeight: 'bold'
    },
    error: {
        fontSize: 14, color: 'red', marginBottom: '5%',
        marginHorizontal: '12%'
    },
})