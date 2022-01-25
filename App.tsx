import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MainNavigator from './src/MainNavigator'
import { Provider, useContextOfAll } from './src/Provider'
import { AsyncStorage } from 'react-native'
import LoginNavigator from './src/login/LoginNavigator'

// export default function App() {
//   return <NavigationContainer>
//     <MainNavigator />
//   </NavigationContainer>
// }
export default function App() {
  return <NavigationContainer>
    <Provider>
      <MainPage />
    </Provider>
  </NavigationContainer>
}

const MainPage = () => {
  const cont = useContextOfAll()
  useEffect(() => {
    let token: String | undefined = ''
    AsyncStorage.getItem('token', (err, result) => {
      token = result
    });
    
    cont.setUser({ token: token })

    console.log(cont.user)
  }, [])
  if (cont.user.token == '' || (typeof cont.user.token) === undefined)
    return <LoginNavigator />
  return <MainNavigator />
}