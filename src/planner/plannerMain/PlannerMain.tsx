import React, { useEffect } from 'react'
import { ScrollView, View } from 'react-native'
import axios from 'axios'
import Header from './header/Header'
import Top from './top/Top'
import Body from './body/Body'
import StartingModal from './modals/StartingModal'
import StoppingModal from './modals/StoppingModal'
import TaskAddModal from './modals/TaskAddModal'
import Bottom from './bottom/Bottom'
import { initPlannerState, PlannerDataType, useContextOfPlanner } from '../PlannerProvider'
import AsyncStorage from '@react-native-async-storage/async-storage'
import TaskEditModal from './modals/TaskEditModal'


export default function PlannerMain() {
    const cont = useContextOfPlanner()
    useEffect(() => {
        AsyncStorage.getItem('Planner' + new Date().toISOString().slice(0, 10))
            .then(todayPlannerData => {
                if (todayPlannerData !== null)
                    cont.setData(JSON.parse(todayPlannerData))
                else {
                    AsyncStorage.setItem('Planner' + new Date().toISOString().slice(0, 10),
                        JSON.stringify(initPlannerState))
                    cont.setData(initPlannerState)
                }
            })
        // AsyncStorage.getItem('PlannerDday')
        //     .then(dDay => {
        //         if (dDay !== null) {
        //             const diff = new Date(dDay).getTime() - new Date().getTime()
        //             ret.dDay = diff / (1000 * 3600 * 24)
        //         }
        //     })
    }, [])
    return <ScrollView style={{ backgroundColor: '#fff' }}>
        <Top />
        <Header />
        <Body />
        <Bottom />
        <StartingModal />
        <StoppingModal />
        <TaskAddModal />
        <TaskEditModal />
    </ScrollView>
}

const subjectList = [{ label: '화법과 작문', value: '화법과 작문' }, { label: '독서', value: '독서' }, { label: '언어와 매체 ', value: '언어와 매체 ' }, { label: '문학', value: '문학' }, { label: '수학I', value: '수학I' }, { label: '수학II', value: '수학II' }, { label: '미적분', value: '미적분' }, { label: '확률과 통계', value: '확률과 통계' }, { label: '영어회화', value: '영어회화' }, { label: '영어I', value: '영어I' }, { label: '영어 독해와 작문', value: '영어 독해와 작문' }, { label: '영어II', value: '영어II' }, { label: '한국사', value: '한국사' }, { label: '한국지리', value: '한국지리' }, { label: '세계지리', value: '세계지리' }, { label: '세계사', value: '세계사' }, { label: '동아시아사', value: '동아시아사' }, { label: '경제', value: '경제' }, { label: '정치와 법', value: '정치와 법' }, { label: '사회 문화', value: '사회 문화' }, { label: '생활과 윤리', value: '생활과 윤리' }, { label: '윤리와 사상', value: '윤리와 사상' }, { label: '물리학I', value: '물리학I' }, { label: '화학I', value: '화학I' }, { label: '생명과학I', value: '생명과학I' }, { label: '지구과학I', value: '지구과학I' }, { label: '물리학Ⅱ', value: '물리학Ⅱ' }, { label: '화학Ⅱ', value: '화학Ⅱ' }, { label: '생명과학', value: '생명과학' }, { label: '지구과학', value: '지구과학' }]
