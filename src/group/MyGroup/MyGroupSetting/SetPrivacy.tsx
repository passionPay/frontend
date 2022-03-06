import React, { useCallback, useEffect, useState,useReducer } from 'react'
import { TextInput, Platform, Dimensions, StyleSheet, SafeAreaView, View, Image, Text, ScrollView, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import SetPrivacySection from '../../ManageGroup/MakeGroup/SetPrivacy'
import PostWriteForm from '../../commonComponent/PostWriteForm'
import { useGroupDispatch, useGroupState } from '../MyGroupContext'


const { width, height } = Dimensions.get('window')

type StateType = {
    groupPrivacy: boolean,
    groupPassword: string | undefined,
}
type ActionType = {
    type: 'CHANGE_INPUT',
    name:'groupPassword'
    value: string | undefined
}|
{
    type: 'CHANGE_INPUT',
    name:'groupPrivacy'
    value: boolean
}|
{
    type: 'CHANGE_ALL',
    value: StateType
}

const initState: StateType = {
    groupPrivacy: false,
    groupPassword: undefined,
}


const reducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case 'CHANGE_INPUT':
            return {...state, [action.name]:action.value}
        case 'CHANGE_ALL':
            return action.value
        default:
            return state;
    }
}

const SetPrivacy = ({ route }) => {
    const navigation = useNavigation<any>()
    const goBack = useCallback(() => navigation.goBack(), [])
    const [state,dispatch] = useReducer(reducer,initState)
    const groupState = useGroupState()
    const groupDispatch=useGroupDispatch()

    const onSubmit = useCallback(() => {
        console.log(state)
        goBack()
    }, [state])

    useEffect(() => {
        if (route.params && route.params.isEditMode) {
            dispatch({type:'CHANGE_ALL',value:{
                groupPrivacy:groupState.groupPrivacy,
                groupPassword:groupState.groupPrivacy?'':undefined
            }})
            
        }
    }, [route,groupState])

    return (
        <SafeAreaView style={styles.safeContainer}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.header} onPress={goBack}>
                    <Text style={{
                        fontSize: 13,
                        fontFamily: 'GodoM',
                        color: '#9F9F9F',
                    }}>
                        {`< 그룹 설정`}</Text>
                </TouchableOpacity>
                <View style={{
                    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
                    marginBottom: height * 0.02,
                }}>
                    <Text style={styles.title}>{'그룹 공개 설정'}</Text>
                    <TouchableOpacity
                        onPress={onSubmit}
                        style={styles.submitButton}>
                        <Text style={{
                            color: 'white',
                            textAlign: 'center',
                            fontSize: 14,
                            fontWeight: '700'
                        }}>
                            설정완료
                        </Text>
                    </TouchableOpacity>
                </View>

                <SetPrivacySection state={state} dispatch={dispatch} />
            </View>
        </SafeAreaView>
    )
}

export default SetPrivacy

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
        paddingHorizontal: width * 0.05,
    },
    header: {
        height: 50,
        justifyContent: 'center',
        alignSelf: 'baseline',

    },
    title: {
        fontSize: 18,
        fontFamily: 'GodoM',
        color: '#000',
    },
    titleInfo: {
        fontSize: 15,
        paddingVertical: 10,
        borderWidth: 0.4,
        paddingHorizontal: 10,
        marginHorizontal: 20, flex: 1
    },
    contentInfo: {
        fontSize: 15,
        paddingTop: 10,
        paddingBottom: 10,
        height: 300,
        borderWidth: 0.4,
        paddingHorizontal: 10,
        marginHorizontal: 20, flex: 1
    },
    inputTitleContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    inputContentContainer: {
        flexDirection: 'row',
        marginTop: 30,
    },
    submitButton: {
        width: 80,
        height: 30,
        marginLeft: 10,
        borderRadius: 10,

        backgroundColor: '#7EBEF9',
        justifyContent: 'center',
    }
})