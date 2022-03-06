import React, { useCallback, useState } from 'react'
import { Platform, Dimensions, StyleSheet, SafeAreaView, View, Image, Text, ScrollView, TouchableOpacity } from 'react-native'
import Modal from "react-native-modal";
import { useGroupState } from '../MyGroup/MyGroupContext';

const { width, height } = Dimensions.get('window')

const NoticeModal = ({ modalVisible, setModalVisible}) => {
    const groupState = useGroupState()



    return (
        <Modal
            isVisible={modalVisible}
            useNativeDriver={true}
            hideModalContentWhileAnimating={true}
            style={{ flex: 1, justifyContent: "center", alignItems: "center", position: 'relative' }}
        >
            <View style={styles.modalContainer}>
                <View style={styles.titleContainer}>
                    <Text>{groupState.groupNotice.title}</Text>
                </View>
                <ScrollView style={styles.contentContainer}>
                    <Text>{groupState.groupNotice.content===''?  '아직 작성된 공지사항이 없습니다.':groupState.groupNotice.content}</Text>
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
        backgroundColor: '#F9F9F9',
        width: width * 0.85,
        height: height * 0.6,
        borderRadius: 20,

    },
    titleContainer: {
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: '#7EBEF9',
    },
    contentContainer: {
        padding: 20,
        flex: 1,
    },
    confirmButton: {
        marginTop: 20,
        marginBottom: 20,
        width: width * 0.3,
        alignSelf: 'center',
        paddingVertical: 10,
        borderRadius: 20,
        backgroundColor: '#7EBEF9',
    }
})