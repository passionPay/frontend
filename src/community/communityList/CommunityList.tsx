import React, { useRef } from 'react'
import { Animated, SafeAreaView, StyleSheet } from 'react-native'
import AnimatedHeader from './AnimatedHeader'
import PostList from './PostList'

export default function CommunityList() {
    const offset = useRef(new Animated.Value(0)).current
    return <SafeAreaView style={styles.container}>
        <PostList offset={offset} />
        <AnimatedHeader offset={offset}/>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },
})