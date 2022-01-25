import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Login from './Login'
import SignUp from './SignUp'

export default function LoginNavigator() {
    const Stack = createStackNavigator()
    return <Stack.Navigator screenOptions={{ headerShown: false,animationEnabled: false }} >
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='SignUp' component={SignUp} />
    </Stack.Navigator>
}