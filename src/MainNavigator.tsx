import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import DiscoverNavigator from './discover/DiscoverNavigator'
import GridNavigator from './grid/GridNavigator'
import GoToPlanner from './planner/GoToPlanner'
import PlannerNavigator from './planner/PlannerNavigator'
import ProfileNavigator from './profile/ProfileNavigator'

export default function MainNavigator() {
  const Stack = createStackNavigator()
  return <Stack.Navigator screenOptions={{headerShown: false}}>
  <Stack.Screen name='Tab' component={TabBar} />
    <Stack.Screen name='PlannerNavigator' component={PlannerNavigator} />
  </Stack.Navigator>
}

const Tab = AnimatedTabBarNavigator();

const TabBar = () => <Tab.Navigator appearance={{ topPadding: 10 }}>
  <Tab.Screen name="Discover" component={DiscoverNavigator} options={{tabBarIcon: () => <Icon name='home' size={20} color='black'/>}} />
  <Tab.Screen name="Grid" component={GridNavigator} options={{tabBarIcon: () => <Icon name='view-grid-plus' size={20} color='black'/>}} />
  <Tab.Screen name='Planner' component={GoToPlanner} options={{tabBarIcon: () => <Icon name='book-play' size={20} color='black'/>}} />
  <Tab.Screen name='Profile' component={ProfileNavigator} options={{tabBarIcon: () => <Icon name='contacts' size={20} color='black'/>}} />
</Tab.Navigator>