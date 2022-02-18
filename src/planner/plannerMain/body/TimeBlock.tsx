import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function TimeBlock() {
    const hours = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 0, 1, 2, 3, 4]
    return <View style={{ flex: 3 }}>
        {hours.map((v, i) => <View style={ styles.row }>
            <Text style={styles.hour}>{v}</Text>
            <View style={{ flex: 1, backgroundColor: '#0000' }} />
        </View>)}
    </View>
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#aaa'
    },
    hour: {
        width: 20,
        fontSize: 12,
        textAlign: 'center',
        borderRightWidth: 1,
        paddingVertical: 2,
        borderColor: '#aaa'
    }
})