import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Profile from './Profile'
import ProfileV2 from './ProfileV2'

export default function ProfileNavigator() {
    const Stack = createStackNavigator()
    return <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name='ProfileMain' component={ProfileV2} />
    </Stack.Navigator>
}