import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Profile from './Profile'

export default function ProfileNavigator() {
    const Stack = createStackNavigator()
    return <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name='ProfileMain' component={Profile} />
    </Stack.Navigator>
}