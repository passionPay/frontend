import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar"
import Discover from './discover/Discover'
import PlannerNavigator from './planner/PlannerNavigator'

export default function MainNavigator() {
  const Stack = createStackNavigator()
  return <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name='PlannerNavigator' component={PlannerNavigator} />
    <Stack.Screen name='Tab' component={TabBar} />
  </Stack.Navigator>
}

const Tab = AnimatedTabBarNavigator();

const TabBar = () => <Tab.Navigator appearance={{ topPadding: 10 }}>
  <Tab.Screen name="Discover" component={Discover} />
</Tab.Navigator>