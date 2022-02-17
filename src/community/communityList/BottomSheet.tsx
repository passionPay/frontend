import React from 'react'
import { Animated, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../planner/Animations'

export const bottomSheetAnimVal = new Animated.Value(0)

export default function BottomSheet({setFilter}) {
    return <Animated.View style={[styles.container, {
        transform: [
            {
                translateY: bottomSheetAnimVal.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -SCREEN_HEIGHT / 2]
                })
            }
        ]
    }]}
    >
        <Text style={styles.title}>과목 선택</Text>
        <ScrollView>
            {subjectList.map((v, i) => <TouchableOpacity key={i} style={styles.button}
                onPress={() => {
                    Animated.timing(bottomSheetAnimVal, {
                        toValue: 0, useNativeDriver: true, duration: 200
                    }).start()
                    setFilter(v.value)
                }}>
                <Text style={styles.subjectText}>{v.value}</Text>
            </TouchableOpacity>)}
        </ScrollView>
    </Animated.View>
}

const sheetHeight = SCREEN_HEIGHT / 2

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F5F5',
        height: sheetHeight,
        width: SCREEN_WIDTH,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        position: 'absolute',
        top: SCREEN_HEIGHT,
        left: 0,
        right: 0,
        paddingTop: 40,
        paddingHorizontal: 40,
    },
    title: {
        fontFamily: 'GodoM',
        fontSize: 15,
        color: '#000',
        marginBottom: 40
    },
    subjectText: {
        fontFamily: 'GodoM',
        fontSize: 14,
        color: '#000'
    },
    button: {
        borderRadius: 10,
        backgroundColor: '#fff',
        padding: 10,
        marginBottom: 10
    }
})

const subjectList = [{ label: '화법과 작문', value: '화법과 작문' }, { label: '독서', value: '독서' }, { label: '언어와 매체 ', value: '언어와 매체 ' }, { label: '문학', value: '문학' }, { label: '수학I', value: '수학I' }, { label: '수학II', value: '수학II' }, { label: '미적분', value: '미적분' }, { label: '확률과 통계', value: '확률과 통계' }, { label: '영어회화', value: '영어회화' }, { label: '영어I', value: '영어I' }, { label: '영어 독해와 작문', value: '영어 독해와 작문' }, { label: '영어II', value: '영어II' }, { label: '한국사', value: '한국사' }, { label: '한국지리', value: '한국지리' }, { label: '세계지리', value: '세계지리' }, { label: '세계사', value: '세계사' }, { label: '동아시아사', value: '동아시아사' }, { label: '경제', value: '경제' }, { label: '정치와 법', value: '정치와 법' }, { label: '사회 문화', value: '사회 문화' }, { label: '생활과 윤리', value: '생활과 윤리' }, { label: '윤리와 사상', value: '윤리와 사상' }, { label: '물리학I', value: '물리학I' }, { label: '화학I', value: '화학I' }, { label: '생명과학I', value: '생명과학I' }, { label: '지구과학I', value: '지구과학I' }, { label: '물리학Ⅱ', value: '물리학Ⅱ' }, { label: '화학Ⅱ', value: '화학Ⅱ' }, { label: '생명과학', value: '생명과학' }, { label: '지구과학', value: '지구과학' }]