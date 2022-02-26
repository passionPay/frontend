import React, { useCallback, useEffect, useState } from 'react'
import { Platform, Dimensions, StyleSheet, SafeAreaView, View, Image, Text, ScrollView, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import DropDownPicker from 'react-native-dropdown-picker'

import MyGroupMissionGoal from './MissionGoalScreen'
import GoalScreenNavigator from './GoalScreenNavigator'
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace'

const { width, height } = Dimensions.get('window')



export default function MyGroupGoal({route}) {
    const navigation = useNavigation<any>()
    const goBack = useCallback(() => navigation.goBack(), [])

    const [tabValue, setTabValue] = useState(0)
    const [tabOpen, setTabOpen] = useState(false)
    const [tabItems, setTabItems] = useState([{ label: '미션', value: 0 }, { label: '시간', value: 1 }])

    useEffect(()=>{
        if (typeof(route.params) !== 'undefined') {
            setTabValue(route.params)
        }
    },[route])

    return (
        <SafeAreaView style={styles.safeContainer}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.header} onPress={goBack}>
                    <Text style={{
                        fontSize: 13,
                        fontFamily: 'GodoM',
                        color: '#9F9F9F',
                        // backgroundColor:'#000000'

                    }} >
                        &lt; 3학년 1반 국어스터디 </Text>
                </TouchableOpacity>
                <Text style={styles.title}>오늘 공부 현황</Text>



                <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>

                    <View style={{
                        height: 115, marginBottom: -80, zIndex: 1,
                    }}>
                        <DropDownPicker
                            style={{

                                height: 35,
                            }}
                            containerStyle={{
                                // marginTop: 10,
                                width: 80,
                            }}
                            maxHeight={80}
                            autoScroll={true}
                            open={tabOpen}
                            value={tabValue}
                            items={tabItems}
                            setOpen={setTabOpen}
                            setValue={setTabValue}
                            setItems={setTabItems}
                            listMode="SCROLLVIEW"
                        />
                    </View>
                    <GoalScreenNavigator tabNumber={tabValue} />
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    shadow: {
        ...Platform.select({
            ios: {
                shadowColor: "#000",
                shadowOffset: {
                    width: 0.1,
                    height: 0.1,
                },
                shadowOpacity: 0.25,
            },
            android: {
                elevation: 3,
            },
        }
        )
    },
    header: {
        height: 50,
        // backgroundColor:'#ff0000',
        justifyContent: 'center',
        alignSelf: 'baseline',
    },
    safeContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
        paddingHorizontal: '5%',
    },
    title: {
        fontSize: 18,
        fontFamily: 'GodoM',
        color: '#000',
        paddingBottom:15,


    },
    subContainer: {
        paddingTop: height * 0.04,
    },
    subtitleText: {
        fontSize: 20,
        fontFamily: 'GodoM',
    },
})

