import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { useState } from 'react'
import { ImageBackground, Modal, ScrollView, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import DropDownPicker from 'react-native-dropdown-picker'
import axios from 'axios'
import { serverIPaddress } from '../Util'
import { useContextOfAll } from '../Provider'

export default function Add() {
    const [date, setDate] = useState('')
    const [comment, setComment] = useState('')
    const [targetTimeH, setTargetTimeH] = useState('')
    const [targetTimeM, setTargetTimeM] = useState('')
    const [tasks, setTasks] = useState<{
        subject: string;
        titles: string[];
    }[]>([])

    const [modalVisible, setModalVisible] = useState(false);
    const navi = useNavigation<any>()

    const [textToAdd, setTextToAdd] = useState('')
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);

    // let tmp = ''
    // for (let i = 0; i < subjectList.length; ++i) {
    //     tmp += '{ label: \''+ subjectList[i] + '\', value: \''+ subjectList[i] + '\' },'
    // }
    // console.log(tmp)

    const cont = useContextOfAll()

    const save = () => {
        if (date == '' || comment == '' || targetTimeH == '' || targetTimeM == '') {
            ToastAndroid.show('날짜, playlist, 목표 시간을 모두 채워주세요', ToastAndroid.SHORT)
            return
        }
        axios({
            url: serverIPaddress + '/planner',
            method: 'post',
            headers: {
                'Authorization': 'Bearer ' + cont.user.token
            },
            data: {
                date: date, comment: comment,
                targetTimeH: targetTimeH, targetTimeM: targetTimeM,
                tasks: tasks
            }
        }).then(function (res) {
            console.log(res.data)
            navi.goBack()
        }).catch(function (error) {
            console.log(error)
            ToastAndroid.show('저장 실패', ToastAndroid.SHORT)
        })
    }

    const addTask = () => {
        setTasks((prev) => {
            const ret = [...prev]
            for (let i = 0; i < prev.length; ++i) {
                if (prev[i].subject == value) {
                    ret[i].titles.push(textToAdd)
                    return ret
                }
            }
            ret.push({ subject: '' + value, titles: [textToAdd] })
            return ret
        })
    }

    return <ImageBackground source={require('../../images/plannerBack.png')} style={{ flex: 1 }} imageStyle={{ opacity: 0.7 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: '5%', paddingBottom: 3 }}>
            <TouchableOpacity onPress={() => { navi.goBack() }} style={styles.icon}>
                <Icon name='chevron-left' size={30} color='#5E5E64' /></TouchableOpacity>
            <TouchableOpacity onPress={() => { save() }} style={styles.icon}>
                <Icon name='plus' size={30} color='#5E5E64' /></TouchableOpacity>
        </View>
        <ScrollView>
            <View style={styles.view}>
                <TextInput style={styles.date} placeholder='00.00.00 O요일' placeholderTextColor='#65666D44' value={date} onChangeText={setDate} />
                <View style={styles.playlist}>
                    <Icon name='playlist-music' size={23} color='#65666D' />
                    <TextInput style={styles.playlistText} placeholder='playlist' placeholderTextColor='#65666D44' value={comment} onChangeText={setComment} /></View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderColor: '#B7B7B7' }}>
                    <Text style={[styles.tasks, { flex: 1 }]}>TASKS</Text>
                    <Text style={[styles.tasks, { flex: 1, textAlign: 'right' }]}>{'목표 시간'}</Text>
                    <TextInput style={styles.targetTime}
                        placeholder='0' placeholderTextColor='#65666D44' value={targetTimeH} onChangeText={setTargetTimeH} keyboardType='decimal-pad' />
                    <Text style={styles.targetTime}>H</Text>
                    <TextInput style={styles.targetTime}
                        placeholder='0' placeholderTextColor='#65666D44' value={targetTimeM} onChangeText={setTargetTimeM} keyboardType='decimal-pad' />
                    <Text style={[styles.targetTime, {marginRight: 10}]}>MIN</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderColor: '#B7B7B7' }}>
                    <View style={{ flex: 3 }}>
                        {tasks.map((v, i) => <View style={{ flexDirection: 'row', borderBottomWidth: 1, alignItems: 'center', borderColor: '#DDDDDD', }} key={i}>
                            <Text style={styles.subject}>{v.subject}</Text>
                            <View style={{ flex: 6 }}>
                                {v.titles.map((taskName, i) => <View style={{
                                    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 5, paddingLeft: 7,
                                    borderBottomWidth: i == v.titles.length - 1 ? 0 : 1,
                                    borderColor: '#DDDDDD', marginRight: 7
                                }}>
                                    <Text style={styles.taskDetail}>{taskName}</Text>
                                </View>)}
                            </View>
                        </View>)}
                        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={{ color: '#65666D', fontSize: 13, fontFamily: 'GodoM', alignSelf: 'center', marginVertical: 10 }}>
                                + 추가하기</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>

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
                    <Text style={styles.modalText}>과목</Text>
                    <DropDownPicker
                        textStyle={{ fontFamily: 'GodoM' }}
                        autoScroll={true}
                        open={open}
                        setOpen={setOpen}
                        multiple={false}
                        value={value}
                        setValue={setValue}
                        items={subjectList}
                        containerStyle={{
                            paddingBottom: 0, minHeight: 500,
                            marginBottom: -428,
                        }}
                    />
                    <Text style={styles.modalText}>목표</Text>
                    <TextInput placeholder='목표를 입력해주세요' placeholderTextColor='#65666Daa' multiline={true}
                        value={textToAdd} onChangeText={setTextToAdd}
                        style={{
                            backgroundColor: '#eeeeee', paddingVertical: 10, borderRadius: 10,
                            paddingHorizontal: 10, fontFamily: 'GodoM', color: 'black'
                        }} />

                    <TouchableOpacity onPress={() => { addTask(); setTextToAdd(''); setValue(null); setModalVisible(!modalVisible) }} activeOpacity={0}>
                        <Text style={styles.button}>추가하기</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    </ImageBackground>
}

export const subjectList = [{ label: '화법과 작문', value: '화법과 작문' }, { label: '독서', value: '독서' }, { label: '언어와 매체 ', value: '언어와 매체 ' }, { label: '문학', value: '문학' }, { label: '수학I', value: '수학I' }, { label: '수학II', value: '수학II' }, { label: '미적분', value: '미적분' }, { label: '확률과 통계', value: '확률과 통계' }, { label: '영어회화', value: '영어회화' }, { label: '영어I', value: '영어I' }, { label: '영어 독해와 작문', value: '영어 독해와 작문' }, { label: '영어II', value: '영어II' }, { label: '한국사', value: '한국사' }, { label: '한국지리', value: '한국지리' }, { label: '세계지리', value: '세계지리' }, { label: '세계사', value: '세계사' }, { label: '동아시아사', value: '동아시아사' }, { label: '경제', value: '경제' }, { label: '정치와 법', value: '정치와 법' }, { label: '사회 문화', value: '사회 문화' }, { label: '생활과 윤리', value: '생활과 윤리' }, { label: '윤리와 사상', value: '윤리와 사상' }, { label: '물리학I', value: '물리학I' }, { label: '화학I', value: '화학I' }, { label: '생명과학I', value: '생명과학I' }, { label: '지구과학I', value: '지구과학I' }, { label: '물리학Ⅱ', value: '물리학Ⅱ' }, { label: '화학Ⅱ', value: '화학Ⅱ' }, { label: '생명과학', value: '생명과학' }, { label: '지구과학', value: '지구과학' }]

const styles = StyleSheet.create({
    view: {
        marginHorizontal: 10, paddingBottom: 20
    },
    icon: {
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 0, borderColor: '#DFE3EA', elevation: 5,
        overflow: 'hidden',
    },
    date: {
        fontSize: 24, color: '#65666D',
        padding: 10, borderBottomWidth: 1, borderColor: '#B7B7B7',
        fontFamily: 'GodoM'
    },
    playlist: {
        padding: 6, borderBottomWidth: 1,
        alignItems: 'center', textAlignVertical: 'center',
        flexDirection: 'row', borderColor: '#B7B7B7'
    },
    playlistText: {
        fontSize: 15, color: '#65666D', paddingHorizontal: 10, fontWeight: 'bold', fontFamily: 'GodoM',
        paddingVertical: 0, flex: 1
    },
    tasks: {
        fontSize: 11, color: '#65666D',
        paddingVertical: 3, paddingHorizontal: 10,
        fontWeight: 'bold', textAlignVertical: 'center',
        fontFamily: 'GodoM'
    },
    taskDetail: {
        fontsize: 11, color: '#65666D',
        flex: 5, fontFamily: 'GodoM'
    },
    subject: {
        flex: 1, borderRightWidth: 1, paddingHorizontal: 10,
        textAlignVertical: 'center', textAlign: 'center', borderColor: '#DDDDDD',
        fontFamily: 'GodoM', color: '#65666D'
    },
    currentTime: {
        fontSize: 18, color: '#65666D', fontFamily: 'GodoM',
        textAlign: 'center', fontWeight: 'bold'
    },
    rateBack: {
        height: 25, width: '80%', backgroundColor: '#D3F3F3', marginHorizontal: '5%',
        borderRadius: 5
    },
    rate: {
        backgroundColor: '#89DBDC',
        borderRadius: 5, height: '100%'
    },
    targetTime: {
        fontSize: 14, color: '#65666D', fontFamily: 'GodoM',
        paddingVertical: 0, textAlignVertical: 'center',//, marginHorizontal: 5
        textAlign: 'right'

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
        padding: 10,
        elevation: 2,
        backgroundColor: "#2196F3",
        color: "white",
        textAlign: "center",
        fontFamily: 'GodoM', alignSelf: 'center',
        marginTop: 30
    },
    modalText: {
        padding: 10, color: 'black',
        fontFamily: 'GodoM'
    }
})

const getTask = () => {
    return [
        {
            subject: '국어',
            titles: ['윤혜정T 나비효과 입문편 5강', '씨리얼 문학 현대시 6일차']
        }
    ]
}

const getTimeBlock = () => {
    let ret = [{
        hour: "6",
        minutes: [
            {
                minute: "0",
                color: "#A5AED500"
            },
            {
                minute: "10",
                color: "#A5AED500"
            },
            {
                minute: "20",
                color: "#A5AED500"
            },
            {
                minute: "30",
                color: "#A5AED500"
            },
            {
                minute: "40",
                color: "#A5AED500"
            },
            {
                minute: "50",
                color: "#A5AED500"
            }
        ]
    },]
    for (let i = 7; i < 30; ++i) {
        ret.push({
            hour: (i % 24).toString(),
            minutes: [
                {
                    minute: "0",
                    color: "#A5AED500"
                },
                {
                    minute: "10",
                    color: "#A5AED500"
                },
                {
                    minute: "20",
                    color: "#A5AED500"
                },
                {
                    minute: "30",
                    color: "#A5AED500"
                },
                {
                    minute: "40",
                    color: "#A5AED500"
                },
                {
                    minute: "50",
                    color: "#A5AED500"
                }
            ]
        })
    }
    return ret
}