import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Group from './GroupMain/Group'
import GroupSetting from './ManageGroup/GroupMainSetting/GroupMainSetting'
import SetNotice from './MyGroup/MyGroupSetting/SetNotice'
import GroupMembers from './MyGroup/MyGroupSetting/ManageMembers/GroupMembers'

import MakeGroup from './ManageGroup/MakeGroup/MakeGroup'


import MyGroup from './MyGroup/MyGroup'
import MyGroupSetting from './MyGroup/MyGroupSetting/MyGroupSetting'
import MyGroupGoal from './MyGroup/MyGroupGoal/MyGroupGoal'
import MyGroupStat from './MyGroup/MyGroupStat'
import MyGroupVBoard from './MyGroup/MyGroupVBoard/MyGroupVBoard'
import MyGroupRank from './MyGroup/MyGroupRank'
import VerifyPost from './MyGroup/MyGroupVBoard/VerifyPost/VerifyPost'

import OtherGroup from './OtherGroup/OtherGroup'
import WriteVerifyPost from './MyGroup/MyGroupVBoard/WritePost/WriteVerifyPost'

export default function StudyGroupNavigator() {
    const Stack = createStackNavigator()
    return <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name='GroupMain' component={Group} />
        <Stack.Screen name='GroupSetting' component={GroupSetting} />
        <Stack.Screen name='SetNotice' component={SetNotice} />
        <Stack.Screen name='GroupMembers' component={GroupMembers} />

        <Stack.Screen name='MakeGroup' component={MakeGroup} />
        <Stack.Screen name='MyGroup' component={MyGroup} />
        <Stack.Screen name='MyGroupSetting' component={MyGroupSetting} />
        <Stack.Screen name='MyGroupGoal' component={MyGroupGoal} />
        <Stack.Screen name='MyGroupStat' component={MyGroupStat} />
        <Stack.Screen name='MyGroupRank' component={MyGroupRank} />

        <Stack.Screen name='MyGroupVBoard' component={MyGroupVBoard} />
        <Stack.Screen name='VerifyPost' component={VerifyPost} />
        <Stack.Screen name='WriteVerifyPost' component={WriteVerifyPost} />
        


        <Stack.Screen name='OtherGroup' component={OtherGroup} />

    </Stack.Navigator>
}