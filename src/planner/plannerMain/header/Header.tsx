import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Text, TouchableIcon } from '../../../component/CustomComponent'
import MainStopWatch from './MainStopWatch'
import { PlannerDataType } from '../PlannerMain'

export default function Header({ data }: { data: PlannerDataType }) {
    return <View style={styles.container}>
        <TouchableOpacity style={{
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'flex-start'
        }}>
            <Icon name='calendar-month' color='#000' size={17} style={{ marginTop: 2 }} />
            <Text style={{ marginLeft: 10, color: '#000', fontWeight: 'bold' }}>{data.date}</Text>
        </TouchableOpacity>
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            borderTopWidth: 0.5,
            borderBottomWidth: 0.5,
            padding: 5,
            marginVertical: 10
        }}>
            <View style={{ flex: 5, paddingRight: 5 }}>
                <Text style={styles.tag}>D-DAY</Text>
                <Text style={ styles.dDay }>
                    {data.dDay == -1 ? '' : 'D-' + data.dDay}</Text>
                <Text style={styles.tag}>COMMENT</Text>
                <Text style={{
                    fontSize: 11,
                }}>{data.comment}</Text>
            </View>
            <View style={{ flex: 4 }}>
                <Text style={styles.tag}>TOTAL TIME</Text>
                <TouchableOpacity style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginVertical: 15,
                }}>
                    <MainStopWatch initSec={98765} />
                </TouchableOpacity>
            </View>
        </View>
    </View>
}

function Tag(tagName: string, flex: number) {
    return <View style={{ flexDirection: 'row', alignItems: 'center', flex: flex }}>
        <Text style={{
            marginRight: 3,
            fontSize: 8,
            color: '#999'
        }}>{tagName}</Text>
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
        fontFamily: 'SourceSansPro-Bold',
        fontSize: 10,
        marginVertical: 5
    },
    dDay: {
        color: '#000',
        fontWeight: 'bold',
        alignSelf: 'center',
        // fontSize: 18,
        fontFamily: 'kita'
        // marginVertical: 5
    }
})