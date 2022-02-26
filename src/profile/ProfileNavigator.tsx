import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Profile from './Profile'
import ProfileV2 from './ProfileMain/ProfileV2'
import StudyHistory from './ProfileHistory/StudyHistory'
import ProfileSetting from './ProfileSetting/ProfileSetting'

export default function ProfileNavigator() {
    const Stack = createStackNavigator()
    return <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name='ProfileMain' component={ProfileV2} />
        <Stack.Screen name='StudyHistory' component={StudyHistory}/>
        <Stack.Screen name='ProfileSetting' component={ProfileSetting}/>
    </Stack.Navigator>
}