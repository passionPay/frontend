import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

export default function Planner() {
    const navi = useNavigation<any>()
    return <TouchableOpacity style={{flex: 1}} onPress={() => {navi.navigate('PlannerList')}}>
        <Text>플래너</Text></TouchableOpacity>
}