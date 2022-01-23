import React from 'react'
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/Home';
import HomeReal from './src/Home_real';

export default function App() {
  // const Tab = AnimatedTabBarNavigator();
  // return <NavigationContainer>
  //   <Tab.Navigator appearance={{topPadding: 20}}>
  //     <Tab.Screen name="Home" component={Home} />
  //   </Tab.Navigator>
  // </NavigationContainer>
  return <HomeReal />
}