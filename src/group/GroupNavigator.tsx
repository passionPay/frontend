import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Group from './Group'
import MakeGroup from './ManageGroup/MakeGroup/MakeGroup'
import MyGroup from './myGroup/MyGroup'
import MyGroupGoal from './myGroup/MyGroupGoal'
import MyGroupStat from './myGroup/MyGroupStat'
import MyGroupVBoard from './myGroup/MyGroupVBoard'
import MyGroupRank from './myGroup/MyGroupRank'
import VerifyPost from './myGroup/VeryfyPost'

export default function StudyGroupNavigator() {
    const Stack = createStackNavigator()
    return <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name='GroupMain' component={Group} />
        <Stack.Screen name='MakeGroup' component={MakeGroup} />
        <Stack.Screen name='MyGroup' component={MyGroup} />
        <Stack.Screen name='MyGroupGoal' component={MyGroupGoal} />
        <Stack.Screen name='MyGroupStat' component={MyGroupStat} />
        <Stack.Screen name='MyGroupVBoard' component={MyGroupVBoard} />
        <Stack.Screen name='MyGroupRank' component={MyGroupRank} />
        <Stack.Screen name='VerifyPost' component={VerifyPost} />
    </Stack.Navigator>
}