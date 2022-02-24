import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Text, TouchableIcon } from '../../../component/CustomComponent'
import { useContextOfPlanner } from '../../PlannerProvider'

export default function Top() {
    const cont = useContextOfPlanner()
    const data = cont.data
    return <View style={styles.container}>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name='heart-outline' size={15} color='#EE4A49' />
                {/* <Text style={{fontSize: 12}}>🔥</Text> */}
                <Text style={{ marginLeft: 2, color: '#EE4A49', fontSize: 12 }}>{data.fireCount}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 8 }}>
                <Icon name='tooltip-text-outline' size={15} color='#1F4073' />
                <Text style={{ padding: 3, color: '#1F4073', fontSize: 12 }}>2</Text>
            </View>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableIcon iconProps={{ name: 'pencil-outline', size: 25, color: '#000' }} />
            {/* <TouchableIcon iconProps={{ name: 'cog-outline', size: 25, color: '#000' }}
                style={{ marginLeft: 20 }} /> */}
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