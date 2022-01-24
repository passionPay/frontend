import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Grid from './Grid'
export default function GridNavigator() {
    const Stack = createStackNavigator()
    return <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name='Grid' component={Grid} />
    </Stack.Navigator>
}