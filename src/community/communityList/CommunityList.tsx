import React, { useRef, useState } from 'react'
import { Animated, SafeAreaView, StyleSheet } from 'react-native'
import AnimatedHeader from './AnimatedHeader'
import BottomSheet from './BottomSheet'
import PostList from './PostList'

export default function CommunityList() {
    const [currentTab, setCurrentTab] = useState(0) // 0 == QnA 게시판, 1 == 자유 게시판
    const [filter, setFilter] = useState('화법과 작문')
    return <SafeAreaView style={styles.container}>
        <PostList currentTab={currentTab} />
        <AnimatedHeader filter={filter} currentTab={currentTab} setCurrentTab={setCurrentTab}/>
        <BottomSheet setFilter={setFilter}/>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },
})