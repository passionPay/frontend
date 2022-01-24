import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Discover from './Discover'
import Search from './Search'
export default function DiscoverNavigator() {
    const Stack = createStackNavigator()
    return <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name='DiscoverMain' component={Discover} />
        <Stack.Screen name='Search' component={Search} />
    </Stack.Navigator>
}