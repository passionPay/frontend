import React, { useCallback, useState } from 'react'
import { Platform, Dimensions, StyleSheet, SafeAreaView, View, Image, Text, ScrollView, TouchableOpacity } from 'react-native'

import MemberIcon from '../../../../component/MemberIcon'
const { width, height } = Dimensions.get('window')


const CommentItem = ({ data,idx=1 }) => {

    return (
        <View style={{ borderTopWidth:idx===0?0: 0.5, borderColor: '#c4c4c4', paddingVertical: height * 0.02, paddingHorizontal: width * 0.07 }}>
            <View style={{ flexDirection: 'row', }}>
                <View style={{ flexDirection: 'row', }}>
                    <MemberIcon size={35} isOnline />
                    <View style={{ paddingLeft: 20, paddingTop: 3, justifyContent: 'space-around' }}>
                        <Text style={{ fontSize: 14, }}>{data.author}</Text>
                        <Text style={{ fontSize: 13, }}>{data.createdAt}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginLeft: 'auto', marginRight: width * 0.02 }}>
                    <TouchableOpacity>
                        <Text style={{
                            flexDirection: 'row', marginRight: width * 0, marginTop: 5,
                            fontSize: 12,
                            // color:'#7EBEF9'
                        }}>
                            좋아요 3
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={{ marginTop: height * 0.01 }}>
                {'댓글댓글'.repeat(10)}
            </Text>
        </View>

    )
}


const CommentSection = ({ data }) => {
    return (
        <>
            <View style={[styles.commentsContainer, styles.shadow]}>
                <CommentItem idx={0} data={data} />
                <CommentItem data={data} />
                <CommentItem data={data} />
                <CommentItem data={data} />
                <CommentItem data={data} />
                <CommentItem data={data} />
            </View>

        </>)
}
export default CommentSection

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
    commentsContainer: {
        width: '100%',
        backgroundColor: '#F9F9F9',
        borderTopLeftRadius: width * 0.05,
        borderTopRightRadius: width * 0.05,
        paddingTop: width * 0.02,
        paddingBottom:height*0.5,
        marginBottom:-height*0.5,
    }
})