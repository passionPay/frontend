import React, { useCallback, useState } from 'react'
import {Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'


const { width, height } = Dimensions.get('window')





type option={

}

export const SettingItem = ({ tag, type, option }) => {
    switch (type){
        case 'navigator':
            return <NavSettingItem tag={tag} option={option}/>
        case 'modal':
            return <ModalSettingItem tag={tag} option={option}/>
        case 'custom':
            return <SettingItemBasicStructure tag={tag} onPress={option.onPress}/>
        default :
            throw Error('inappropriate type of option for settingItem')
    }
}






const SettingItemBasicStructure = ({onPress,tag}) =>{
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

const ModalSettingItem = ({ tag, option }) => {
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <>
            <SettingItemBasicStructure tag={tag} onPress={()=>setModalVisible(true)}/>
            <option.modal modalVisible={modalVisible} setModalVisible={setModalVisible} data={option.modalData} />
        </>
    )
}


const NavSettingItem =({tag,option})=>{
    const navigation = useNavigation<any>()
    const navFunction = 
        option.params ? 
            useCallback(() => navigation.navigate(option.navigatorName, option.params), [])
            :
            useCallback(() => navigation.navigate(option.navigatorName), [])
    return (
        <SettingItemBasicStructure tag={tag} onPress={navFunction}/>
    )

}
NavSettingItem.defaultProps = {
    option:{}
}