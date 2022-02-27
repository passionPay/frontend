import React, { useCallback, useState } from 'react'
import { Alert, Platform, Dimensions, StyleSheet, SafeAreaView, View, Image, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import Modal from "react-native-modal";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const { width, height } = Dimensions.get('window')


type CommonModalPropsType = {
    modalVisible:boolean,
    setModalVisible:React.Dispatch<React.SetStateAction<boolean>>,
    data:{
        title:string,
        content:string,
    }
}

const defaultProps = {
    data: {
        title: '',
        content: '',
    }
}

const CommonModal = ({ modalVisible, setModalVisible, data }:CommonModalPropsType) => {
    data = Object.assign({}, defaultProps.data, data)

    return (
        <Modal
            isVisible={modalVisible}
            useNativeDriver={true}
            hideModalContentWhileAnimating={true}
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <View style={styles.modalContainer}>
                {data.title!==""&&<Text style={styles.titleText}>{data.title}</Text>}
                <Text style={styles.contentText}>{data.content}</Text>
                <View style={{
                    flexDirection: 'row', justifyContent: 'center'
                }}>
                    <TouchableOpacity
                        style={styles.confirmButton}
                        onPress={() => setModalVisible(false)}
                    >
                        <Text style={{
                            fontSize: 15,
                            textAlign: 'center',
                            color: '#ffffff',
                            fontWeight: '600',
                        }}>확인</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

export default CommonModal

CommonModal.defaultProps= defaultProps

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: '#F9F9F9',
        paddingHorizontal: 20,
        paddingTop:30,
        paddingBottom:20,
        width: width * 0.85,
        borderRadius: 20,
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
    confirmButton: {
        marginTop: 20,

        width: 85,
        marginLeft: 5,
        alignSelf: 'center',
        paddingVertical: 10,
        borderRadius: 20,
        backgroundColor: '#7EBEF9',
    },

})