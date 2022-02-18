import React from 'react'
import { StyleSheet, View } from 'react-native'
import { PlannerDataType } from '../PlannerMain'
import Tasks from './Tasks'
import TimeBlock from './TimeBlock'

export default function Body({ data }: { data: PlannerDataType }) {
    return <View style={styles.container}>
        <Tasks tasks={data.tasks} />
        <TimeBlock />
    </View>
}

const styles = StyleSheet.create({
    container: {
        borderTopWidth: 1,
        marginHorizontal: 20,
        borderColor: '#aaa',
        flexDirection: 'row',
        marginTop: 10
    }
})