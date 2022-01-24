import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

export default function GoToPlanner() {
    const navi = useNavigation<any>()
    return <TouchableOpacity onPress={() => {navi.navigate('PlannerNavigator')}} style={{flex: 1}}>
        <Text>GoToPlanner</Text></TouchableOpacity>
}