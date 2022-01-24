import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Discover from './discover/Discover'
import GridNavigator from './grid/GridNavigator'
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
  <Tab.Screen name="Discover" component={Discover} options={{tabBarIcon: () => <Icon name='home' size={17} color='black'/>}} />
  <Tab.Screen name="GridNavigator" component={GridNavigator} options={{tabBarIcon: () => <Icon name='home' size={17} color='black'/>}} />
</Tab.Navigator>