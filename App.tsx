import React from 'react'
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import { NavigationContainer } from '@react-navigation/native';
import { Home, Home2, Home3, Home4 } from './src/Home';

export default function App() {
  const Tab = AnimatedTabBarNavigator();
  return <NavigationContainer>
    <Tab.Navigator appearance={{topPadding: 20}}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Home2" component={Home2} />
      <Tab.Screen name="Home3" component={Home3} />
      <Tab.Screen name="Home4" component={Home4} />
    </Tab.Navigator>
  </NavigationContainer>
}