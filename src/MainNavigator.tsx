import React from 'react'
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import DiscoverNavigator from './discover/DiscoverNavigator'
import GridNavigator from './grid/GridNavigator'
import PlannerNavigator from './planner/PlannerNavigator'
import ProfileNavigator from './profile/ProfileNavigator'

export default function MainNavigator() {
  const Tab = AnimatedTabBarNavigator()

  return <Tab.Navigator
    appearance={{
      topPadding: 10, floating: true, activeTabBackgrounds: '#6667AB66'
    }}>
    <Tab.Screen name="Discover" component={DiscoverNavigator}
      options={{ tabBarIcon: () => getTabBarIcon('home') }} />
    <Tab.Screen name="Grid" component={GridNavigator}
      options={{ tabBarIcon: () => getTabBarIcon('view-grid-plus') }} />
    <Tab.Screen name='Planner' component={PlannerNavigator}
      options={{ tabBarIcon: () => getTabBarIcon('book-play'), tabBarVisible: false }} />
    <Tab.Screen name='Profile' component={ProfileNavigator}
      options={{ tabBarIcon: () => getTabBarIcon('contacts') }} />
  </Tab.Navigator>
}

const getTabBarIcon = (name: string) =>
  <Icon name={name} size={20} color='black' />