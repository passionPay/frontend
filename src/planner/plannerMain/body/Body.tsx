import React from 'react'
import { StyleSheet, View } from 'react-native'
import Tasks from './Tasks'
import TimeBlock from './TimeBlock'

export default function Body() {
    return <View style={styles.container}>
        <Tasks />
        <TimeBlock />
    </View>
}

const styles = StyleSheet.create({
    container: {
        // borderTopWidth: 0.5,
        marginHorizontal: 20,
        borderColor: '#1F4073',
        flexDirection: 'row',
        marginTop: 10
    }
})