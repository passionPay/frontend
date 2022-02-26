import React, { useCallback, useState } from 'react'
import { Platform, Dimensions, StyleSheet, SafeAreaView, View, Image, Text, ScrollView, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import PostSection from './PostSection'
import CommentSection from './CommenSection'
import CommentInput from './CommentInput'
import MemberModal from '../../../commonComponent/MemberModal'

const { width, height } = Dimensions.get('window')

const data = {
    author: '김승구',
    content: '202020202020 공부완료',
    createdAt: '3분 전',
}






/* paddingVertical for container is deleted here and not applied to comment container */

export default function VerifyPost() {

    const navigation = useNavigation<any>()
    const goBack = useCallback(() => navigation.goBack(), [])

    return (
        <SafeAreaView style={styles.safeContainer}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.header} onPress={goBack}>
                    <Text style={{
                        fontSize: 13,
                        fontFamily: 'GodoM',
                        color: '#9F9F9F',
                    }} >
                        &lt; 인증게시판 </Text>
                </TouchableOpacity>
                <ScrollView style={{flex:1}}showsVerticalScrollIndicator={false}>
                    <PostSection data={data} />
                    <CommentSection data={data} />
                </ScrollView>
                <CommentInput/>
            </View>
        </SafeAreaView>
    )

}


const styles = StyleSheet.create({
    shadow: {
        ...Platform.select({
            ios: {
                shadowColor: "#000",
                shadowOffset: {
                    width: 0.1,
                    height: 0.1,
                },
                shadowOpacity: 0.25,
            },
            android: {
                elevation: 3,
            },
        }
        )
    },
    header: {
        height: 50,
        justifyContent: 'center',
        alignSelf: 'baseline',
        marginHorizontal: '5%',
    },
    safeContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
    },
    title: {
        fontSize: 24,
        fontFamily: 'GodoM',
        marginHorizontal: '5%',
    },
})

