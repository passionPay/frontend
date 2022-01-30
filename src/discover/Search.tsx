import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Search() {
    const [result, setResult] = useState([])
    return <View>
        <View style={styles.findView}>
            <Icon name='magnify' size={25} style={{ padding: 5, }} />
            <TextInput placeholder='What are you looking for?' style={styles.textInput}
                onEndEditing={() => { getJSON(setResult) }} /></View>
        {result.map((v, i) => <View key={i} style={styles.row}>
            <Text style={styles.text}>{v.name}</Text>
        </View>)}
    </View>
}

function getJSON(setResult) {
    setResult([
        {
            name: 'Yoon_Yess',
        }
    ])
}

const styles = StyleSheet.create({
    findView: {
        flexDirection: 'row', alignItems: 'center',
        backgroundColor: '#44444411', borderRadius: 10,
        marginVertical: 20, marginHorizontal: 10,
        paddingHorizontal: 7
    },
    textInput: {
        paddingVertical: 7, paddingRight: 7, flex: 1
    },
    row: {
        backgroundColor: 'white', elevation: 5,
        borderRadius: 10, padding: 10, marginHorizontal: 10
    },
    text: {
        color: 'black', fontSize: 16
    }
})