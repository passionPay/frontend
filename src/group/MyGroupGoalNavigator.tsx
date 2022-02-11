import React from 'react'
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import CommunityNavigator from '../community/CommunityNavigator'
import DiscoverNavigator from '../discover/DiscoverNavigator'


export default function MainNavigator() {
  const Tab = AnimatedTabBarNavigator()

  return <Tab.Navigator
    appearance={{
      topPadding: 10, floating: true, activeTabBackgrounds: '#6667AB66'
    }} initialRouteName='Planner' backBehavior='initialRoute'>
    <Tab.Screen name="Discover" component={DiscoverNavigator}
      options={{ tabBarIcon: () => getTabBarIcon('home') }} />
    <Tab.Screen name="Community" component={CommunityNavigator}
      options={{ tabBarIcon: () => getTabBarIcon('message-processing') }} />
  </Tab.Navigator>
}

const getTabBarIcon = (name: string) =>
  <Icon name={name} size={20} color='black' />