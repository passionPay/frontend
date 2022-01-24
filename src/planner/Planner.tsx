import React, { Component, useEffect, useState } from "react";
import { Animated, Dimensions, Easing, ImageBackground, NativeScrollEvent, NativeSyntheticEvent, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import LinearGradient from 'react-native-linear-gradient';
import InsetShadow from 'react-native-inset-shadow'
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const xOffset = new Animated.Value(0);

const Screen = props => {
    return <View style={styles.scrollPage}>
        <Animated.View style={[styles.screen, transitionAnimation(props.index)]}>
            <View style={styles.planner}>
                <Text style={styles.text}>{props.text}</Text>
            </View>
        </Animated.View>
    </View>
};

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
    const navi = useNavigation<any>()
    return <View style={styles.container}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
            <TouchableOpacity onPress={() => { navi.goBack() }} style={styles.icon}>
                <Icon name='chevron-left' size={30} color='#5E5E64' /></TouchableOpacity>
            <TouchableOpacity onPress={() => { navi.navigate('Add') }} style={styles.icon}>
                <Icon name='plus' size={30} color='#5E5E64' /></TouchableOpacity>
        </View>
        <Text style={styles.title}>PLANNER</Text>
        <Text style={styles.date}>22.01.20</Text>
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
                <Screen text="Screen 1" index={0} />
                <Screen text="Screen 2" index={1} />
                <Screen text="Screen 3" index={2} />
                <Screen text="Screen 4" index={3} />
                <Screen text="Screen 5" index={4} />
                <Screen text="Screen 6" index={5} />
            </Animated.ScrollView>
        </View>
        <Animated.View style={[styles.bottomView, bottomAnim]}>
            <Text style={styles.time}>06H 45M</Text>
            {chart('시간')}
            {chart('개수')}
        </Animated.View>
    </View>
}

const chart = (text) => {
    return <View style={{ width: '90%', alignSelf: 'center', marginBottom: 7 }}>
        <Text style={styles.tag}>달성률 ({text})</Text>
        <LinearGradient colors={['#CACED5', '#D0D2D8', '#E3E5EC']} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}
            style={{ borderRadius: 10, height: 18, borderWidth: 0, width: '100%', alignSelf: 'center' }}>
            <LinearGradient colors={['#2152f0', '#40c0dc']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                style={[{
                    backgroundColor: "#6667AB66", borderRadius: 10, height: '100%', width: '80%',
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
    },
    screen: {
        height: '100%',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        backgroundColor: "#D8E0E7",
        width: '100%', padding: 12, elevation: 7,
    },
    text: {
        fontSize: 20, flex: 1, color: 'black',
        fontWeight: "bold", textAlign: 'center', textAlignVertical: 'center'
    },
    title: {
        fontSize: 25,
        color: 'black',
        fontWeight: '300'
    },
    date: {
        fontSize: 16,
        color: 'black',
        fontWeight: '300', marginBottom: 15
    },
    tag: {
        fontSize: 14, paddingVertical: 5,
        marginHorizontal: 10,
        fontWeight: '400', color: '#65666D'
    },
    time: {
        fontSize: 23, color: '#65666D', fontWeight: '300',
        paddingVertical: 5, alignSelf: 'center'
    },
    planner: {
        backgroundColor: 'white', borderRadius: 10,
        width: '100%', height: '100%'
    },
    bottomView: {
        backgroundColor: '#D8E0E7', height: '50%',
        width: '82%', borderRadius: 30,
        paddingTop: 8, marginTop: '2%',
        elevation: 5, borderWidth: 7, borderColor: '#DFE3EA'
    },
    icon: {
        alignSelf: 'flex-start', backgroundColor: '#D8E0E7',
        marginTop: '5%', marginLeft: '5%', borderRadius: 5,
        borderWidth: 0, borderColor: '#DFE3EA', elevation: 5,
        overflow: 'hidden', marginRight: '5%'
    }
})