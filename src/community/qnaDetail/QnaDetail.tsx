import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function QnaDetail() {
    const [data, setData] = useState(initData())
    const navi = useNavigation<any>()
    return <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
        <BackButton navi={navi} />
        <ScrollView style={{ flex: 1 }}>
            <View style={styles.post}>
                <Text style={styles.content}>{data.content}</Text>
                <Text style={styles.time}>{data.time}</Text>
                <Image source={{ uri: data.image }}
                    style={styles.image} />
                <View style={styles.postBottom}>
                    <Icon name='thumb-up-outline' size={18} color='#000' />
                    <Text style={styles.count}>{data.likeCount}</Text>
                    <Icon name='comment-text-outline' size={18} color='#000' />
                    <Text style={styles.count}>{data.commentCount}</Text>
                </View>
            </View>
            {data.comment.map((v, i) => <View style={styles.commentView} key={i}>
                <Text style={styles.commentContent}>{v.content}</Text>
                <View style={styles.commentBottom}>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name='thumb-up-outline' size={18} color='#000' />
                        <Text style={styles.count}>{data.likeCount}</Text>
                    </View>
                    <Text style={styles.commentTime}>{v.time}</Text>
                </View>
            </View>)}
            <View style={{ height: 100 }} />
        </ScrollView>
    </SafeAreaView>
}

const BackButton = ({ navi }) => <View style={{
    flexDirection: 'row',
    backgroundColor: '#F7F9FB',
    alignItems: 'center',
    padding: 15
}}>
    <TouchableOpacity onPress={() => { navi.goBack() }}>
        <Icon name='chevron-left' size={28} color='#000' />
    </TouchableOpacity>
    <Text style={{
        fontFamily: 'GodoM',
        fontSize: 15,
        color: '#000',
        marginLeft: 10
    }}>QnA 게시판</Text>
</View>

const styles = StyleSheet.create({
    post: {
        backgroundColor: '#F7F9FB',
        alignSelf: 'center',
        padding: 20,
        width: '100%',
        // borderBottomWidth: 1,
        borderColor: '#ddd'
    },
    content: {
        fontFamily: 'GodoM',
        fontSize: 15,
        color: '#000',
        marginBottom: 15
    },
    time: {
        fontFamily: 'GodoM',
        fontSize: 12,
        color: '#666',
        marginBottom: 15,
        textAlign: 'right',
    },
    image: {
        width: '100%',
        height: 'auto',
        aspectRatio: 1,
        resizeMode: 'contain',
        marginBottom: 15
    },
    postBottom: {
        alignSelf: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    count: {
        fontFamily: 'GodoM',
        fontSize: 13,
        color: '#000',
        marginLeft: 3,
        marginRight: 10,
    },
    commentView: {
        backgroundColor: '#F7F9FB',
        alignSelf: 'center',
        padding: 20,
        width: '98%',
        marginTop: 5,
        // borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5
    },
    commentBottom: {
        alignSelf: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    commentTime: {
        fontFamily: 'GodoM',
        fontSize: 12,
        color: '#666',
        textAlign: 'right',
    },
    commentContent: {
        fontFamily: 'GodoM',
        fontSize: 14,
        color: '#000',
        marginBottom: 15
    },
})

function initData() {
    return {
        content: '게시글 내용',
        image: 'https://sigan.kr/data/editor/1906/thumb-f33a74433eda70e150b08cc10e026242_1559377366_0391_950x1267.jpg',
        likeCount: 10,
        commentCount: 10,
        time: '2022-02-10 09:39',
        comment: [
            {
                content: '댓글 내용',
                likeCount: 10,
                time: '2022-02-10 09:39'
            },
            {
                content: '댓글 내용',
                likeCount: 10,
                time: '2022-02-10 09:39'
            },
            {
                content: '댓글 내용',
                likeCount: 10,
                time: '2022-02-10 09:39'
            }
        ]
    }
}