import { useNavigation } from '@react-navigation/native'
import React, { createRef, useEffect, useState } from 'react'
import { Dimensions, Easing, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import LottieView from 'lottie-react-native'

const { width, height } = Dimensions.get('window')

export default function Planner() {
    const navi = useNavigation<any>()
    const ref = createRef<AnimatedCircularProgress>()
    const [userInfo, setUserInfo] = useState({ taskRate: 100 })
    useEffect(() => {
        const replay = navi.addListener('focus', () => {
            ref.current?.reAnimate(0, 100, 500, Easing.linear)
        })
        return replay
    }, [navi])
    return <ScrollView style={styles.container}>
        <View style={styles.topView}>
            <View>
                <Text style={styles.hello}>Hello Mark</Text>
                <Text style={styles.dDay}>2023 수능 D-32</Text>
            </View>
            <Image source={require('../../images/5.png')} style={styles.image} />
        </View>
        <View style={styles.percentView}>
            <Text style={styles.percentViewComment}>Excelent! Your today’s plan is done. 🥰</Text>
            <AnimatedCircularProgress
                ref={ref}
                size={width * 0.25}
                width={13}
                fill={userInfo.taskRate}
                tintColor="#0085FF"
                // onAnimationComplete={() => console.log('onAnimationComplete')}
                backgroundColor="#0000"
                rotation={0}
            >
                {(fill) => <Text style={styles.percentText}> {Math.floor(fill)}%</Text>}
            </AnimatedCircularProgress>
        </View>
        {StudyTimeRow('16 : 30 : 00', '18 : 00 : 00')}
        <TouchableOpacity onPress={() => { navi.navigate('PlannerList')}}>
        <View style={{
            height: height * 0.18,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '2%',
            borderRadius: height,
            borderWidth: 1,
            borderColor: '#000',
            width: height * 0.18,
            alignSelf: 'center',
        }}>
            <View style={{ height: '50%', width: '50%' }}>
                <LottieView
                    source={require("../../images/planner/planner3.json")}
                    loop
                    autoPlay />
            </View>
        </View>
        <Text style={[styles.dDay, { alignSelf: 'center', marginTop: '6%' }]}>공부하러 가기 {'>'}</Text>
        </TouchableOpacity>
    </ScrollView>
}

const StudyTimeRow = (total: string, target: string) => {
    return <View style={{
        flexDirection: 'row',
        alignSelf: 'center',
        paddingVertical: '10%'
    }}>
        {TotalStudyTimeView(total)}
        {TargetStudyTimeView(target)}
    </View>
}

const TotalStudyTimeView = (time: string) => {
    return <View style={[studyTimeViewStyles.view, { backgroundColor: '#F8F8F8' }]}>
        <Text style={[studyTimeViewStyles.text, { color: '#000' }]}>
            오늘 공부한 시간</Text>
        <Text style={[studyTimeViewStyles.time, { color: '#000' }]}>
            {time}</Text>
    </View>
}

const TargetStudyTimeView = (time: string) => {
    return <View style={[studyTimeViewStyles.view, { backgroundColor: '#60B3FF' }]}>
        <Text style={[studyTimeViewStyles.text, { color: '#fff' }]}>
            오늘 목표 공부 시간</Text>
        <Text style={[studyTimeViewStyles.time, { color: '#fff' }]}>
            {time}</Text>
    </View>
}

const studyTimeViewStyles = StyleSheet.create({
    view: {
        paddingHorizontal: '5%',
        paddingVertical: '8%',
        marginHorizontal: '2%',
        width: '40%',
        alignItems: 'center',
        borderRadius: 10
    },
    text: {
        fontSize: 11,
        fontFamily: 'GodoM'
    },
    time: {
        fontSize: 18,
        fontFamily: 'GodoM',
        marginTop: '10%'
    }
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    topView: {
        backgroundColor: '#F5F5F5',
        paddingHorizontal: '10%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingTop: '15%',
        paddingBottom: '35%',
        marginBottom: '-25%'
    },
    hello: {
        fontSize: 24,
        fontFamily: 'GodoM',
        color: '#000'
    },
    dDay: {
        fontSize: 14,
        fontFamily: 'GodoM',
        color: '#484848',
        marginTop: 5
    },
    image: {
        width: 60, height: 60, borderWidth: 1,
        borderRadius: 10, backgroundColor: '#ddd'
    },
    percentView: {
        backgroundColor: '#fff',
        elevation: 5,
        marginHorizontal: '10%',
        borderRadius: 10,
        padding: '5%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    percentViewComment: {
        fontSize: 17,
        color: '#000',
        fontFamily: 'GodoM',
        width: width * 0.45,
        paddingHorizontal: 5,
        lineHeight: 25
    },
    percentText: {
        fontSize: 18,
        color: '#0085FF',
        fontFamily: 'GodoM',
        paddingTop: 3
    }
})