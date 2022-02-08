import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Group from './Group'
import MyGroup from './MyGroup'

export default function StudyGroupNavigator() {
    const Stack = createStackNavigator()
    return <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name='GroupMain' component={Group} />
        <Stack.Screen name='MyGroup' component={MyGroup} />
    </Stack.Navigator>
}