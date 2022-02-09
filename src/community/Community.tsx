import React, { createRef, useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import LottieView from 'lottie-react-native'
import AnimatedLottieView from 'lottie-react-native'
import { useNavigation } from '@react-navigation/native';

export default function Community() {
    const ref = createRef<AnimatedLottieView>();
    const ref2 = createRef<AnimatedLottieView>();
    const navi = useNavigation<any>()
    useEffect(() => {
        const replay = navi.addListener('focus', () => { ref.current?.play(); ref2.current?.play() })
        return replay
    }, [navi])
    return <View style={styles.container}>
        <Text style={styles.title}>Community</Text>
        <Text style={styles.subTitle}>학습 QnA, 학교 일상 공유, 시험 및 수업 정보</Text>
        <View style={styles.lottie}>
            <LottieView
                source={require("../../images/community/community.json")}
                loop
                autoPlay />
        </View>
        <TouchableOpacity style={styles.touchableOpacity}
            onPress={() => { navi.navigate('CommunityList') }}>
            <View style={{ height: '70%' }}>
                <LottieView
                    ref={ref}
                    source={require("../../images/community/school1.json")}
                    loop={false}
                    autoPlay />
            </View>
            <Text style={styles.text}>우리학교 커뮤니티 입장하기  {'>'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableOpacity}
            onPress={() => { navi.navigate('CommunityList') }}>
            <View style={{ height: '70%' }}>
                <LottieView
                    ref={ref2}
                    source={require("../../images/community/school2.json")}
                    loop={false}
                    autoPlay />
            </View>
            <Text style={styles.text}>전체 커뮤니티 입장하기  {'>'}</Text>
        </TouchableOpacity>
        <View style={styles.marginBottom} />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        flex: 2,
        color: 'black',
        fontSize: 30,
        marginHorizontal: 35,
        marginTop: 35,
        fontFamily: 'GodoM',
        textAlignVertical: 'bottom'
    },
    subTitle: {
        flex: 1,
        color: 'black',
        fontSize: 13,
        marginHorizontal: 35,
        marginTop: 10,
        fontFamily: 'GodoM'
    },
    lottie: {
        flex: 8,
        marginHorizontal: '10%'
    },
    touchableOpacity: {
        flex: 5,
        marginHorizontal: '10%',
        marginTop: 20,
        borderRadius: 20,
        backgroundColor: '#ECEDF6',
        justifyContent: 'center'
    },
    text: {
        color: 'black',
        fontSize: 14,
        textAlign: 'center',
        fontFamily: 'GodoM',
        // marginTop: 10,
        paddingBottom: 20
    },
    marginBottom: {
        flex: 1
    }
})