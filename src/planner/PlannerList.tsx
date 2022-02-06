import React, { useState } from "react";
import { Animated, Image, NativeScrollEvent, NativeSyntheticEvent, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { SCREEN_WIDTH, transitionAnimation, xOffset, bottomVal, SCREEN_HEIGHT, bottomAnim } from "./Animations";

const covers = [require('../../images/cover/1.png'), require('../../images/cover/2.png'), require('../../images/cover/3.png'),
require('../../images/cover/4.png'), require('../../images/cover/5.png'), require('../../images/cover/6.png'),
require('../../images/cover/7.png'), require('../../images/cover/8.png'), require('../../images/cover/9.png'),
require('../../images/cover/10.png'), require('../../images/cover/11.png')]

const SPACING_FOR_CARD_INSET = SCREEN_WIDTH * 0.15

export default function PlannerList() {
    const [planners, setPlanners] = useState([{
        id: 1,
        date: '21.01.23 월요일', // string
        timeRate: '80', // string (0 ~ 100 사이의 정수를 문자열로)
        taskRate: '90' // string (0 ~ 100 사이의 정수를 문자열로)
    },
    {
        id: 2,
        date: '21.01.23 월요일',
        timeRate: '80',
        taskRate: '90'
    }
    ])
    const [timeRate, setTimeRate] = useState('0')
    const [taskRate, setTaskRate] = useState('0')
    const navi = useNavigation<any>()

    const Screen = props => {
        return <View style={styles.scrollPage}>
            <Animated.View style={[styles.screen, transitionAnimation(props.index)]}>
                <TouchableOpacity style={styles.planner} onPress={() => { navi.navigate('Edit', { id: props.id }) }}>
                    <Image source={covers[props.index % 11]} style={{ width: SCREEN_WIDTH * 0.35, height: SCREEN_WIDTH * 0.35, marginTop: SCREEN_WIDTH * 0.05 }} />
                    <Text style={styles.text}>{props.date}</Text>
                </TouchableOpacity>
            </Animated.View>
        </View>
    }
    return <View style={styles.container}>
        <View style={styles.topIconView}>
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
                                    setTimeRate(planners[Math.floor(Math.max(contentOffset.x, 0) / (SCREEN_WIDTH * 0.7))].timeRate)
                                    setTaskRate(planners[Math.floor(Math.max(contentOffset.x, 0) / (SCREEN_WIDTH * 0.7))].taskRate)
                                }
                                else {
                                    setTimeRate(planners[Math.floor((Math.max(contentOffset.x, 0) + 1) / (SCREEN_WIDTH * 0.7))].timeRate)
                                    setTaskRate(planners[Math.floor((Math.max(contentOffset.x, 0) + 1) / (SCREEN_WIDTH * 0.7))].taskRate)
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
                {planners.map((v, i) => <Screen date={v.date} index={i} key={i} id={v.id} />)}
            </Animated.ScrollView>
        </View>
        <Animated.View style={[styles.bottomView, bottomAnim]}>
            <Text style={styles.time}>06H 45M</Text>
            {chart('시간', timeRate)}
            {chart('개수', taskRate)}
        </Animated.View>
    </View>
}

const chart = (text, rateStr: string) => {
    const rate = Number(rateStr)
    return <View style={{ width: '90%', alignSelf: 'center', marginBottom: 7 }}>
        <Text style={styles.tag}>달성률 ({text})</Text>
        <LinearGradient colors={['#CACED5', '#D0D2D8', '#E3E5EC']} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}
            style={{ borderRadius: 10, height: 18, borderWidth: 0, width: '100%', alignSelf: 'center' }}>
            <LinearGradient colors={['#2152f0', '#40c0dc']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                style={[{
                    backgroundColor: "#6667AB66", borderRadius: 10, height: '100%', width: rate + '%',
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
    topIconView: {
        flexDirection: 'row', justifyContent: 'space-between', width: '100%'
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
        borderRadius: 30,
        backgroundColor: "#DFE3EA",
        width: '90%', padding: 7, elevation: 7,
    },
    text: {
        fontSize: 22, color: '#595959', fontFamily: 'Lobster',
        textAlign: 'center', textAlignVertical: 'center',
        marginTop: SCREEN_WIDTH * 0.11
    },
    title: {
        fontSize: 30,
        color: '#43444b', fontFamily: 'GodoM',
        marginBottom: '5%', marginTop: '7%'
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
        backgroundColor: '#D8E0E7', borderRadius: 30,
        width: '100%', height: '100%', justifyContent: 'center',
        alignItems: 'center'
    },
    bottomView: {
        backgroundColor: '#D8E0E7', height: '50%',
        width: '78%', borderRadius: 30,
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