import React, { useCallback, useState } from 'react'
import { Platform, Dimensions, StyleSheet, SafeAreaView, View, Image, Text, ScrollView, TouchableOpacity } from 'react-native'
import Modal from "react-native-modal";

const { width, height } = Dimensions.get('window')

const NoticeModal = ({ modalVisible, setModalVisible, data }) => {

    return (
        <>
            <Modal
                isVisible={modalVisible}
                useNativeDriver={true}
                hideModalContentWhileAnimating={true}
                style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.titleContainer}>
                        <Text>{data.title}</Text>
                    </View>
                    <ScrollView style={styles.contentContainer}>
                        <Text>{data.content}</Text>
                    </ScrollView>
                    <TouchableOpacity
                        style={styles.confirmButton}
                        onPress={() => setModalVisible(false)}

                    >
                        <Text style={{
                            fontSize: 15,
                            textAlign: 'center',
                        }}>확인</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </>
    )
}

export default NoticeModal

NoticeModal.defaultProps = {
    data: {
        title: '[필독] 지켜야 할 사항',
        content: '미션 체크 후 인증게시판에 인증 사진 꼭 올려주세요. 미인증 또는 거짓 체크 시 강퇴합니다!'
    }
}
const styles = StyleSheet.create({
    modalContainer: {
        // backgroundColor:'#ffffff',
        backgroundColor: '#F9F9F9',

        width: width * 0.85,
        height: height * 0.6,
        borderRadius: 20,

    },
    titleContainer: {
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        // borderWidth:1,
        backgroundColor: '#7EBEF9',
    },
    contentContainer: {
        padding: 20,
        flex: 1,
    },
    confirmButton: {
        // borderWidth:0.5,
        marginTop:20,
        marginBottom: 20,
        width: width * 0.3,
        alignSelf: 'center',
        paddingVertical: 10,
        borderRadius: 20,
        backgroundColor: '#7EBEF9',

    }
})