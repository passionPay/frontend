import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Profile from './Profile'
import ProfileV2 from './ProfileMain/ProfileV2'
import ProfileHistory from './ProfileHistory/ProfileHistory'
import Setting from './Setting/Setting'
import SetNickname from './Setting/ProfileSettingSection/SetNickname'
import SetResolution from './Setting/ProfileSettingSection/SetResolution'

import SetPassword from './Setting/UserInfoSettingSection/SetPassword'
import SetEmail from './Setting/ProfileSettingSection/SetEmail'


import PublicProfileNavigator from './PublicProfile/PublicProfileNavigator'

export default function ProfileNavigator() {
    const Stack = createStackNavigator()
    return <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name='ProfileMain' component={ProfileV2} />
        <Stack.Screen name='ProfileHistory' component={ProfileHistory}/>

        <Stack.Screen name='Setting' component={Setting}/>
        <Stack.Screen name='SetNickname' component={SetNickname}/>
        <Stack.Screen name='SetResolution' component={SetResolution}/>

        <Stack.Screen name='SetPassword' component={SetPassword}/>
        <Stack.Screen name='SetEmail' component={SetEmail}/>


        <Stack.Screen name='PublicProfileNavigator' component={PublicProfileNavigator}/>
    </Stack.Navigator>
}