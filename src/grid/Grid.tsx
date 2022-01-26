import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import React, { Component, useEffect, useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    ImageBackground
} from 'react-native'
import { DragSortableView } from 'react-native-drag-sort'
import { useContextOfAll } from '../Provider'
import { serverIPaddress } from '../Util'

const deviceWidth = Dimensions.get('window').width
const childrenWidth = deviceWidth / 2
const childrenHeight = deviceWidth / 2
const sortWidth = deviceWidth
const itemsInit = [
    { title: '타이틀1', content: '내용1' },
    { title: '타이틀2', content: '내용2' },
    // { title: '타이틀3', content: '내용3' },
    // { title: '타이틀4', content: '내용4' },
    // { title: '타이틀5', content: '내용5' },
    // { title: '타이틀6', content: '내용6' },
    // { title: '타이틀7', content: '내용7내용7내용7내용7내용7내용7내용7내용7내용7내용7내용7내용7내용7내용7내용7내용7내용7내용7내용7내용7내용7내용7내용7내용7내용7내용7내용7내용7내용7내용7내용7내용7내용7내용7내용7내용7내용7내용7내용7내용7내용7내용7내용7' },
    // { title: '타이틀8', content: '내용8' },
]

export default function Grid() {
    const [items, setItems] = useState(itemsInit)
    const [state, setState] = useState({
        scrollEnabled: true
    })
    const navi = useNavigation<any>()
    const cont = useContextOfAll()

    useEffect(() => {
        const reload = navi.addListener('focus', () => {
            getJSON(cont, setItems)
        })
        return reload
    }, [navi])

    const renderItem = (item, index) => <TouchableOpacity style={styles.note}
        onPress={() => { navi.navigate('MemoDetail', { title: item.title, content: item.content, memoId: item.id }) }}>
        <Text style={styles.noteTitle}>{item.title}</Text>
        <Text style={styles.noteContent} ellipsizeMode='tail' numberOfLines={8}>{item.content}</Text>
    </TouchableOpacity>

    const onSelectedDragEnd = () => {
        setState((prev) => {
            return { scrollEnabled: true }
        })
        setItems((prev) => [...prev])
    }

    const onSelectedDragStart = () => {
        setState((prev) => {
            return { scrollEnabled: false }
        })
        setItems((prev) => [...prev])
    }
    return (
        <ImageBackground source={require('../../images/gridBack.png')} style={{ flex: 1 }}>
            <TouchableOpacity style={styles.addTouchable} onPress={() => { navi.navigate('Edit') }}>
                <Text style={styles.addText}>클릭하여 메모 추가하기</Text>
                <Text style={styles.addBtn}><Text>Sticker Pack Market</Text></Text>
            </TouchableOpacity>
            <ScrollView
                scrollEnabled={state.scrollEnabled}
                style={styles.container}>
                <DragSortableView
                    dataSource={items}
                    parentWidth={sortWidth}
                    childrenWidth={childrenWidth - marginChildrenLeft}
                    childrenHeight={childrenHeight}
                    marginChildrenTop={10}
                    marginChildrenLeft={marginChildrenLeft}
                    onDragStart={onSelectedDragStart}
                    onDragEnd={onSelectedDragEnd}
                    onDataChange={(data) => {
                        setItems(() => [...data]);
                        setState((prev) => { return { scrollEnabled: prev.scrollEnabled } })
                    }}
                    keyExtractor={(item, index) => index}
                    renderItem={renderItem} />
            </ScrollView>
        </ImageBackground>
    )

}

function getJSON(cont, setItems) {
    axios({
        url: serverIPaddress + '/memo',
        method: 'get',
        headers: {
            'Authorization': 'Bearer ' + cont.user.token
        }
    }).then(function (res) {
        setItems(res.data)
    }).catch(function (error) {
        console.log(error)
    })
}

const marginChildrenLeft = 10

const styles = StyleSheet.create({
    addTouchable: {
        marginHorizontal: 10, borderBottomWidth: 1,
        flexDirection: 'row', justifyContent: 'space-between',
        padding: 7, backgroundColor: 'white', marginTop: 20
    },
    addText: {
        color: 'grey', fontSize: 12
    },
    addBtn: {
        color: 'white', backgroundColor: 'black',
        borderRadius: 20, paddingVertical: 3, paddingHorizontal: 8,
        fontSize: 10
    },
    column: {
        flex: 1, padding: 17
    },
    note: {
        backgroundColor: '#CAD9CC', borderRadius: 5,
        width: childrenWidth - marginChildrenLeft * 2,
        height: childrenHeight
    },
    noteTitle: {
        backgroundColor: '#A7C2AA', width: '100%',
        paddingHorizontal: 10, borderTopRightRadius: 5, borderTopLeftRadius: 5,
        fontWeight: 'bold', paddingVertical: 7, fontSize: 13
    },
    noteContent: {
        paddingVertical: 7, fontWeight: 'bold',
        paddingHorizontal: 10
    },
    container: {
        marginBottom: 10
    },
})