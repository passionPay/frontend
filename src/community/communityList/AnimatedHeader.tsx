import React, { useRef } from 'react'
import { Animated, Image, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { gradeIcons } from '../../../images/ExportImages';
import { SCREEN_WIDTH } from '../../planner/Animations';
import BoardSelectTabBar from './BoardSelectTabBar'

export const HEADER_MAX = 380, HEADER_MIN = 170;

export default function AnimatedHeader({ offset }) {
    const xOffset = useRef(new Animated.Value(0)).current;
    const SPACING_FOR_CARD_INSET = SCREEN_WIDTH * 0.25

    const transitionAnimation = index => {
        return {
            transform: [
                { perspective: 800 },
                {
                    scale: xOffset.interpolate({
                        inputRange: [
                            (index - 1) * (SCREEN_WIDTH * 0.5),
                            index * (SCREEN_WIDTH * 0.5),
                            (index + 1) * (SCREEN_WIDTH * 0.5)
                        ],
                        outputRange: [0.8, 1, 0.8]
                    })
                },
                {
                    translateX: xOffset.interpolate({
                        inputRange: [
                            (index - 1) * (SCREEN_WIDTH * 0.5),
                            index * (SCREEN_WIDTH * 0.5),
                            (index + 1) * (SCREEN_WIDTH * 0.5)
                        ],
                        outputRange: [-SCREEN_WIDTH * 0.08, 0, SCREEN_WIDTH * 0.08]
                    })
                },
            ],
        };
    };
    const headerHeight = offset.interpolate({
        inputRange: [0, HEADER_MAX - HEADER_MIN],
        outputRange: [HEADER_MAX, HEADER_MIN],
        extrapolate: 'clamp'
    });

    const Screen = props => {
        return <View style={[styles.scrollPage]}>
            <Animated.View style={[styles.animatedScreen, transitionAnimation(props.index)]}>
                <Image source={gradeIcons[props.index]} style={{
                    width: undefined,
                    height: '70%',
                    aspectRatio: 1,
                    marginTop: 5,
                    marginBottom: 10,
                }} />
                <Text style={[styles.grade, {}]}>{props.index + 1}학년</Text>
            </Animated.View>
        </View>
    }
    
    return <Animated.View style={[styles.headerView, { height: headerHeight }]}>
        <Icon name='chevron-left' color='#000' size={30} style={{ padding: 20, position: 'absolute', top: 0, left: 0 }} />
        <View style={{ height: '50%', position: 'absolute', top: 50, backgroundColor: '#0000' }}>
            <Animated.ScrollView
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={16}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: xOffset } } }], { useNativeDriver: false }
                )}
                horizontal
                pagingEnabled
                style={[styles.scrollView, {
                    opacity: offset.interpolate({
                        inputRange: [0, HEADER_MAX - HEADER_MIN],
                        outputRange: [1, 0],
                        extrapolate: 'clamp'
                    })
                }]}
                decelerationRate={0}
                snapToInterval={SCREEN_WIDTH * 0.5}
                snapToAlignment='center'
                contentContainerStyle={{ paddingHorizontal: SPACING_FOR_CARD_INSET }}
            >
                {[0, 1, 2].map((v, i) => <Screen index={i} key={i} />)}
            </Animated.ScrollView>
        </View>
        <Text style={styles.school}>창원과학고등학교</Text>
        <BoardSelectTabBar />
    </Animated.View>
}


const styles = StyleSheet.create({
    headerView: {
        justifyContent: 'flex-end',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff'
    },
    school: {
        fontSize: 20,
        fontFamily: 'GodoM',
        color: '#000',
        alignSelf: 'center',
        marginBottom: 15
    },
    grade: {
        fontSize: 14,
        fontFamily: 'GodoM',
        color: '#000',
        alignSelf: 'center',
    },
    
    scrollView: {
        flexDirection: "row",
    },
    scrollPage: {
        width: SCREEN_WIDTH * 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        // backgroundColor: "#DFE3EA",
    },
    animatedScreen: {
        height: '100%',
        width: '100%',
        alignItems: 'center'
    },
})