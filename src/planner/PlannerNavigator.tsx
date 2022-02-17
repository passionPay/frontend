import { getFocusedRouteNameFromRoute } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Add from './Add'
import Edit from './Edit'
import PlannerList from './PlannerList'
import PlannerMain from './plannerMain/PlannerMain'

export default function PlannerNavigator({ navigation, route }) {
    const Stack = createStackNavigator()
    if (getFocusedRouteNameFromRoute(route) == 'PlannerMain'
        || getFocusedRouteNameFromRoute(route) === undefined)
        navigation.setOptions({ tabBarVisible: true })
    else
        navigation.setOptions({ tabBarVisible: false })
    return <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name='PlannerMain' component={PlannerMain} />
        <Stack.Screen name='PlannerList' component={PlannerList} />
        <Stack.Screen name='Add' component={Add} />
        <Stack.Screen name='Edit' component={Edit} />
    </Stack.Navigator>
}