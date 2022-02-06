import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Community from './Community'

export default function CommunityNavigator() {
    const Stack = createStackNavigator()
    return <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name='GridMain' component={Community} />
    </Stack.Navigator>
}