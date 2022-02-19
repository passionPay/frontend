import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useMemo } from 'react'
import { useState } from 'react'
import { ImageBackground, Modal, ScrollView, StyleSheet, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import DropDownPicker from 'react-native-dropdown-picker';
import { Stopwatch } from 'react-native-stopwatch-timer';
import LottieView from 'lottie-react-native'
import axios from 'axios'
import { Text } from '../../component/Text'
import Header from './header/Header'
import Top from './top/Top'
import Body from './body/Body'
import { PlannerProvider } from './PlannerProvider'
import StartingModal from './modals/StartingModal'
import StoppingModal from './modals/StoppingModal'


export default function PlannerMain() {
    const [data, setData] = useState(initState)
    const [modalVisible, setModalVisible] = useState(false)
    return <PlannerProvider>
        <ScrollView style={{backgroundColor: '#fff'}}>
            <Top data={data} />
            <Header data={data} />
            <Body data={data} />
            <View style={{ height: 100 }} />
        </ScrollView>
        <StartingModal />
        <StoppingModal />
    </PlannerProvider>
}

const subjectList = [{ label: '화법과 작문', value: '화법과 작문' }, { label: '독서', value: '독서' }, { label: '언어와 매체 ', value: '언어와 매체 ' }, { label: '문학', value: '문학' }, { label: '수학I', value: '수학I' }, { label: '수학II', value: '수학II' }, { label: '미적분', value: '미적분' }, { label: '확률과 통계', value: '확률과 통계' }, { label: '영어회화', value: '영어회화' }, { label: '영어I', value: '영어I' }, { label: '영어 독해와 작문', value: '영어 독해와 작문' }, { label: '영어II', value: '영어II' }, { label: '한국사', value: '한국사' }, { label: '한국지리', value: '한국지리' }, { label: '세계지리', value: '세계지리' }, { label: '세계사', value: '세계사' }, { label: '동아시아사', value: '동아시아사' }, { label: '경제', value: '경제' }, { label: '정치와 법', value: '정치와 법' }, { label: '사회 문화', value: '사회 문화' }, { label: '생활과 윤리', value: '생활과 윤리' }, { label: '윤리와 사상', value: '윤리와 사상' }, { label: '물리학I', value: '물리학I' }, { label: '화학I', value: '화학I' }, { label: '생명과학I', value: '생명과학I' }, { label: '지구과학I', value: '지구과학I' }, { label: '물리학Ⅱ', value: '물리학Ⅱ' }, { label: '화학Ⅱ', value: '화학Ⅱ' }, { label: '생명과학', value: '생명과학' }, { label: '지구과학', value: '지구과학' }]

export type PlannerDataType = {
    date: string,
    dDay: number,
    fireCount: number,
    targetTime: number,
    totalTime: number,
    timeRate: number,
    taskRate: number,
    comment: string,
    tasks: TasksType,
    timeBlock: any[],
    evaluation: string
}

export type TasksType = {
    subject: string,
    tasks: {
        title: string;
        status: number;
        totalTime: number;
        taskId: number;
    }[]
}[]

const initState: PlannerDataType = {
    date: '2022-02-16',
    dDay: 90,
    fireCount: 10,
    targetTime: 987654321,
    totalTime: 123456789,
    timeRate: 60,
    taskRate: 70,
    comment: '졸지 말고 열심히!',
    tasks: [
        {
            subject: '화법과 작문',
            tasks: [
                {
                    title: '윤혜정 선생님 나비효과 6강 복습하기',
                    status: 0,
                    totalTime: 0,
                    taskId: 1
                },
                {
                    title: '나비효과 6강',
                    status: 1,
                    totalTime: 9876,
                    taskId: 2
                }
            ],
        },
        {
            subject: '기하와 벡터',
            tasks: [
                {
                    title: '수학의 정석 1강',
                    status: 2,
                    totalTime: 9876543,
                    taskId: 3
                },
                {
                    title: '수학의 정석 2강',
                    status: 3,
                    totalTime: 1234567,
                    taskId: 3
                }
            ]
        },
    ],
    timeBlock: [],
    evaluation: '총평'
}

const styles = StyleSheet.create({
})