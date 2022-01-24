import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Add from './Add'
import Planner from './Planner'

export default function PlannerNavigator() {
    const Stack = createStackNavigator()
    return <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name='Planner' component={Planner} />
        <Stack.Screen name='Add' component={Add} />
    </Stack.Navigator>
}