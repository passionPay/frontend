import React, { useEffect, useState } from "react";
import { Animated, Dimensions, NativeScrollEvent, NativeSyntheticEvent, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { getTimeBlock } from "./someUtils";
import axios from "axios";
import { serverIPaddress } from "../Util";
import { useContextOfAll } from "../Provider";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const xOffset = new Animated.Value(0);


const transitionAnimation = index => {
    return {
        transform: [
            { perspective: 800 },
            {
                scale: xOffset.interpolate({
                    inputRange: [
                        (index - 1) * (SCREEN_WIDTH * 0.7),
                        index * (SCREEN_WIDTH * 0.7),
                        (index + 1) * (SCREEN_WIDTH * 0.7)
                    ],
                    outputRange: [0.8, 1, 0.8]
                })
            },
            {
                rotateY: xOffset.interpolate({
                    inputRange: [
                        -20000,
                        (index - 1) * (SCREEN_WIDTH * 0.7),
                        index * (SCREEN_WIDTH * 0.7),
                        (index + 1) * (SCREEN_WIDTH * 0.7),
                        20000
                    ],
                    outputRange: ["0deg", "-60deg", "0deg", "60deg", "0deg"]
                })
            },
            {
                translateX: xOffset.interpolate({
                    inputRange: [
                        (index - 1) * (SCREEN_WIDTH * 0.7),
                        index * (SCREEN_WIDTH * 0.7) - (SCREEN_WIDTH * 0.6),
                        index * (SCREEN_WIDTH * 0.7),
                        index * (SCREEN_WIDTH * 0.7) + (SCREEN_WIDTH * 0.6),
                        (index + 1) * (SCREEN_WIDTH * 0.7)
                    ],
                    outputRange: [-SCREEN_WIDTH * 0.7, -SCREEN_WIDTH * 0.2, 0, SCREEN_WIDTH * 0.2, SCREEN_WIDTH * 0.7]
                })
            },
            {
                scaleY: xOffset.interpolate({
                    inputRange: [
                        (index - 1) * (SCREEN_WIDTH * 0.7),
                        index * (SCREEN_WIDTH * 0.7),
                        (index + 1) * (SCREEN_WIDTH * 0.7)
                    ],
                    outputRange: [1.5, 1, 1.5]
                })
            }
        ],
    };
};

const bottomVal = new Animated.Value(0);

const bottomAnim = {
    transform: [
        {
            translateY: bottomVal
        },
    ],
};

const SPACING_FOR_CARD_INSET = SCREEN_WIDTH * 0.15

export default function Planner() {
    const [planners, setPlanners] = useState([{
        id: 1,
        date: '21.01.23 월요일', // string
        comment: 'See Your Eyes - 잔나비', // 명언(또는 platlist), string
        targetTime: '08H 40MIN', // string
        totalTime: 3490, // number (msec 단위)
        timeRate: '80', // string (0 ~ 100 사이의 정수를 문자열로)
        taskRate: '90' // string (0 ~ 100 사이의 정수를 문자열로)
    }
    ])
    const [timeRate, setTimeRate] = useState('0')
    const [taskRate, setTaskRate] = useState('0')
    const navi = useNavigation<any>()
    const cont = useContextOfAll()

    useEffect(() => {
        const reload = navi.addListener('focus', () => {
            axios({
                url: serverIPaddress + '/planner',
                method: 'get',
                headers: {
                    'Authorization': 'Bearer ' + cont.user.token
                }
            }).then(function (res) {
                console.log(res.data)
                setPlanners(res.data)
            }).catch(function (error) {
                console.log(error)
            })
        })
        return reload
    }, [navi])

    const Screen = props => {
        return <View style={styles.scrollPage}>
            <Animated.View style={[styles.screen, transitionAnimation(props.index)]}>
                <TouchableOpacity style={styles.planner} onPress={() => { navi.navigate('Edit') }}>
                    <Text style={styles.text}>{props.date}</Text>
                </TouchableOpacity>
            </Animated.View>
        </View>
    }
    return <View style={styles.container}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
            <TouchableOpacity onPress={() => { navi.goBack() }} style={styles.icon}>
                <Icon name='chevron-left' size={30} color='#5E5E64' /></TouchableOpacity>
            <TouchableOpacity onPress={() => { navi.navigate('Add') }} style={styles.icon}>
                <Icon name='plus' size={30} color='#5E5E64' /></TouchableOpacity>
        </View>
        <Text style={styles.title}>PLANNER</Text>
        <View style={{ height: '55%' }}>
            <Animated.ScrollView
                scrollEventThrottle={16}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: xOffset } } }],
                    {
                        useNativeDriver: true, listener: (event: NativeSyntheticEvent<NativeScrollEvent>) => {
                            const { contentOffset } = event.nativeEvent
                            const div = contentOffset.x % (SCREEN_WIDTH * 0.7)
                            if (div < 1 || div > (SCREEN_WIDTH * 0.7) - 1) {
                                if (div < 1) {
                                    setTimeRate(planners[Math.floor(contentOffset.x / (SCREEN_WIDTH * 0.7))].timeRate)
                                    setTaskRate(planners[Math.floor(contentOffset.x / (SCREEN_WIDTH * 0.7))].taskRate)
                                }
                                else {
                                    setTimeRate(planners[Math.floor((contentOffset.x + 1) / (SCREEN_WIDTH * 0.7))].timeRate)
                                    setTaskRate(planners[Math.floor((contentOffset.x + 1) / (SCREEN_WIDTH * 0.7))].taskRate)
                                }
                                Animated.timing(bottomVal, {
                                    toValue: 0, duration: 1000, useNativeDriver: true
                                }).start()
                            }
                            else {
                                Animated.timing(bottomVal, {
                                    toValue: SCREEN_HEIGHT * 0.3, duration: 10, useNativeDriver: true
                                }).start()
                            }
                        }
                    }
                )}
                horizontal
                pagingEnabled
                style={styles.scrollView}
                decelerationRate={0}
                snapToInterval={SCREEN_WIDTH * 0.7}
                snapToAlignment='center'
                contentContainerStyle={{ paddingHorizontal: SPACING_FOR_CARD_INSET }}
            >
                {planners.map((v, i) => <Screen date={v.date} index={i} key={i} />)}
                {/* <Screen date="Screen 1" index={0} />
                <Screen date="Screen 2" index={1} />
                <Screen date="Screen 3" index={2} />
                <Screen date="Screen 4" index={3} />
                <Screen date="Screen 5" index={4} />
                <Screen date="Screen 6" index={5} /> */}
            </Animated.ScrollView>
        </View>
        <Animated.View style={[styles.bottomView, bottomAnim]}>
            <Text style={styles.time}>06H 45M</Text>
            {chart('시간', timeRate)}
            {chart('개수', taskRate)}
        </Animated.View>
    </View>
}

const chart = (text, rateStr:string) => {
    const rate = Number(rateStr)
    console.log(rate)
    return <View style={{ width: '90%', alignSelf: 'center', marginBottom: 7 }}>
        <Text style={styles.tag}>달성률 ({text})</Text>
        <LinearGradient colors={['#CACED5', '#D0D2D8', '#E3E5EC']} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}
            style={{ borderRadius: 10, height: 18, borderWidth: 0, width: '100%', alignSelf: 'center' }}>
            <LinearGradient colors={['#2152f0', '#40c0dc']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                style={[{
                    backgroundColor: "#6667AB66", borderRadius: 10, height: '100%', width: rate+'%',
                    overflow: 'hidden', borderWidth: 3, borderColor: '#00000000'
                }]} />
        </LinearGradient>
    </View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#D8E0E7",
        flex: 1, alignItems: 'center'
    },
    scrollView: {
        flexDirection: "row",
    },
    scrollPage: {
        width: SCREEN_WIDTH * 0.7, marginVertical: 10,
        alignItems: 'center', borderWidth: 0,
        justifyContent: 'center'
    },
    screen: {
        height: '90%',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        backgroundColor: "#D8E0E7",
        width: '100%', padding: 12, elevation: 7,
    },
    text: {
        fontSize: 20, flex: 1, color: 'black', fontFamily: 'GodoM',
        fontWeight: "bold", textAlign: 'center', textAlignVertical: 'center'
    },
    title: {
        fontSize: 25,
        color: '#43444b', fontFamily: 'GodoM',
        marginBottom: '11%', marginTop: '4%'
    },
    date: {
        fontSize: 16, fontFamily: 'GodoM',
        color: 'black',
        fontWeight: '300', marginBottom: 15
    },
    tag: {
        fontSize: 14, paddingVertical: 5,
        marginHorizontal: 10, fontFamily: 'GodoM',
        fontWeight: '400', color: '#65666D'
    },
    time: {
        fontSize: 23, color: '#65666D', fontWeight: '300',
        paddingVertical: 5, alignSelf: 'center', fontFamily: 'GodoM',
    },
    planner: {
        backgroundColor: 'white', borderRadius: 10,
        width: '100%', height: '100%'
    },
    bottomView: {
        backgroundColor: '#D8E0E7', height: '50%',
        width: '82%', borderRadius: 30,
        paddingTop: 8,// marginTop: '1%',
        elevation: 5, borderWidth: 7, borderColor: '#DFE3EA'
    },
    icon: {
        alignSelf: 'flex-start', backgroundColor: '#D8E0E7',
        marginTop: '7%', marginLeft: '7%', borderRadius: 5,
        borderWidth: 0, borderColor: '#DFE3EA', elevation: 5,
        overflow: 'hidden', marginRight: '7%'
    },
})


const getTask = () => {
    return [
        {
            subject: '국어',
            tasks: ['윤혜정T 나비효과 입문편 5강', '씨리얼 문학 현대시 6일차']
        }
    ]
}