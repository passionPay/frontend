import { useNavigation } from '@react-navigation/native'
import React, { useRef, useState } from 'react'
import { Animated, Image, ImageBackground, NativeScrollEvent, NativeSyntheticEvent, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { gradeIcons } from '../../../images/ExportImages'
import { subjectList } from '../../planner/Add'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../planner/Animations'
import BoardSelectTabBar from './BoardSelectTabBar'

export default function CommunityList() {
    const navi = useNavigation<any>()
    const offset = useRef(new Animated.Value(0)).current;
    const xOffset = useRef(new Animated.Value(0)).current;
    const SPACING_FOR_CARD_INSET = SCREEN_WIDTH * 0.25
    const [grade, setGrade] = useState(1)

    const [date, setDate] = useState(initData())

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);

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

    const bottomVal = new Animated.Value(0);

    const bottomAnim = {
        transform: [
            {
                translateY: bottomVal
            },
        ],
    };

    const HEADER_HEIGHT = 240 + 50;
    const headerHeight = offset.interpolate({
        inputRange: [0, HEADER_HEIGHT],
        outputRange: [HEADER_HEIGHT, 60 + 50],
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

                {/* <View style={{height: '90%'}}>
                <LottieView
                    source={lottieFiles[props.index]}
                    loop
                    autoPlay />
                    </View> */}
                <Text style={[styles.grade, {}]}>{props.index + 1}학년</Text>
            </Animated.View>
        </View>
    }

    return <SafeAreaView style={styles.container}>
        <Animated.View style={[styles.headerView, { height: headerHeight }]}>
            <Icon name='chevron-left' color='#000' size={30} style={{ padding: 20, position: 'absolute', top: 0, left: 0 }} />
            <View style={{ height: '60%', position: 'absolute', top: 50, backgroundColor: '#0000' }}>
                <Animated.ScrollView
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={16}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: xOffset } } }],
                        {
                            useNativeDriver: true, listener: (event: NativeSyntheticEvent<NativeScrollEvent>) => {
                                const { contentOffset } = event.nativeEvent
                                const div = contentOffset.x % (SCREEN_WIDTH * 0.5)
                                if (div < 1 || div > (SCREEN_WIDTH * 0.5) - 1) {
                                    // if (div < 1) {
                                    //     setGrade(Math.floor(Math.max(contentOffset.x, 0) / (SCREEN_WIDTH * 0.5)) + 1)
                                    // }
                                    // else {
                                    //     setGrade(Math.floor(Math.max(contentOffset.x, 0) / (SCREEN_WIDTH * 0.5)) + 2)
                                    // }
                                    bottomVal.setValue(SCREEN_HEIGHT * 0.05)
                                    Animated.timing(bottomVal, {
                                        toValue: 0, useNativeDriver: true
                                    }).start()
                                }
                            }
                        }
                    )}
                    horizontal
                    pagingEnabled
                    style={[styles.scrollView, {
                        opacity: offset.interpolate({
                            inputRange: [0, HEADER_HEIGHT],
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

        </Animated.View>
        <Animated.ScrollView
            nestedScrollEnabled={true}
            onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { y: offset } } }],
                { useNativeDriver: false }
            )}
            style={styles.mainScrollView}>
            <BoardSelectTabBar />
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
                    marginBottom: -428, width: '90%', alignSelf: 'center',
                    marginTop: 30
                }}
                listMode="SCROLLVIEW"
                // listItemContainerStyle={{borderTopWidth: 1}}
                style={{ borderWidth: 0 }}
                dropDownContainerStyle={{ borderWidth: 0 }}
            />
            <View style={{ height: 10000 }} />
        </Animated.ScrollView>
        {/* <ScrollView onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: offset } } }],
            { useNativeDriver: false }
          )}
          style={styles.scrollView}>
            <View style={{height: 10000, backgroundColor: 'yellow'}}/>
        </ScrollView> */}
    </SafeAreaView>
}

// https://blog.jscrambler.com/how-to-animate-a-header-view-on-scroll-with-react-native-animated/

const AnimatedHeader = ({ animatedValue }) => {
    // const insets = useSafeAreaInsets();
    const HEADER_HEIGHT = 200;
    const headerHeight = animatedValue.interpolate({
        inputRange: [0, HEADER_HEIGHT],
        outputRange: [HEADER_HEIGHT, 44],
        extrapolate: 'clamp'
    });
    return (
        <Animated.View
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 10,
                height: headerHeight,
                backgroundColor: 'lightblue'
            }}
        >

        </Animated.View>
    );
};

function initData() {
    return []
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },
    headerView: {
        paddingBottom: 50,
        marginBottom: -50,
        justifyContent: 'flex-end',
        // backgroundColor: '#eee'
    },
    school: {
        fontSize: 20,
        fontFamily: 'GodoM',
        color: '#000',
        alignSelf: 'center',
        marginBottom: 10,
    },
    grade: {
        fontSize: 14,
        fontFamily: 'GodoM',
        color: '#000',
        alignSelf: 'center',
    },
    mainScrollView: {
        backgroundColor: '#E0EDFF',
        borderRadius: 50,
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