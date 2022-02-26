import React, { useCallback, useState } from 'react'
import {Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'


const { width, height } = Dimensions.get('window')


export const ModalSettingItem = ({ tag, option }) => {
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <>
            <TouchableOpacity
                onPress={() => setModalVisible(true)}
                style={{
                    borderBottomWidth: 0.5,
                    borderColor: 'grey',
                    paddingVertical: 15,
                    flexDirection: 'row',
                    paddingHorizontal: width * 0.05,
                }}>

                <Text style={{
                    flex: 1,
                    marginLeft: 20,
                    fontSize: 14
                }}>{tag}</Text>
                <Text style={{
                    marginRight: 20,
                    color: 'grey'
                }}>{'>'}</Text>
            </TouchableOpacity>
            <option.modal modalVisible={modalVisible} setModalVisible={setModalVisible} data={option.modalData} />
        </>
    )
}




export const SettingItem = ({ tag, type, option }) => {
    const navigation = useNavigation<any>()
    const onPress = getOnPress(type, option, navigation)

    return (
        <>
            <TouchableOpacity
                onPress={onPress}
                style={{
                    borderBottomWidth: 0.5,
                    borderColor: 'grey',
                    paddingVertical: 15,
                    flexDirection: 'row',
                    paddingHorizontal: width * 0.05,
                }}>

                <Text style={{
                    flex: 1,
                    marginLeft: 20,
                    fontSize: 14
                }}>{tag}</Text>
                <Text style={{
                    marginRight: 20,
                    color: 'grey'
                }}>{'>'}</Text>
            </TouchableOpacity>
        </>
    )
}


const getOnPress = (type, option, navigation) => {
    switch (type) {
        case 'navigatorWithParams':
            const navFunctionWithState = useCallback(() => navigation.navigate(option.navigatorName, option.params), [])
            return navFunctionWithState
        case 'navigator':
            const navFunction = useCallback(() => navigation.navigate(option.navigatorName), [])
            return navFunction
    }
    return useCallback(() => {
    }, [])
}