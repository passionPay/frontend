import React, { useCallback, useEffect, useState } from 'react'
import { TextInput, Platform, Dimensions, StyleSheet, SafeAreaView, View, Image, Text, ScrollView, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import PostWriteForm from '../../commonComponent/PostWriteForm'


const { width, height } = Dimensions.get('window')

type StateType = {
    inputTitle: string,
    inputContent: string,
}
const initState: StateType = {
    inputTitle: '',
    inputContent: '',
}


const SetNotice = ({ route }) => {
    const navigation = useNavigation<any>()
    const goBack = useCallback(() => navigation.goBack(), [])

    const [state, setState] = useState<StateType>(initState)
    
    const onSubmit = useCallback(() => {
        console.log(state)
        goBack()
    }, [state])

    useEffect(() => {
        if (route.params && route.params.isEditMode) {
            setState(route.params.prevState)
        }
        // console.log(route)
    }, [route])

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
                    <Text style={styles.title}>{'공지사항 설정'}</Text>
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

                <PostWriteForm state={state} setState={setState} />
            </View>
        </SafeAreaView>
    )
}

export default SetNotice

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