import { getFocusedRouteNameFromRoute } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import PlannerMain from './plannerMain/PlannerMain'
import { PlannerProvider } from './PlannerProvider'

export default function PlannerNavigator({ navigation, route }) {
    const Stack = createStackNavigator()
    useEffect(() => {
        if (getFocusedRouteNameFromRoute(route) == 'PlannerMain'
            || getFocusedRouteNameFromRoute(route) === undefined)
            navigation.setOptions({ tabBarVisible: true })
        else
            navigation.setOptions({ tabBarVisible: false })
    }, [])
    return <PlannerProvider>
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name='PlannerMain' component={PlannerMain} />
        </Stack.Navigator>
    </PlannerProvider>
}