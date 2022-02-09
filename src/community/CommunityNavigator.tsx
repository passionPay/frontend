import { getFocusedRouteNameFromRoute } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Community from './Community'
import CommunityList from './communityList/CommunityList'

export default function CommunityNavigator({ navigation, route }) {
    const Stack = createStackNavigator()
    if (getFocusedRouteNameFromRoute(route) == 'CommunityMain'
        || getFocusedRouteNameFromRoute(route) === undefined)
        navigation.setOptions({ tabBarVisible: true })
    else
        navigation.setOptions({ tabBarVisible: false })
    return <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name='CommunityMain' component={Community} />
        <Stack.Screen name='CommunityList' component={CommunityList} />
    </Stack.Navigator>
}