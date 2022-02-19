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
        borderTopWidth: 0.5,
        marginHorizontal: 20,
        borderColor: '#1F4073',
        flexDirection: 'row',
        marginTop: 10
    }
})