import axios from 'axios'
import React, { useState } from 'react'
import { Animated, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { subjectList } from '../../planner/Add'
import BoardSelectTabBar from './BoardSelectTabBar'

export default function PostList({ offset }) {
    const [data, setData] = useState<postList>(initData())

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);

    // axios({
    //     method: 'get',
    //     url: 'http://579a-218-38-170-42.ngrok.io/test'
    // }).then((res) => {
    //     console.log(res.data)
    // })

    const renderItem = ({ item }: { item: post }) => <View style={styles.post}>
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
    </View>

    return <FlatList
        nestedScrollEnabled
        onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: offset } } }],
            { useNativeDriver: false }
        )}
        style={styles.flatList}
        CellRendererComponent={({ children, index, style, ...props }) => {
            const cellStyle = [
                style,
                {
                    zIndex: -1,
                    elevation: -1,
                },
            ];
            return <View style={cellStyle} index={index} {...props}>
                {children}
            </View>
        }}

        // ListHeaderComponentStyle={{ zIndex: 5000, minHeight: 0, paddingBottom: 300, backgroundColor: '#0006' }}
        ListHeaderComponent={<>
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
            </>}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListFooterComponent={
            <View style={{ height: 1000 }} />}
    />
}

const styles = StyleSheet.create({
    content: {
        fontFamily: 'GodoM',
        fontSize: 15,
        color: '#000',
    },
    flatList: {
        backgroundColor: '#E0EDFF',
        borderRadius: 50,
        zIndex: -1
    },
    post: {
        backgroundColor: '#fff',
        borderRadius: 30,
        alignSelf: 'center',
        marginVertical: 10,
        width: '90%',
        padding: 30,
        zIndex: -1
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
        // backgroundColor: 'green'
    },
    count: {
        fontFamily: 'GodoM',
        fontSize: 13,
        color: '#000',
        marginLeft: 3,
        marginRight: 10,
        // backgroundColor: 'yellow'
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