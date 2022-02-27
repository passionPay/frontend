import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Text } from '../../../component/CustomComponent'
import { useContextOfPlanner } from '../../PlannerProvider'
import MainStopWatch from './MainStopWatch'

export default function Header() {
    const cont = useContextOfPlanner()
    const data = cont.data
    return <View style={styles.container}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
            <TouchableOpacity style={{
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <Icon name='calendar-month' color='#151515' size={17} />
                <Text style={{ marginLeft: 10 }}>{data.date}</Text>
            </TouchableOpacity>
            <Text style={styles.dDay}>
                {data.dDay < 0 ? ' ' : 'D-' + data.dDay}</Text>
        </View>
        <View style={{
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            borderTopWidth: 0.5,
            borderBottomWidth: 0.5,
            paddingHorizontal: 5,
            marginVertical: 10,
            paddingTop: 10,
            borderColor: '#151515'
        }}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={[styles.tag, { flex: 3 }]}>COMMENT</Text>
                <Text style={[styles.tag, { flex: 2 }]}>TOTAL TIME</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{flex: 3}}>
                    <Text style={{
                        fontSize: 11,
                        marginRight: 30,
                        paddingTop: 11,
                    }}>{data.comment}</Text>
                </View>
                <TouchableOpacity style={{
                    flex: 2,
                    paddingTop: 10,
                    paddingBottom: 15
                }}>
                    <MainStopWatch />
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
        fontSize: 12,
        marginTop: 5,
        // marginBottom: 10,
    },
    dDay: {
        // alignSelf: 'center',
        color: '#151515'
    }
})