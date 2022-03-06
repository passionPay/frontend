import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import { GroupProvider } from './MyGroupContext'

import SetNotice from '../MyGroup/MyGroupSetting/SetNotice'
import SetPrivacy from './MyGroupSetting/SetPrivacy'
import GroupMembers from '../MyGroup/MyGroupSetting/ManageMembers/GroupMembers'

import MakeGroup from '../ManageGroup/MakeGroup/MakeGroup'
import EditGroup from './MyGroupSetting/EditGroup'



import MyGroup from '../MyGroup/MyGroup'
import MyGroupSetting from '../MyGroup/MyGroupSetting/MyGroupSetting'
import MyGroupGoal from '../MyGroup/MyGroupGoal/MyGroupGoal'
import MyGroupStat from '../MyGroup/MyGroupStat'
import MyGroupVBoard from '../MyGroup/MyGroupVBoard/MyGroupVBoard'
import MyGroupRank from '../MyGroup/MyGroupRank'
import VerifyPost from '../MyGroup/MyGroupVBoard/VerifyPost/VerifyPost'
import WriteVerifyPost from '../MyGroup/MyGroupVBoard/WritePost/WriteVerifyPost'
import PublicProfileNavigator from '../../profile/PublicProfile/PublicProfileNavigator'

export default function MyGroupNavigator() {
    const Stack = createStackNavigator()
    return (
    <GroupProvider>
    <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name='MyGroupMain' component={MyGroup} />


        <Stack.Screen name='GroupMembers' component={GroupMembers} />
        <Stack.Screen name='MyGroupSetting' component={MyGroupSetting} />
        <Stack.Screen name='SetNotice' component={SetNotice} />
        <Stack.Screen name='SetPrivacy' component={SetPrivacy} />
        {/* <Stack.Screen name='MakeGroup' component={MakeGroup} /> */}
        <Stack.Screen name='EditGroup' component={EditGroup} />

        <Stack.Screen name='MyGroupGoal' component={MyGroupGoal} />
        <Stack.Screen name='MyGroupStat' component={MyGroupStat} />
        <Stack.Screen name='MyGroupRank' component={MyGroupRank} />
        
        <Stack.Screen name='MyGroupVBoard' component={MyGroupVBoard} />
        <Stack.Screen name='VerifyPost' component={VerifyPost} />
        <Stack.Screen name='WriteVerifyPost' component={WriteVerifyPost} />

        <Stack.Screen name='PublicProfileNavigator' component={PublicProfileNavigator} />

    

    </Stack.Navigator>
    </GroupProvider>
    )
}