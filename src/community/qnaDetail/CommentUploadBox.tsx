import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

export default function CommentUploadBox() {
    return <View style={styles.container}>
        <TextInput style={styles.textInput} placeholder='답변을 작성해주세요' />
    </View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderColor: '#000'
    },
    textInput: {
        backgroundColor: '#aaa',

    }
})