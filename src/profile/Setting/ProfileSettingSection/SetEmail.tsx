import React, { useCallback, useEffect, useState } from 'react'
import { TextInput, Platform, Dimensions, StyleSheet, SafeAreaView, View, Image, Text, ScrollView, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'




const { width, height } = Dimensions.get('window')




const SetEmail = () => {
    const navigation = useNavigation<any>()
    const goBack = useCallback(() => navigation.goBack(), [])

    const [input, setInput] = useState('')

    const onSubmit = useCallback(() => {
        if (input !== '') {
            console.log(input)
            goBack()
        }
        else console.log('empty!')
    }, [input])


    return (
        <SafeAreaView style={styles.safeContainer}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.header} onPress={goBack}>
                    <Text style={{
                        fontSize: 13,
                        fontFamily: 'GodoM',
                        color: '#9F9F9F',
                    }}>
                        {`< 설정`}</Text>
                </TouchableOpacity>
                <View style={{
                    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
                    marginBottom: height * 0.02,
                }}>
                    <Text style={styles.title}>{'이메일 설정'}</Text>
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

                <TextInput
                    placeholder='이메일을 입력해주세요'
                    value={input}
                    onChangeText={setInput}
                    style={styles.info}>

                </TextInput>
            </View>
        </SafeAreaView>
    )
}

export default SetEmail

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
    noticeTitleContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    noticeContentContainer: {
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
    },
    info: {
        borderBottomWidth: 0.5,
        fontSize: 15, paddingVertical: 10,
        backgroundColor: '#f9f9f9',
        paddingHorizontal: 10,
    },
})