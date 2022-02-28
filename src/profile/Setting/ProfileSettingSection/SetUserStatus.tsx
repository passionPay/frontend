import { useNavigation } from '@react-navigation/native'
import React, { useCallback, useState } from 'react'
import { View, Text, TextInput, Dimensions, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'

const { width, height } = Dimensions.get('window')

const items = ['초1', '초2', '초3', '초4', '초5', '초6', '중1', '중2', '중3', '고1', '고2', '고3', 'N수', '편입', 'LEET', 'MEET/DEET', '공무원시험', '자격증', '영어']

const SetUserStatus = () => {
    const navigation = useNavigation<any>()
    const goBack = useCallback(() => navigation.goBack(), [])
    const [input, setInput] = useState('')
    const [statusValue, setStatusValue] = useState(9)
    const [statusItems, setStatusItems] = useState(items.map((item, idx) => ({ label: item, value: idx })))
    const [statusOpen, setStatusOpen] = useState(false)
    
    
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
                    <Text style={styles.title}>{'신분 설정'}</Text>
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

                <View style={[styles.row,{zIndex:statusOpen?1:0}]}>
                    <Text style={styles.tag} >신분</Text>
                    <DropDownPicker
                        placeholder=""
                        style={{
                            height: 35,
                            width: width * 0.5,
                        }}
                        containerStyle={{
                            width: width * 0.5,
                            marginLeft: 10,


                        }}
                        autoScroll={true}
                        maxHeight={120}
                        open={statusOpen}
                        // onOpen={onStatusOpen}
                        value={statusValue}
                        items={statusItems}
                        setOpen={setStatusOpen}
                        setValue={setStatusValue}
                        setItems={setStatusItems}
                        listMode="SCROLLVIEW"
                    />

                </View>

                <View style={{ borderTopWidth: 0.5, width: '100%', height: 1, }}></View>

                {statusValue < 13 &&
                    <View style={{marginTop:20,}}>
                        <Text style={styles.tag}>학교 설정</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                            <TextInput
                                placeholder='학교이름을 입력해주세요'
                                value={input}
                                onChangeText={setInput}
                                style={styles.info}>

                            </TextInput>
                            <TouchableOpacity style={styles.searchButton}><Text style={{ textAlign: 'center' }}>검색</Text></TouchableOpacity>
                        </View>
                    </View>
                }

            </View>
        </SafeAreaView >
    )
}


export default SetUserStatus

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

    submitButton: {
        width: 80,
        height: 30,
        marginLeft: 10,
        borderRadius: 10,
        backgroundColor: '#7EBEF9',
        justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',
        marginTop: 20, paddingBottom: 0,
        // borderBottomWidth: 0.5,
        height: 180,
        marginBottom: -135,

    },
    info: {
        borderBottomWidth: 0.5,

        fontSize: 15, paddingVertical: 10,
        backgroundColor: '#f9f9f9',
        paddingHorizontal: 10,
        flex: 1,
    },
    tag: {
        marginTop: 10,
        fontSize: 16,
        paddingRight: 10,
        paddingLeft: 10,
    },
    searchButton: {
        width: 60,
        height: 35,
        marginLeft: 10,
        borderRadius: 10,
        borderWidth: 0.5,
        justifyContent: 'center',
    },
})
