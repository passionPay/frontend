import React from 'react'
import { StyleSheet, TouchableOpacity, View, ViewProps } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Text, TouchableIcon } from '../../component/CustomComponent'
import { PlannerDataType } from './PlannerMain'

export default function Header({ data }: { data: PlannerDataType }) {
    return <View style={styles.container}>
        <View style={{ flexDirection: 'row' }}>
            {Tag('DATE', 3)}
            {Tag('D-DAY', 2)}
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10 }}>
            <TouchableOpacity style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                flex: 3,
            }}>
                <Icon name='calendar-month' color='#000' size={20} />
                <Text style={{ marginLeft: 10 }}>{data.date}</Text>
            </TouchableOpacity>
            <View style={{ marginLeft: 10, flex: 2 }}>
                {data.dDay == '' ? undefined :
                    <Text style={{
                        alignSelf: 'center',
                        fontSize: 12,
                        marginVertical: 10
                    }}>{data.dDay}</Text>}

            </View>
        </View>
        <View style={{ flexDirection: 'row', }}>
            {Tag('COMMENT', 3)}
            {Tag('TOTAL TIME', 2)}
        </View>
        <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
            <Text style={{ alignSelf: 'center', flex: 3, fontSize: 12, marginHorizontal: 10 }}>{data.comment}</Text>
            <View style={{ marginLeft: 10, flex: 2 }}>
                {data.dDay == '' ? undefined :
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{
                            alignSelf: 'center',
                            fontSize: 20,
                            marginVertical: 10,
                            alignItems: 'center'
                        }}>12:00:11</Text>
                        <Text style={{ fontSize: 10, marginLeft: 5 }}>▶</Text>
                    </View>}

            </View>
        </View>
    </View >
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