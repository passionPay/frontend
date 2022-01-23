import React, { Component } from "react";
import { Animated, Dimensions, StyleSheet, Text, View } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;

const xOffset = new Animated.Value(0);

const Screen = props => {
    return <Animated.View style={[styles.screen, transitionAnimation(props.index)]}>
            <Text style={styles.text}>{props.text}</Text>
        </Animated.View>
};

const transitionAnimation = index => {
    return {
        transform: [
            {
                rotateY: xOffset.interpolate({
                    inputRange: [
                        (index - 1) * (SCREEN_WIDTH * 0.8),
                        index * (SCREEN_WIDTH * 0.8),
                        (index + 1) * (SCREEN_WIDTH * 0.8)
                    ],
                    outputRange: ["-30deg", "0deg", "30deg"]
                })
            }
        ]
    };
};

const SPACING_FOR_CARD_INSET = Dimensions.get('window').width * 0.1
export default class Home2 extends Component {
    render() {
        return (
            <Animated.ScrollView
                scrollEventThrottle={16}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: xOffset } } }],
                    { useNativeDriver: true }
                )}
                horizontal
                pagingEnabled
                style={styles.scrollView}
                decelerationRate={0} // Disable deceleration
                snapToInterval={SCREEN_WIDTH * 0.8} // Calculate the size for a card including marginLeft and marginRight
                snapToAlignment='center'
                contentContainerStyle={{paddingHorizontal: SPACING_FOR_CARD_INSET}}
            >
                <Screen text="Screen 1" index={0} />
                <Screen text="Screen 2" index={1} />
                <Screen text="Screen 3" index={2} />
                <Screen text="Screen 4" index={3} />
                <Screen text="Screen 5" index={4} />
                <Screen text="Screen 6" index={5} />
            </Animated.ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    scrollView: {
        flexDirection: "row",
        backgroundColor: "#6667AB77"
    },
    screen: {
        height: '70%',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        backgroundColor: "white",
        width: SCREEN_WIDTH * 0.8
    },
    text: {
        fontSize: 45,
        fontWeight: "bold"
    }
});