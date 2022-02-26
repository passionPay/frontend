import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Profile from './Profile'
import ProfileV2 from './ProfileMain/ProfileV2'
import ProfileHistory from './ProfileHistory/ProfileHistory'
import Setting from './Setting/Setting'


import PublicProfileNavigator from './PublicProfile/PublicProfileNavigator'

export default function ProfileNavigator() {
    const Stack = createStackNavigator()
    return <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name='ProfileMain' component={ProfileV2} />
        <Stack.Screen name='ProfileHistory' component={ProfileHistory}/>
        <Stack.Screen name='Setting' component={Setting}/>
        <Stack.Screen name='PublicProfile' component={PublicProfileNavigator}/>
    </Stack.Navigator>
}