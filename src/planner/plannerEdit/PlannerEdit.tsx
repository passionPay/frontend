import React, { useState } from 'react'
import { Alert, SafeAreaView, ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import { Text, TouchableIcon } from '../../component/CustomComponent'
import DatePicker from 'react-native-date-picker'
import { PlannerDataType, useContextOfPlanner } from '../PlannerProvider'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function PlannerEdit() {
    const cont = useContextOfPlanner()
    const [date, setDate] = useState(cont.data.dDay < 0 ? null
        : new Date(new Date(cont.data.date).getTime() + (1000 * 60 * 60 * 24) * cont.data.dDay))
    const [open, setOpen] = useState(false)
    const [comment, setComment] = useState(cont.data.comment)
    const [feedback, setFeedback] = useState(cont.data.evaluation)
    const navi = useNavigation<any>()

    function onPressApply() {
        Alert.alert('적용', '플래너 수정 내용을 적용하겠습니까?', [{ text: '취소' },
        {
            text: '확인', onPress: () => {
                cont.setData((prev: PlannerDataType) => {
                    let next: PlannerDataType = JSON.parse(JSON.stringify(prev))
                    next.comment = comment
                    next.evaluation = feedback
                    if (date) {
                        const diff = date.getTime() - new Date(next.date).getTime()
                        next.dDay = Math.floor(diff / (1000 * 3600 * 24))
                    }
                    else
                        next.dDay = -1
                    AsyncStorage.setItem('Planner' + next.date, JSON.stringify(next))
                    return next
                })
                if (date)
                    AsyncStorage.setItem('PlannerDday', date.toISOString().substring(0, 10))
                navi.goBack()
            }
        }])
    }

    return <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={styles.topView}>
                <TouchableIcon iconProps={{ name: 'chevron-left', size: 24, color: '#151515' }}
                    onPress={() => navi.goBack()} />
                <Text style={styles.topText}>플래너 내용 수정</Text>
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.tag}>D-DAY</Text>
                <View style={styles.dDayView}>
                    <TouchableOpacity onPress={() => setOpen(true)} style={styles.dDay}>
                        <Icon name='calendar-month' size={18} color='#151515'
                            style={{ marginRight: 8 }} />
                        <Text style={{ fontSize: 13 }}>
                            {date ? date.toISOString().substring(0, 10)
                                : 'D-DAY를 설정해주세요'}</Text>
                    </TouchableOpacity>
                    {date ? <TouchableIcon iconProps={{ name: 'delete', color: '#F73D52', size: 20 }}
                        style={{ paddingVertical: 7 }} onPress={() => setDate(null)}/>
                        : undefined}
                </View>
                <Text style={styles.tag}>COMMENT</Text>
                <TextInput style={styles.textInput} value={comment} onChangeText={setComment}
                    multiline={true} placeholder='COMMENT를 작성해주세요' />
                <Text style={styles.tag}>FEEDBACK</Text>
                <TextInput style={styles.textInput} value={feedback} onChangeText={setFeedback}
                    multiline={true} placeholder='FEEDBACK을 작성해주세요' />
                <TouchableOpacity style={styles.apply} onPress={() => onPressApply()}>
                    <Text style={{ color: '#fff' }}>적용</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
        <DatePicker
            modal
            open={open}
            date={date ? date : new Date()}
            onConfirm={(date) => {
                setOpen(false)
                setDate(date)
            }}
            onCancel={() => {
                setOpen(false)
            }}
            mode='date'
        />
    </SafeAreaView>
}

const styles = StyleSheet.create({
    topView: {
        paddingLeft: 15,
        paddingVertical: 25,
        flexDirection: 'row',
        alignItems: 'center'
    },
    topText: {
        fontSize: 16,
        paddingLeft: 15
    },
    tag: {
        fontFamily: 'SourceSansPro-Bold'
    },
    textInput: {
        fontFamily: 'GodoM',
        fontSize: 14,
        color: '#151515',
        borderBottomWidth: 0.5,
        marginTop: 10,
        marginBottom: 40,
        borderColor: '#9e9e9e',
        padding: 5
    },
    contentContainer: {
        paddingHorizontal: '10%',
        paddingVertical: 20
    },
    dDayView: {
        flexDirection: 'row'
    },
    dDay: {
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 40,
        alignItems: 'center',
        flex: 1
    },
    apply: {
        paddingVertical: 8,
        borderRadius: 10,
        backgroundColor: '#1885F2',//9BC53D
        justifyContent: 'center',
        alignItems: 'center'
    }
})