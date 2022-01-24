import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Discover() {
    const navi = useNavigation<any>()
    return <>
        <TouchableOpacity onPress={() => { navi.navigate('PlannerNavigator') }} style={styles.icon}>
            <Icon name='chevron-left' size={30} color='#5E5E64' /></TouchableOpacity>
        <Text style={{ color: 'red', fontSize: 20 }}>Discover</Text>
    </>
}

const styles = StyleSheet.create({
    
    icon: {
        alignSelf: 'flex-start', backgroundColor: '#D8E0E7',
        marginTop: '5%', marginLeft: '5%', borderRadius: 5,
        borderWidth: 0, borderColor: '#DFE3EA', elevation: 5,
        overflow: 'hidden'
    }
})