import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Group from './Group'
import MyGroup from './MyGroup'
import MyGroupGoal from './MyGroupGoal'
import MyGroupStat from './MyGroupStat'
import MyGroupVBoard from './MyGroupVBoard'
import MyGroupRank from './MyGroupRank'

export default function StudyGroupNavigator() {
    const Stack = createStackNavigator()
    return <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name='GroupMain' component={Group} />
        <Stack.Screen name='MyGroup' component={MyGroup} />
        <Stack.Screen name='MyGroupGoal' component={MyGroupGoal} />
        <Stack.Screen name='MyGroupStat' component={MyGroupStat} />
        <Stack.Screen name='MyGroupVBoard' component={MyGroupVBoard} />
        <Stack.Screen name='MyGroupRank' component={MyGroupRank} />
    </Stack.Navigator>
}