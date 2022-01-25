import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Add from './Add'
import Edit from './Edit'
import Planner from './Planner'

export default function PlannerNavigator() {
    const Stack = createStackNavigator()
    return <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name='PlannerMain' component={Planner} />
        <Stack.Screen name='Add' component={Add} />
        <Stack.Screen name='Edit' component={Edit} />
    </Stack.Navigator>
}