import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Text } from '../../../component/CustomComponent'
import { initPlannerState, PlannerDataType, useContextOfPlanner } from '../../PlannerProvider'
import MainStopWatch from './MainStopWatch'
import DatePicker from 'react-native-date-picker'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Header() {
    const cont = useContextOfPlanner()
    const [date, setDate] = useState(new Date(cont.data.date))
    const [open, setOpen] = useState(false)
    return <View style={styles.container}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
            <TouchableOpacity style={{
                flexDirection: 'row',
                alignItems: 'center',
            }} onPress={() => setOpen(true)}>
                <Icon name='calendar-month' color='#151515' size={17} />
                <Text style={{ marginLeft: 10 }}>{cont.data.date}</Text>
            </TouchableOpacity>
            <Text style={styles.dDay}>
                {cont.data.dDay < 0 ? ' ' : (cont.data.dDay == 0 ? 'D-DAY' : 'D-' + cont.data.dDay)}</Text>
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
                <View style={{ flex: 3 }}>
                    <Text style={{
                        fontSize: 11,
                        marginRight: 30,
                        paddingTop: 11,
                    }}>{cont.data.comment}</Text>
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
        <DatePicker
            modal
            open={open}
            date={date ? date : new Date()}
            onConfirm={(date) => {
                setOpen(false)
                setDate(date)
                let next: PlannerDataType = initPlannerState
                AsyncStorage.getItem('Planner' + date.toISOString().slice(0, 10))
                    .then(todayPlannerData => {
                        if (todayPlannerData !== null)
                            next = JSON.parse(todayPlannerData)
                        next.date = date.toISOString().slice(0, 10)
                        AsyncStorage.getItem('PlannerDday')
                            .then(dDay => {
                                if (dDay !== null) {
                                    const diff = new Date(dDay).getTime() - date.getTime()
                                    next.dDay = Math.floor(diff / (1000 * 3600 * 24))
                                }
                                cont.setData(next)
                            })
                    })
            }}
            onCancel={() => {
                setOpen(false)
            }}
            mode='date'
        />
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
    },
    dDay: {
        color: '#151515'
    }
})