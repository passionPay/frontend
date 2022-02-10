import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Animated, FlatList, Image, RefreshControl, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { HEADER_MAX } from './AnimatedHeader'

export const offset = new Animated.Value(0)

export default function PostList({currentTab}) {
    const [data, setData] = useState<postList>(initData())
    const navi = useNavigation<any>()

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true); setRefreshing(false)
        // wait(2000).then(() =>);
    }, []);

    const renderItem = ({ item }: { item: post }) => <TouchableOpacity style={styles.post}
        onPress={() => { navi.navigate(currentTab == 0 ? 'QnaDetail' : 'PostDetail') }}>
        <Text style={styles.content} numberOfLines={3}>{item.content}</Text>
        <Image source={{
            uri: item.image,
        }} style={styles.image} />
        <View style={styles.postBottom}>
            <View style={styles.postBottom}>
                <Icon name='thumb-up-outline' size={20} color='tomato' />
                <Text style={styles.count}>{item.likeCount}</Text>
                <Icon name='message-processing-outline' size={20} color='royalblue' />
                <Text style={styles.count}>{item.commentCount}</Text>
            </View>
            <Icon name='dots-vertical' size={20} color='#000' />
        </View>
    </TouchableOpacity>

    return <FlatList
        contentContainerStyle={{ paddingTop: HEADER_MAX }}
        nestedScrollEnabled
        onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: offset } } }],
            { useNativeDriver: false }
        )}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListFooterComponent={<View style={{ height: 1000 }} />}
        style={styles.flatList}
        refreshControl={
            <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                progressViewOffset={HEADER_MAX}
            />
        }
    />
}

const styles = StyleSheet.create({
    content: {
        fontFamily: 'GodoM',
        fontSize: 15,
        color: '#000',
    },
    flatList: {
        backgroundColor: '#E0EDFF'
    },
    post: {
        backgroundColor: '#fff',
        borderRadius: 30,
        alignSelf: 'center',
        marginVertical: 10,
        width: '90%',
        padding: 30
    },
    image: {
        width: '100%',
        height: 150,
        alignSelf: 'center',
        borderRadius: 20,
        marginVertical: 20
    },
    postBottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    count: {
        fontFamily: 'GodoM',
        fontSize: 13,
        color: '#000',
        marginLeft: 3,
        marginRight: 10,
    }
})

function initData() {
    return [
        {
            id: 'id',
            content: '게시글 내용',
            likeCount: 10,
            commentCount: 2,
            image: 'https://sigan.kr/data/editor/1906/thumb-f33a74433eda70e150b08cc10e026242_1559377366_0391_950x1267.jpg'
        },
        {
            id: 'id2',
            content: '게시글 내용은 최대 3줄, 이미지 크기는 고정, 이미지 배치는 자동으로 가운데로, 오른쪽 점선은 스크랩 또는 신고 기능, 본인이 작성자인 경우 삭제 가능',
            likeCount: 1,
            commentCount: 0,
            image: 'https://sigan.kr/data/editor/1906/thumb-f33a74433eda70e150b08cc10e026242_1559377366_0391_950x1267.jpg'
        },
        {
            id: 'id3',
            content: '게시글 내용',
            likeCount: 2,
            commentCount: 2,
            image: 'https://reactnative.dev/img/tiny_logo.png'
        }
    ]
}

type post = { id: string, content: string, likeCount: number, commentCount: number, image: string }
type postList = post[]