import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Group from './GroupMain/Group'
import GroupSetting from './ManageGroup/GroupMainSetting/GroupMainSetting'
import EditNotice from './ManageGroup/MyGroupSetting/EditNotice'
import ManageMembers from './ManageGroup/MyGroupSetting/ManageMembers/ManageMembers'

import MakeGroup from './ManageGroup/MakeGroup/MakeGroup'


import MyGroup from './MyGroup/MyGroup'
import MyGroupSetting from './ManageGroup/MyGroupSetting/MyGroupSetting'
import MyGroupGoal from './MyGroup/MyGroupGoal'
import MyGroupStat from './MyGroup/MyGroupStat'
import MyGroupVBoard from './MyGroup/MyGroupVBoard'
import MyGroupRank from './MyGroup/MyGroupRank'
import VerifyPost from './MyGroup/VeryfyPost'

import OtherGroup from './OtherGroup/OtherGroup'

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

        <Stack.Screen name='OtherGroup' component={OtherGroup}/>

    </Stack.Navigator>
}