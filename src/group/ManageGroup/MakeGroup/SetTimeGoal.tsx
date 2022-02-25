import React, { useCallback, useEffect, useRef, useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, Dimensions, StyleSheet } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'

const { width, height } = Dimensions.get('window')

const SetTimeGoal = ({ state, dispatch }) => {

    const [hourValue, setHourValue] = useState(0)
    const [hourOpen, setHourOpen] = useState(false)
    const [hourItems, setHourItems] = useState([...Array(25)].map((v, i) => ({ label: `${i}시간`, value: i })))
    const [minuteValue, setMinuteValue] = useState(0)
    const [minuteOpen, setMinuteOpen] = useState(false)
    const [minuteItems, setMinuteItems] = useState([...Array(6)].map((v, i) => ({ label: `${i * 10}분`, value: i * 10 })));

    const onHourOpen = useCallback(() => {
        setMinuteOpen(false)
    }, [])

    const onMinuteOpen = useCallback(() => {
        setHourOpen(false)
    }, [])


    useEffect(() => {
        if (hourValue === 24) {
            setMinuteValue(0)
            setMinuteItems([...Array(1)].map((v, i) => ({ label: `${i * 10}분`, value: i * 10 })))
        }
        else {
            setMinuteItems([...Array(6)].map((v, i) => ({ label: `${i * 10}분`, value: i * 10 })))
        }
        dispatch({
            type: 'CHANGE_INPUT',
            name: 'groupTimeGoal',
            value: hourValue * 60 * 60 * 1000 + minuteValue * 60 * 1000
        })
    }, [hourValue, minuteValue, dispatch])

    useEffect(() => {
        console.log("setTimeGoal state changed")
    }, [state])
    return (
        <>
            <View style={[styles.row,]}>
                <Text style={styles.tag}>하루 목표 시간</Text>
                <View style={{
                    flexDirection: 'row',
                    // height:120,
                    // marginBottom:-85,
                }}>
                    <DropDownPicker
                        style={{
                            height: 35,
                        }}
                        containerStyle={{
                            width: 100,
                            // height:170,
                            // zIndex:hourOpen?1:0

                        }}
                        maxHeight={120}
                        autoScroll={true}
                        open={hourOpen}
                        onOpen={onHourOpen}
                        value={hourValue}
                        items={hourItems}
                        setOpen={setHourOpen}
                        setValue={setHourValue}
                        setItems={setHourItems}
                        listMode="SCROLLVIEW"
                    />
                    <DropDownPicker
                        style={{
                            height: 35,

                        }}
                        containerStyle={{
                            marginLeft: 10,
                            width: 100,
                            // height:170,
                            // zIndex:hourOpen?1:0

                        }}
                        maxHeight={120}
                        autoScroll={true}
                        open={minuteOpen}
                        onOpen={onMinuteOpen}
                        value={minuteValue}
                        items={minuteItems}
                        setOpen={setMinuteOpen}
                        setValue={setMinuteValue}
                        setItems={setMinuteItems}
                        listMode="SCROLLVIEW"
                    />
                </View>
            </View>
        </>
    )
}

export default SetTimeGoal

const styles = StyleSheet.create({
    tag: {
        fontSize: 16,
        paddingRight: 10,
        paddingLeft: 10,
    },
    row: {
        borderBottomWidth: 1,
        flexDirection: 'row', alignItems: 'center', paddingVertical: 7
    },
})