import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import SignUp from './SignUp'

export default function LoginNavigator() {
    const Stack = createStackNavigator()
    return <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name='SignUp' component={SignUp} />
    </Stack.Navigator>
}