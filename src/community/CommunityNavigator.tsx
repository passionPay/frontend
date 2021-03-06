import { getFocusedRouteNameFromRoute } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import Community from './Community'
import CommunityList from './communityList/CommunityList'
import PostDetail from './postDetail/PostDetail'
import QnaDetail from './qnaDetail/QnaDetail'

export default function CommunityNavigator({ navigation, route }) {
    const Stack = createStackNavigator()
    useEffect(() => {
        if (getFocusedRouteNameFromRoute(route) == 'CommunityMain'
            || getFocusedRouteNameFromRoute(route) === undefined)
            navigation.setOptions({ tabBarVisible: true })
        else
            navigation.setOptions({ tabBarVisible: false })
    }, [])
    return <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name='CommunityMain' component={Community} />
        <Stack.Screen name='CommunityList' component={CommunityList} />
        <Stack.Screen name='PostDetail' component={PostDetail} />
        <Stack.Screen name='QnaDetail' component={QnaDetail} />
    </Stack.Navigator>
}