import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Group from './Group'

export default function StudyGroupNavigator() {
    const Stack = createStackNavigator()
    return <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name='GroupMain' component={Group} />
    </Stack.Navigator>
}