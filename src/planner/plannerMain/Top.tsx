import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, TouchableIcon } from '../../component/CustomComponent'
import { PlannerDataType } from './PlannerMain'

export default function Top({ data }: { data: PlannerDataType }) {
    return <View style={styles.container}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text>🔥</Text>
            <Text style={{ marginLeft: 3 }}>{data.fireCount}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableIcon iconProps={{ name: 'pencil-outline', size: 25, color: '#000' }}
                style={{ marginRight: 20 }} />
            <TouchableIcon iconProps={{ name: 'cog-outline', size: 25, color: '#000' }}/>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 20,
        // backgroundColor: 'green'
    }
})