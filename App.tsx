import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MainNavigator from './src/MainNavigator'
import { Provider, useContextOfAll } from './src/Provider'
import AsyncStorage from '@react-native-async-storage/async-storage'
import LoginNavigator from './src/login/LoginNavigator'

export default function App() {
  return <NavigationContainer>
    <Provider>
      <MainPage />
    </Provider>
  </NavigationContainer>
}

const MainPage = () => {
  // const cont = useContextOfAll()
  // useEffect(() => {
  //   let token: String | undefined = ''
  //   AsyncStorage.getItem('token', (err, result) => {
  //     token = result
  //   });

  //   cont.setUser({ token: token })

  //   console.log(cont.user)
  // }, [])
  // if (cont.user.token == '' || (typeof cont.user.token) === undefined)
  //   return <LoginNavigator />
  return <MainNavigator />
}




// import React, { useRef } from 'react'
// import { Animated, FlatList, Text, View } from 'react-native'
// import PostList from './src/community/communityList/PostList'

// export default function App() {
//   const offset = useRef(new Animated.Value(0)).current;
//   const HEADER_MAX = 240, HEADER_MIN = 60;
//   const headerHeight = offset.interpolate({
//     inputRange: [0, HEADER_MAX - HEADER_MIN],
//     outputRange: [HEADER_MAX, HEADER_MIN],
//     extrapolate: 'clamp'
//   })
//   const data = [{ id: '0' }, { id: '1' }, { id: '2' }]
//   const renderItem = () => <View style={{ height: 300, backgroundColor: '#fff', margin: 20, marginVertical: 20 }} />
//   return <View>
//     <FlatList
//         contentContainerStyle={{ paddingTop: 200 }}
//         nestedScrollEnabled
//         onScroll={Animated.event(
//           [{ nativeEvent: { contentOffset: { y: offset } } }],
//           { useNativeDriver: false }
//         )}
//         data={data}
//         renderItem={renderItem}
//         keyExtractor={item => item.id}
//         ListFooterComponent={<View style={{ height: 1000 }} />}
//         style={{ backgroundColor: 'royalblue' }}
//       />
//     <Animated.View style={{ height: headerHeight, position: 'absolute', top: 0, left: 0, right: 0, backgroundColor: '#aaa' }}>
//       <Text>임시</Text></Animated.View>
//   </View>
// }