import axios from 'axios'
import React from 'react'
import { ToastAndroid } from 'react-native'
import { serverIPaddress } from '../Util'

export function getTimeBlock(token, dayId, setTimeBlock) {
    axios({
        url: serverIPaddress + '/time/' + dayId,
        method: 'get',
        headers: {
            'Authorization': 'Bearer ' + token
        },
    }).then(function (res) {
        setTimeBlock(res.data.TimeBlock)
    }).catch(function (error) {
        console.log(error)
        ToastAndroid.show('저장 실패', ToastAndroid.SHORT)
    })
}


export function setServerTimeBlock(token, dayId, hour, min, setTimeBlock) {
    console.log("setServerTimeBlock: " + hour, min)
    axios({
        url: serverIPaddress + '/time/' + dayId,
        method: 'post',
        headers: {
            'Authorization': 'Bearer ' + token
        },
        data: {
            hour: hour, minute: min, color: '#A5AED5'
        }
    }).then(function (res) {
        setTimeBlock(res.data.TimeBlock)
    }).catch(function (error) {
        console.log(error)
        ToastAndroid.show('저장 실패', ToastAndroid.SHORT)
    })
}

export function updateStartTime(dayId, token, totalTime) {
    axios({
        url: serverIPaddress + '/day/total/' + dayId,
        method: 'post',
        headers: {
            'Authorization': 'Bearer ' + token
        },
        data: {
            totalTime: totalTime
        }
    }).then(function (res) {
        // 할 일 없음
    }).catch(function (error) {
        console.log(error)
        ToastAndroid.show('저장 실패', ToastAndroid.SHORT)
    })
}

export function getTimerInit(dayId, token) {
    axios({
        url: serverIPaddress + '/day/total/' + dayId,
        method: 'get',
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }).then(function (res) {
        console.log(res.data)
        return res.data
    }).catch(function (error) {
        console.log(error)
        ToastAndroid.show('저장 실패', ToastAndroid.SHORT)
    })
}

export function addTask(dayId, subject, title, token) {
    console.log('요청 왜 안가?')
    axios({
        url: serverIPaddress + '/task/title/' + dayId,
        method: 'post',
        headers: {
            'Authorization': 'Bearer ' + token
        },
        data: {
            subject: subject, title: title
        }
    }).then(function (res) {
        console.log(res.data)
    }).catch(function (error) {
        console.log(error)
        ToastAndroid.show('추가 실패', ToastAndroid.SHORT)
    })
    
}

export function setTaskComplete(task, token, dayId) {
    axios({
        url: serverIPaddress + '/task/finish/' + dayId,
        method: 'post',
        headers: {
            'Authorization': 'Bearer ' + token
        },
        data: {
            titleIndex: task.titleIndex,
            subject: task.subject
        }
    }).then(function (res) {
        //
    }).catch(function (error) {
        console.log(error)
        ToastAndroid.show('추가 실패', ToastAndroid.SHORT)
    })
}

export function removePlanner(dayId, token, navi) {
    axios({
        url: serverIPaddress + '/planner/' + dayId,
        method: 'delete',
        headers: {
            'Authorization': 'Bearer ' + token
        },
    }).then(function (res) {
        //
        navi.goBack()
    }).catch(function (error) {
        console.log(error)
        ToastAndroid.show('추가 실패', ToastAndroid.SHORT)
    })
}