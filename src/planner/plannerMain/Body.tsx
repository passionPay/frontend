import React from 'react'
import { View } from 'react-native'
import { PlannerDataType } from './PlannerMain'

export default function Body({data}: {data: PlannerDataType}) {
    return <View style={{borderTopWidth: 1, marginHorizontal: 20, borderColor: '#aaa'}}/>
}