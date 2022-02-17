import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import CommunityNavigator from './community/CommunityNavigator'
import DiscoverNavigator from './discover/DiscoverNavigator'
import PlannerNavigator from './planner/PlannerNavigator'
import ProfileNavigator from './profile/ProfileNavigator'
import StudyGroupNavigator from './group/GroupNavigator'
import { ParamListBase, RouteProp } from '@react-navigation/native'

export default function MainNavigator() {
  const Tab = createBottomTabNavigator()

  return <Tab.Navigator screenOptions={screenOptions}>
    <Tab.Screen name="Discover" component={DiscoverNavigator} />
    <Tab.Screen name="Community" component={CommunityNavigator} />
    <Tab.Screen name='Planner' component={PlannerNavigator} />
    <Tab.Screen name='Group' component={StudyGroupNavigator} />
    <Tab.Screen name='Profile' component={ProfileNavigator} />
  </Tab.Navigator>
}

const screenOptions = ({ route }: { route: RouteProp<ParamListBase, string> }) => {
  return {
    tabBarIcon: ({ focused, color, size }: { focused: boolean, color: string, size: number }) => {
      const { name } = route
      return <Icon name={icons[name]} size={focused ? size + 6 : size} color={color} />
    },
    headerShown: false,
    tabBarShowLabel: true,
  }
}

const icons: Record<string, string> = {
  Discover: 'format-list-text',
  Community: 'message-processing',
  Planner: 'home',
  Group: 'account-group',
  Profile: 'account'
}