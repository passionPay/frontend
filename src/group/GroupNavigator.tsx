import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Group from './GroupMain/Group'
import GroupSetting from './ManageGroup/GroupMainSetting/GroupMainSetting'
import MyGroupNavigator from './MyGroup/MyGroupNavigator'
import OtherGroup from './OtherGroup/OtherGroup'
import MyGroup from './MyGroup/MyGroup'
import MakeGroup from './ManageGroup/MakeGroup/MakeGroup'


export default function StudyGroupNavigator() {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name='GroupMain' component={Group} />
            <Stack.Screen name='GroupSetting' component={GroupSetting} />
            <Stack.Screen name='MakeGroup' component={MakeGroup} />
            <Stack.Screen name='MyGroup' component={MyGroupNavigator} />
            <Stack.Screen name='OtherGroup' component={OtherGroup} />
        </Stack.Navigator>
    )

}