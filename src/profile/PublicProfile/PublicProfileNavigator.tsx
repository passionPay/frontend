import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import PublicProfile from './PublicProfile'
import ProfileHistory from '../ProfileHistory/ProfileHistory'
// import ProfileHI


export default function StudyGroupNavigator() {
    const Stack = createStackNavigator()
    return <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name='PublicProfile' component={PublicProfile} />
        <Stack.Screen name='ProfileHistory' component={ProfileHistory} />

    </Stack.Navigator>
}