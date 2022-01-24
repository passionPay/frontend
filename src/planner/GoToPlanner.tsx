import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import LottieView from 'lottie-react-native'

export default function GoToPlanner() {
    const navi = useNavigation<any>()
    return <TouchableOpacity style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: 'white' }}
    onPress={() => {navi.navigate('PlannerNavigator')}}>
        <LottieView
            source={require("../../images/study2.json")}
            loop
            autoPlay/>
        <Text style={{
            alignSelf: 'center', color: 'grey',
            fontFamily: 'GodoM', marginBottom: '50%'
        }}>클릭하여 입장</Text>
    </TouchableOpacity>
}