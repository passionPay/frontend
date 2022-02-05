import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useMemo } from 'react'
import { useState } from 'react'
import { ImageBackground, Modal, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import DropDownPicker from 'react-native-dropdown-picker';
import { Stopwatch } from 'react-native-stopwatch-timer';
import LottieView from 'lottie-react-native'
import axios from 'axios'
import { serverIPaddress } from '../Util'
import { useContextOfAll } from '../Provider'
import { addTask, getTimeBlock, getTimerInit, removePlanner, setServerTimeBlock, setTaskComplete, updateStartTime } from './usingAxios'
import { getTimeBlockInit } from './someUtils'

export default function Edit({ route }) {
    const [date, setDate] = useState('')
    const [comment, setComment] = useState('')
    const [targetTimeH, setTargetTimeH] = useState('')
    const [targetTimeM, setTargetTimeM] = useState('')
    const [tasks, setTasks] = useState(getTask())
    const [rate, setRate] = useState('0')

    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [modalVisible_delete, setModalVisible_delete] = useState(false);
    const navi = useNavigation<any>()
    const cont = useContextOfAll()
    const [timeblockInit, setTimeBlockInit] = useState(getTimeBlockInit())


    const [textToAdd, setTextToAdd] = useState('')
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);

    const [start, setStart] = useState(false);
    const [reset, setReset] = useState(false);
    const [timerStartTimeInit, setTimerStartInit] = useState(0) // 초기 시간 받아오기
    let timerTotalTime = 3782, timeblock = useMemo(() => getTimeBlockInit(), []);

    const toggleStopwatch = () => {
        setStart(!start);
        setReset(false);
        // if (start) {
        //     // 시간 업데이트
        //     updateStartTime(route.params.id, cont.user.token, timerTotalTime)
        // }
    }

    useEffect(() => {
        axios({
            url: serverIPaddress + '/planner/' + route.params.id,
            method: 'get',
            headers: {
                'Authorization': 'Bearer ' + cont.user.token
            }
        }).then(function (res) {
            // console.log(res.data.tasks)
            setDate(res.data.date)
            setComment(res.data.comment)
            setTargetTimeH(res.data.targetTimeH)
            setTargetTimeM(res.data.targetTimeM)
            setTasks(res.data.tasks)
            // setTimerStartInit(res.data.totalTime)
            setRate(res.data.taskRate)
        }).catch(function (error) {
            console.log(error)
        })
        getTimeBlock(cont.user.token, route.params.id, setTimeBlockInit)
    }, [])

    useEffect(() => {
        axios({
            url: serverIPaddress + '/planner/' + route.params.id,
            method: 'get',
            headers: {
                'Authorization': 'Bearer ' + cont.user.token
            }
        }).then(function (res) {
            setTasks(res.data.tasks)
            setRate(res.data.taskRate)
        }).catch(function (error) {
            console.log(error)
        })
        getTimeBlock(cont.user.token, route.params.id, setTimeBlockInit)
    }, [modalVisible])

    useEffect(() => {
        axios({
            url: serverIPaddress + '/planner/' + route.params.id,
            method: 'get',
            headers: {
                'Authorization': 'Bearer ' + cont.user.token
            }
        }).then(function (res) {
            setTasks(res.data.tasks)
            setRate(res.data.taskRate)
        }).catch(function (error) {
            console.log(error)
        })
        getTimeBlock(cont.user.token, route.params.id, setTimeBlockInit)
    }, [modalVisible2])

    let currentSuccessTask = useMemo(() => { return { subject: '과목명', titleIndex: 0 } }, [])

    return <ImageBackground source={require('../../images/plannerBack.png')} style={{ flex: 1 }} imageStyle={{ opacity: 0.7 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: '5%', paddingBottom: 3 }}>
            <TouchableOpacity onPress={() => { navi.goBack() }} style={styles.icon}>
                <Icon name='chevron-left' size={30} color='#5E5E64' /></TouchableOpacity>
            <TouchableHighlight onPress={toggleStopwatch}>
                <Icon name={start ? 'pause-circle-outline' : 'play-circle-outline'} size={40} color='black' />
            </TouchableHighlight>
        </View>
        <ScrollView>
            <View style={styles.view}>
                <Text style={styles.date}>{date}</Text>
                <View style={styles.playlist}>
                    <Icon name='playlist-music' size={23} color='#65666D' />
                    <TextInput style={styles.playlistText} placeholder='playlist' placeholderTextColor='#65666D44' value={comment} onChangeText={setComment} /></View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderColor: '#B7B7B7' }}>
                    <Text style={[styles.tasks, { flex: 1 }]}>TASKS</Text>
                    <Text style={[styles.tasks, { flex: 1, textAlign: 'right' }]}>{'목표 시간'}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <Text style={{
                            fontSize: 14, color: '#65666D', fontFamily: 'GodoM',
                            paddingVertical: 3, textAlignVertical: 'center', marginLeft: 5
                        }}>{targetTimeH}H {targetTimeM}MIN  </Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderColor: '#B7B7B7' }}>
                    <View style={{ flex: 3 }}>
                        {tasks.map((v, i) => <View style={{ flexDirection: 'row', borderBottomWidth: 1, alignItems: 'center', borderColor: '#DDDDDD', }} key={i}>
                            <Text style={styles.subject}>{v.subject}</Text>
                            <View style={{ flex: 6 }}>
                                {v.titles.map((taskNameObj, i) => <View style={{
                                    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 5, paddingLeft: 7,
                                    borderBottomWidth: i == v.titles.length - 1 ? 0 : 1,
                                    borderColor: '#DDDDDD', marginRight: 7
                                }}>
                                    <Text style={styles.taskDetail}>{taskNameObj.title}</Text>
                                    <TouchableOpacity style={{ flex: 1 }} onPress={() => {
                                        console.log('prev ' + currentSuccessTask.subject)
                                        currentSuccessTask['subject'] = v.subject
                                        currentSuccessTask['titleIndex'] = i
                                        // currentSuccessTask = { subject: v.subject, titleIndex: i };

                                        console.log('after ' + currentSuccessTask.subject)
                                        setModalVisible2(!modalVisible2)
                                    }}>
                                        <View style={{
                                            width: 15, height: 15, borderColor: '#AAAAAA', borderWidth: 1, marginLeft: 5,
                                            backgroundColor: taskNameObj.isFinished ? '#A5AED5' : '#0000'
                                        }} />
                                    </TouchableOpacity>
                                </View>)}
                            </View>
                        </View>)}
                        <TouchableOpacity onPress={() => { setModalVisible(!modalVisible) }}>
                            <Text style={{ color: '#65666D', fontSize: 13, fontFamily: 'GodoM', alignSelf: 'center', marginVertical: 10 }}>
                                + 추가하기</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 2, marginVertical: '1%' }}>
                        {timeblockInit.map((vRow, i) => <View key={vRow.hour} style={{
                            flexDirection: 'row',
                            borderTopWidth: i == 0 ? 0 : 1, borderColor: '#DDDDDD'
                        }}>
                            <Text style={{
                                flex: 1, textAlign: 'center', fontSize: 11, paddingVertical: '1%',
                                borderRightWidth: 1, borderColor: '#DDDDDD', color: '#999999'
                            }}>{vRow.hour}</Text>
                            {vRow.minutes.map((v, i) => <View style={{ flex: 1, paddingVertical: '1%' }} key={vRow.hour + v.minute}>
                                <View style={{ backgroundColor: v.color, flex: 1 }} />
                            </View>)}
                        </View>)}</View>
                </View>
                <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderColor: '#B7B7B7', alignItems: 'center' }}>
                    <View style={{ flex: 6, flexDirection: 'row', alignItems: 'center', paddingVertical: 15 }}>
                        <View style={styles.rateBack}><View style={[styles.rate, { width: rate + '%' }]} /></View>
                        <Text style={{ color: '#A5AED5', fontFamily: 'GodoM' }}>{rate}%</Text>
                    </View>
                    <View style={{ flex: 4 }}>
                        {timerStartTimeInit == -1 ? <View /> :
                            <Stopwatch laps start={start}
                                reset={reset}
                                options={options}
                                getMsecs={(time) => {
                                    if (timerStartTimeInit != time) {
                                        const h = (new Date()).getHours(), m = (new Date()).getMinutes()
                                        if (timeblock[(h + 18) % 24].minutes[Math.floor(m / 10)].color != '#A5AED5')
                                            setServerTimeBlock(cont.user.token, route.params.id, h, Number(Math.floor(m / 10) + '0').toString(), setTimeBlockInit)
                                        timeblock[(h + 18) % 24].minutes[Math.floor(m / 10)].color = '#A5AED5'
                                    }
                                    timerTotalTime = time;
                                }}
                                startTime={timerStartTimeInit} />}
                    </View>
                </View>
                <TouchableOpacity onPress={() => {setModalVisible_delete(!modalVisible_delete)}}>
                    <Icon name='delete-outline' size={35} color='tomato' style={{ alignSelf: 'center', marginVertical: '15%' }} />
                </TouchableOpacity>
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

                    <TouchableOpacity onPress={() => {
                        addTask(route.params.id, value, textToAdd, cont.user.token);
                        setValue(null); setModalVisible(!modalVisible)
                    }} activeOpacity={0}>
                        <Text style={styles.button}>추가하기</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible2}
            onRequestClose={() => {
                // Alert.alert("Modal has been closed.");
                setModalVisible2(!modalVisible2);
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={{ height: 200 }}>
                        <LottieView
                            source={require("../../images/sucess.json")}
                            loop
                            autoPlay /></View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                        <TouchableOpacity onPress={() => { setModalVisible2(!modalVisible2) }} activeOpacity={0}>
                            <Text style={{ color: 'black', fontFamily: 'GodoM', marginTop: 30, textAlignVertical: 'center' }}>취소</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            console.log('Modal2 ' + currentSuccessTask.subject)
                            setTaskComplete(currentSuccessTask, cont.user.token, route.params.id);
                            setModalVisible2(!modalVisible2)
                        }} activeOpacity={0}>
                            <Text style={styles.button}>완료</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>


        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible_delete}
            onRequestClose={() => {
                // Alert.alert("Modal has been closed.");
                setModalVisible_delete(!modalVisible_delete);
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={{ height: 100 }}>
                        <LottieView
                            source={require("../../images/delete.json")}
                            loop
                            autoPlay /></View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                        <TouchableOpacity onPress={() => { setModalVisible_delete(!modalVisible_delete) }} activeOpacity={0}>
                            <Text style={{ color: 'black', fontFamily: 'GodoM', marginTop: 30, textAlignVertical: 'center' }}>취소</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { removePlanner(route.params.id, cont, navi); setModalVisible_delete(!modalVisible_delete) }} activeOpacity={0}>
                            <Text style={styles.button}>삭제</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    </ImageBackground>
}

const options = {
    container: {
        backgroundColor: '#0000',
        borderRadius: 5,
        justifyContent: "center",
        padding: 5, marginHorizontal: '5%',
        alignSelf: 'flex-end'
    },
    text: {
        fontSize: 20,
        fontFamily: 'GodoM', color: '#65666D'
    }
};

const subjectList = [{ label: '화법과 작문', value: '화법과 작문' }, { label: '독서', value: '독서' }, { label: '언어와 매체 ', value: '언어와 매체 ' }, { label: '문학', value: '문학' }, { label: '수학I', value: '수학I' }, { label: '수학II', value: '수학II' }, { label: '미적분', value: '미적분' }, { label: '확률과 통계', value: '확률과 통계' }, { label: '영어회화', value: '영어회화' }, { label: '영어I', value: '영어I' }, { label: '영어 독해와 작문', value: '영어 독해와 작문' }, { label: '영어II', value: '영어II' }, { label: '한국사', value: '한국사' }, { label: '한국지리', value: '한국지리' }, { label: '세계지리', value: '세계지리' }, { label: '세계사', value: '세계사' }, { label: '동아시아사', value: '동아시아사' }, { label: '경제', value: '경제' }, { label: '정치와 법', value: '정치와 법' }, { label: '사회 문화', value: '사회 문화' }, { label: '생활과 윤리', value: '생활과 윤리' }, { label: '윤리와 사상', value: '윤리와 사상' }, { label: '물리학I', value: '물리학I' }, { label: '화학I', value: '화학I' }, { label: '생명과학I', value: '생명과학I' }, { label: '지구과학I', value: '지구과학I' }, { label: '물리학Ⅱ', value: '물리학Ⅱ' }, { label: '화학Ⅱ', value: '화학Ⅱ' }, { label: '생명과학', value: '생명과학' }, { label: '지구과학', value: '지구과학' }]

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
        borderBottomWidth: 1, fontFamily: 'GodoM', color: '#65666D'
    },
    currentTime: {
        fontSize: 18, color: '#65666D', fontFamily: 'GodoM',
        textAlign: 'center', fontWeight: 'bold'
    },
    rateBack: {
        height: 25, width: '80%', backgroundColor: '#A5AED533', marginHorizontal: '5%',
        borderRadius: 5
    },
    rate: {
        backgroundColor: '#A5AED5',
        borderRadius: 5, height: '100%'
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
        backgroundColor: "#A5AED5",
        color: "white",
        textAlign: "center",
        fontFamily: 'GodoM', alignSelf: 'center',
        marginTop: 30, fontSize: 14
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
            titles: [{ title: '윤혜정T 나비효과 입문편 5강', isFinished: false, id: 0 }, { title: '씨리얼 문학 현대시 6일차', isFinished: false, id: 1 }]
        }
    ]
}