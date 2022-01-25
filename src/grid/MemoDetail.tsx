import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Alert, ImageBackground, Keyboard, Modal, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useContextOfAll } from '../Provider'
import { serverIPaddress } from '../Util'
import LottieView from 'lottie-react-native'

export default function MemoDetail({ route }) {
    const [title, setTitle] = useState(route.params.title)
    const [content, setContent] = useState(route.params.content)
    const [modalVisible, setModalVisible] = useState(false);
    const navi = useNavigation<any>()
    const cont = useContextOfAll()
    return <ImageBackground source={require('../../images/gridBack.png')} style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '5%' }}>
            <TouchableOpacity onPress={() => { navi.goBack() }} style={styles.icon}>
                <Icon name='chevron-left' size={30} color='#5E5E64' /></TouchableOpacity>
            <View style={{ flexDirection: 'row', margin: '5%', justifyContent: 'flex-end', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => { setModalVisible(!modalVisible) }} style={[styles.icon, { marginVertical: 0, marginHorizontal: '5%' }]}>
                    <Icon name='delete-outline' size={30} color='#5E5E64' /></TouchableOpacity>
                <TouchableOpacity onPress={() => { update(route.params.memoId, title, content, cont, navi) }} style={[styles.icon, { marginVertical: 0, marginHorizontal: '5%' }]}>
                    <Icon name='content-save-outline' size={30} color='#5E5E64' /></TouchableOpacity>
            </View>
        </View>
        <View style={{ padding: 20 }}>
            <TextInput style={styles.title} placeholder='제목' placeholderTextColor='grey' value={title} onChangeText={setTitle} />
            <TextInput style={styles.content} placeholder='내용' placeholderTextColor='grey' multiline={true} value={content} onChangeText={setContent} />
        </View>
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                // Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={{ height: 200 }}>
                        <LottieView
                            source={require("../../images/delete.json")}
                            loop
                            autoPlay /></View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                        <TouchableOpacity onPress={() => { setModalVisible(!modalVisible) }} activeOpacity={0}>
                            <Text style={{ color: 'black', fontFamily: 'GodoM', marginTop: 30, textAlignVertical: 'center' }}>취소</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { remove(route.params.memoId, cont, navi); setModalVisible(!modalVisible) }} activeOpacity={0}>
                            <Text style={styles.button}>삭제</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    </ImageBackground>
}

function remove(memoId, cont, navi) {
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
    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        elevation: 5
    },
    button: {
        borderRadius: 10,
        paddingVertical: 10, paddingHorizontal: 15,
        elevation: 2,
        backgroundColor: "#e3342f",
        color: "white",
        textAlign: "center",
        fontFamily: 'GodoM', alignSelf: 'center',
        marginTop: 30, fontSize: 14
    },
})