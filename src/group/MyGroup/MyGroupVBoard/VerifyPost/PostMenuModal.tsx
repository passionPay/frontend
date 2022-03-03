import React, { useCallback, useState } from 'react'
import { Alert, Platform, Dimensions, StyleSheet, SafeAreaView, View, Image, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import Modal from "react-native-modal";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'


const { width, height } = Dimensions.get('window')


type PostMenuModalPropsType = {
    modalVisible: boolean,
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>,
    isAuthor: boolean,
    editParams,
    postId: string,
}

const defaultProps = {
    isAuthor: false,
    editParams: {},
    postId: ''
}




const PostMenuModal = ({ modalVisible, setModalVisible, editParams, postId, isAuthor, }: PostMenuModalPropsType) => {

    const navigation = useNavigation<any>()
    const editVerifyPost = useCallback(() => navigation.navigate('WriteVerifyPost', editParams), [])

    return (
        <Modal
            isVisible={modalVisible}
            useNativeDriver={true}
            hideModalContentWhileAnimating={true}
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <View style={styles.modalContainer}>
                {isAuthor &&
                    < TouchableOpacity
                        style={[styles.button, { borderTopWidth: 0 }]}
                        onPress={() => {
                            setModalVisible(false)
                            editVerifyPost()
                        }}
                    >

                        <Text style={{
                            fontSize: 15,
                        }}>{'수정하기'}</Text>
                    </TouchableOpacity>
                }
                {isAuthor &&
                    < TouchableOpacity
                        style={[styles.button]}
                        onPress={() => {
                            setModalVisible(false)
                        }}
                    >

                        <Text style={{
                            fontSize: 15,
                        }}>{'삭제하기'}</Text>
                    </TouchableOpacity>
                }
                
                {[{ text: '신고하기' }, { text: '취소' }].map((item, idx) => (
                    < TouchableOpacity
                        key={idx}
                        style={[styles.button, idx === 1 ? { backgroundColor:'#E8E8E8'} : {}]}
                        onPress={() => {
                            console.log(item.text)
                            setModalVisible(false)
                        }}
                    >
                        <Text style={{
                            fontSize: 15,

                        }}>{item.text}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </Modal >
    )
}

export default PostMenuModal

PostMenuModal.defaultProps = defaultProps

const styles = StyleSheet.create({
    modalContainer: {
        // backgroundColor: '#F9F9F9',
        backgroundColor: '#ffffff',

        width: width * 0.7,
        // borderRadius: 20,
    },
    titleText: {
        fontSize: 17,
        fontWeight: '600',
        marginBottom: 10,
        textAlign: 'center',

    },
    contentText: {
        textAlign: 'center',
    },
    button: {
        borderTopWidth: 0.5,
        borderColor: 'grey',
        height: 50,
        justifyContent: 'center',
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 10,


    },

})




