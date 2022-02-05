import React, { useEffect, useState } from "react"
import { Animated, Dimensions } from "react-native";

export const xOffset = new Animated.Value(0);
export const SCREEN_WIDTH = Dimensions.get("window").width;
export const SCREEN_HEIGHT = Dimensions.get("window").height;
export const transitionAnimation = index => {
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

export const bottomVal = new Animated.Value(0);

export const bottomAnim = {
    transform: [
        {
            translateY: bottomVal
        },
    ],
};