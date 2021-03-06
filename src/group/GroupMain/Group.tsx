import React, { useCallback } from 'react'
import { Dimensions, StyleSheet, SafeAreaView, View, Image, Text, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import MyGroupSection from './MyGroupSection/MyGroupSection'
import OtherGroupSection from './OtherGroupSection/OtherGroupSection'
import { TouchableIcon } from '../../component/CustomComponent'

const { width, height } = Dimensions.get('window')

const currentData = getTempData()

export default function Group() {

    const navigation = useNavigation<any>()
    const makeGroup = useCallback(() => navigation.navigate('MakeGroup'), [])
    const groupSetting = useCallback(() => navigation.navigate('GroupSetting'), [])

    const { myGroups, otherGroups } = currentData
    return (
        <SafeAreaView style={styles.safeContainer}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View>
                        <Text style={styles.titleText}>Study Group</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableIcon
                            onPress={makeGroup}
                            iconProps={{ style: [styles.headerIcon, { marginLeft: 'auto' }], name: 'plus', size: 25, color: 'black' }} />
                        <TouchableIcon
                            onPress={groupSetting}
                            iconProps={{ style: [styles.headerIcon], name: 'cog-outline', size: 23, color: 'black' }}
                            style={{
                                marginRight: width * 0.03,
                            }}
                        />
                    </View>
                </View>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <MyGroupSection myGroups={myGroups} />
                    <OtherGroupSection otherGroups={otherGroups} />
                </ScrollView>
            </View>

        </SafeAreaView>
    )

}


const styles = StyleSheet.create({

    safeContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },

    container: {
        flex: 1,
        paddingHorizontal: '5%',



    },

    header: {
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    titleText: {
        fontSize: 18,
        fontFamily: 'GodoM',
        color: '#000',
    },
    headerIcon: {
        paddingLeft: 10,
    },


    title: {
        fontSize: 18,
        fontFamily: 'GodoM',
        color: '#000',
        marginBottom: height * 0.02,

    },

    groupTitle: {
        fontSize: 15,
        fontFamily: 'GodoM',
        color: '#484848',
        marginTop: 0,
    },
    image: {
        width: 60, height: 60, borderWidth: 1,
        borderRadius: 10, backgroundColor: '#ddd'
    },


})


function getTempData() {
    return (
        {
            myGroups: [1],
            otherGroups: [2]
        }
    )

}
