import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Text, TouchableIcon } from '../../../component/CustomComponent'
import MainStopWatch from './MainStopWatch'
import { PlannerDataType } from '../PlannerMain'

export default function Header({ data }: { data: PlannerDataType }) {
    return <View style={styles.container}>
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
        }}>
            <TouchableOpacity style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Icon name='calendar-month' color='#000' size={17} style={{marginTop: 2}}/>
                <Text style={{ marginLeft: 10, color: '#000', fontWeight: 'bold' }}>{data.date}</Text>
            </TouchableOpacity>
            <Text style={{ color: '#000', fontWeight: 'bold' }}>
                {data.dDay == -1 ? '' : 'D-' + data.dDay}</Text>
        </View>
        <TouchableOpacity style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 15,
        }}>
            {/* <Icon name='play' size={28} color='#000' style={{marginRight: 10}} /> */}
            {/* <Text style={{ fontSize: 12, color: '#777' }}>▶</Text> */}
            {/* <Text style={{
                alignSelf: 'center',
                fontSize: 30,
                alignItems: 'center',
                marginLeft: 5,
                marginRight: 15,
            }}>12:00:11</Text> */}
            <MainStopWatch initSec={98765} />
        </TouchableOpacity>
        {data.comment == '' ? undefined :
            <Text style={{
                alignSelf: 'center',
                marginHorizontal: 10,
                fontSize: 11,
                marginBottom: 15,
                color: '#333',
                // fontFamily: 'KoPub'
            }}>{data.comment}</Text>}
    </View>
}

function Tag(tagName: string, flex: number) {
    return <View style={{ flexDirection: 'row', alignItems: 'center', flex: flex }}>
        <Text style={styles.tag}>{tagName}</Text>
        <View style={{
            borderColor: '#aaa',
            borderBottomWidth: 1,
            height: 0,
            flex: 1,
            marginRight: flex == 3 ? 7 : 0
        }} />
    </View>
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    tag: {
        marginRight: 3,
        fontSize: 8,
        color: '#999'
    }
})