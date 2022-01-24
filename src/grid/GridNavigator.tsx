import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Edit from './Edit'
import Grid from './Grid'
export default function GridNavigator() {
    const Stack = createStackNavigator()
    return <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name='GridMain' component={Grid} />
        <Stack.Screen name='Edit' component={Edit} />
    </Stack.Navigator>
}