import React, { useCallback, useEffect, useState } from 'react'
import { TextInput, Platform, Dimensions, StyleSheet, SafeAreaView, View, Image, Text, ScrollView, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'




const { width, height } = Dimensions.get('window')


type InputType = {
    prev:string,
    new:string,
    confirm:string,
}
const initialInput = {
    prev:'',
    new:'',
    confirm:'',
}

const SetPassword = () => {
    const navigation = useNavigation<any>()
    const goBack = useCallback(() => navigation.goBack(), [])

    const [input, setInput] = useState<InputType>(initialInput)

    const onSubmit = useCallback(() => {
        if (input.prev !== '' && input.new !== '' && input.confirm !== '' ) {
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
                    <Text style={styles.title}>{'비밀번호 변경'}</Text>
                    <TouchableOpacity
                        onPress={onSubmit}
                        style={styles.submitButton}>
                        <Text style={{
                            color: 'white',
                            textAlign: 'center',
                            fontSize: 14,
                            fontWeight: '700'
                        }}>
                            변경완료
                        </Text>
                    </TouchableOpacity>
                </View>
                
                <Text style={styles.tagText}>이전 비밀번호</Text>
                <TextInput
                    secureTextEntry
                    placeholder='이전 비밀번호를 입력해주세요'
                    value={input.prev}
                    onChangeText={(text)=>setInput({...input,prev:text})}
                    style={styles.info}>
                </TextInput>
                <Text style={styles.tagText}>새로운 비밀번호</Text>
                <TextInput
                    secureTextEntry
                    placeholder='새로운 비밀번호를 입력해주세요'
                    value={input.new}
                    onChangeText={(text)=>setInput({...input,new:text})}
                    style={styles.info}>
                </TextInput>
                <Text style={styles.tagText}>비밀번호 확인</Text>
                <TextInput
                    secureTextEntry
                    placeholder='새로운 비밀번호를 한 번 더  입력해주세요'
                    value={input.confirm}
                    onChangeText={(text)=>setInput({...input,confirm:text})}
                    style={styles.info}>
                </TextInput>
            </View>
        </SafeAreaView>
    )
}

export default SetPassword

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
        marginBottom:20,
    },
    tagText:{
        fontSize:15,
        marginBottom:10,
    }
})