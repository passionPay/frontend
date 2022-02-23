import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Group from './Group'
import GroupSetting from './ManageGroup/GroupMainSetting/GroupMainSetting'
import EditNotice from './ManageGroup/MyGroupSetting/EditNotice'
import ManageMembers from './ManageGroup/MyGroupSetting/ManageMembers/ManageMembers'

import MakeGroup from './ManageGroup/MakeGroup/MakeGroup'


import MyGroup from './myGroup/MyGroup'
import MyGroupSetting from './ManageGroup/MyGroupSetting/MyGroupSetting'
import MyGroupGoal from './myGroup/MyGroupGoal'
import MyGroupStat from './myGroup/MyGroupStat'
import MyGroupVBoard from './myGroup/MyGroupVBoard'
import MyGroupRank from './myGroup/MyGroupRank'
import VerifyPost from './myGroup/VeryfyPost'

export default function StudyGroupNavigator() {
    const Stack = createStackNavigator()
    return <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name='GroupMain' component={Group} />
        <Stack.Screen name='GroupSetting' component={GroupSetting} />
        <Stack.Screen name='EditNotice' component={EditNotice} />
        <Stack.Screen name='ManageMembers' component={ManageMembers} />

        <Stack.Screen name='MakeGroup' component={MakeGroup}/>
        <Stack.Screen name='MyGroup' component={MyGroup}/>
        <Stack.Screen name='MyGroupSetting' component={MyGroupSetting} />
        <Stack.Screen name='MyGroupGoal' component={MyGroupGoal} />
        <Stack.Screen name='MyGroupStat' component={MyGroupStat} />
        <Stack.Screen name='MyGroupVBoard' component={MyGroupVBoard} />
        <Stack.Screen name='MyGroupRank' component={MyGroupRank} />
        <Stack.Screen name='VerifyPost' component={VerifyPost} />
    </Stack.Navigator>
}