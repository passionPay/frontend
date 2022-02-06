import React from 'react'
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import CommunityNavigator from './community/CommunityNavigator'
import DiscoverNavigator from './discover/DiscoverNavigator'
import PlannerNavigator from './planner/PlannerNavigator'
import ProfileNavigator from './profile/ProfileNavigator'
import StudyGroupNavigator from './group/GroupNavigator'

export default function MainNavigator() {
  const Tab = AnimatedTabBarNavigator()

  return <Tab.Navigator
    appearance={{
      topPadding: 10, floating: false, activeTabBackgrounds: '#6667AB66'
    }} initialRouteName='Planner' backBehavior='initialRoute'>
    <Tab.Screen name="Discover" component={DiscoverNavigator}
      options={{ tabBarIcon: () => getTabBarIcon('home') }} />
    <Tab.Screen name="Community" component={CommunityNavigator}
      options={{ tabBarIcon: () => getTabBarIcon('message-processing') }} />
    <Tab.Screen name='Planner' component={PlannerNavigator}
      options={{ tabBarIcon: () => getTabBarIcon('book-open-page-variant') }} />
      <Tab.Screen name='Group' component={StudyGroupNavigator}
        options={{ tabBarIcon: () => getTabBarIcon('account-group') }} />
    <Tab.Screen name='Profile' component={ProfileNavigator}
      options={{ tabBarIcon: () => getTabBarIcon('account') }} />
  </Tab.Navigator>
}

const getTabBarIcon = (name: string) =>
  <Icon name={name} size={20} color='black' />