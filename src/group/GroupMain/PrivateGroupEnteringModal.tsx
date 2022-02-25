import React, { useCallback, useState } from 'react'
import { Alert,Platform, Dimensions, StyleSheet, SafeAreaView, View, Image, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import Modal from "react-native-modal";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const { width, height } = Dimensions.get('window')

const PrivateGroupEnteringModal = ({ modalVisible, setModalVisible, data, navFunction }) => {

    const [input,setInput] = useState('')
    
    const onSubmitPassword = useCallback((input)=>{
        if (input==='1234') {
            setModalVisible(false)
            navFunction()
        }else{
            Alert.alert(                    // 말그대로 Alert를 띄운다
                '',                    // 첫번째 text: 타이틀 제목
                '비밀번호가 일치하지 않아요',// 두번째 text: 그 밑에 작은 제목
                [                              // 버튼 배열
                    { text: "확인" },
                ],
                { cancelable: true }
            );
        }
    },[])

    return (
        <>
            <Modal
                isVisible={modalVisible}
                useNativeDriver={true}
                hideModalContentWhileAnimating={true}
                style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
                onModalHide={()=>setInput('')}
            >
                <View style={styles.modalContainer}>
                    <Text style={styles.titleText}>비공개 그룹</Text>
                    <Text>비밀번호를 입력해주세요</Text>
                    <TextInput 
                        style={{marginTop: 15,height: 30,borderBottomWidth: 1,}}
                        value={input} onChangeText={setInput}
                        placeholder='비밀번호'
                        secureTextEntry={true}
                    />

                    <View style={{
                        flexDirection: 'row', justifyContent:'flex-end'
                    }}>
                        <TouchableOpacity
                            style={styles.cancelButton}
                            onPress={() => setModalVisible(false)}

                        >
                            <Text style={{
                                fontSize: 15,
                                textAlign: 'center',
                                fontWeight:'600',

                            }}>취소</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.confirmButton}
                            onPress={()=>onSubmitPassword(input)}

                        >
                            <Text style={{
                                fontSize: 15,
                                textAlign: 'center',
                                color:'#ffffff',
                                fontWeight:'600',
                            }}>확인</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </Modal>
        </>
    )
}

export default PrivateGroupEnteringModal

PrivateGroupEnteringModal.defaultProps = {
    data: {
        title: '[필독] 지켜야 할 사항',
        content: '미션 체크 후 인증게시판에 인증 사진 꼭 올려주세요. 미인증 또는 거짓 체크 시 강퇴합니다!'
    }
}
const styles = StyleSheet.create({
    modalContainer: {
        // backgroundColor:'#ffffff',
        backgroundColor: '#F9F9F9',
        padding: 20,
        width: width * 0.85,
        borderRadius: 20,

    },
    titleText: {
        fontSize: 17,
        fontWeight: '600',
        marginBottom: 10,
    },


    confirmButton: {
        // borderWidth:0.5,
        marginTop: 10,
        marginBottom: 0,
        width: 85,
        marginLeft:5,
        alignSelf: 'center',
        paddingVertical: 10,
        borderRadius: 20,
        backgroundColor: '#7EBEF9',

    },
    cancelButton:{
        // borderWidth:0.5,
        marginTop: 10,
        marginBottom: 0,
        width: 85,
        marginLeft:5,
        alignSelf: 'center',
        paddingVertical: 10,
        borderRadius: 20,







        borderWidth:0.5,

    },
})