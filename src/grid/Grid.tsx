import React from 'react'
import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Grid() {
    return <ImageBackground source={require('../../images/gridBack.png')} style={{ flex: 1 }}>
        <TouchableOpacity style={styles.addTouchable}>
            <Text style={styles.addText}>클릭하여 메모 추가하기</Text>
            <Text style={styles.addBtn}><Text>Sticker Pack Market</Text></Text>
        </TouchableOpacity>
        <ScrollView>
            <View style={{flexDirection: 'row'}}>
                <View style={styles.column}>
                    <View style={styles.note}>
                        <Text style={styles.noteTitle}>오늘 사야 할 것들</Text>
                        <Text style={styles.noteContent}>
                            {'- 새콤달콤\n- 초코우유\n- 제트스트림 0.5\n- 스프링노트\n- 문제집 두 권\n- 스누피 필통\n- 빈츠\n- 신라면 건면'}</Text>
                    </View>
                </View>
                <View style={styles.column}>
                    <Text>여기에 노트</Text>
                </View>
            </View>
        </ScrollView>
    </ImageBackground>
}

const styles = StyleSheet.create({
    addTouchable: {
        marginHorizontal: 10, borderBottomWidth: 1,
        flexDirection: 'row', justifyContent: 'space-between',
        padding: 7, backgroundColor: 'white', marginTop: 10
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
        backgroundColor: '#CAD9CC', borderRadius: 5
    },
    noteTitle: {
        backgroundColor: '#A7C2AA',
        paddingHorizontal: 10, borderTopRightRadius: 5, borderTopLeftRadius: 5,
        fontWeight: 'bold', paddingVertical: 7
    },
    noteContent: {
        paddingVertical: 7, fontWeight: 'bold',
        paddingHorizontal: 10
    },

})