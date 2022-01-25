import axios from 'axios'
import React from 'react'
import { serverIPaddress } from '../Util'

function getTimeBlock(token) {
    axios({
        url: serverIPaddress + '/memo',
        method: 'post',
        headers: {
            'Authorization': 'Bearer ' + token
        },
    }).then(function (res) {
        console.log(res.data)
        navi.goBack()
    }).catch(function (error) {
        console.log(error)
        ToastAndroid.show('저장 실패', ToastAndroid.SHORT)
    })
}