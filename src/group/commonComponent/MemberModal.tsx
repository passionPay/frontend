import React, { useCallback, useState } from 'react'
import { Alert, Platform, Dimensions, StyleSheet, SafeAreaView, View, Image, Text, ScrollView, TouchableOpacity } from 'react-native'
import Modal from "react-native-modal";
import Icon from 'react-native-vector-icons/Ionicons'
import MemberIcon from '../../component/MemberIcon';
import MemberHistory from '../MyGroup/MyGroupSetting/ManageMembers/MemberHistory';
import { useNavigation } from '@react-navigation/native'
import { TouchableIcon } from '../../component/CustomComponent';


const { width, height } = Dimensions.get('window')

type MemberModalProps = {
    modalVisible: boolean,
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>
    isManaging: boolean,
    isMine: boolean
}
const MemberModal = ({ modalVisible, setModalVisible, isManaging, isMine }: MemberModalProps) => {

    /*option에서 onPress 를 받아오든지 해야할듯
    navigation??
    */
    const navigation = useNavigation<any>()
    const publicProfile = useCallback(()=>navigation.navigate('PublicProfileNavigator'),[])

    const goAlert = () =>
        Alert.alert(
            '정말 강퇴하시겠습니까?',
            '멤버를 강제 퇴장 시킬 시 그룹에 저장된 멤버의 데이터는 모두 사라지며, 복구할 수 없습니다. 그래도 강퇴하시겠습니까?',
            [
                {
                    text: "아니요",
                    style: "cancel"
                },
                { text: "네", onPress: () => setModalVisible(false) },
            ],
            { cancelable: false }
        )


    return (
        <>
            <Modal
                isVisible={modalVisible}
                useNativeDriver={true}
                hideModalContentWhileAnimating={true}
                style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
            >
                <View style={styles.modalContainer}>
                    <MemberIcon
                        style={{ marginTop: 15, alignSelf: 'center', }}
                        size={90}
                    />
                    <Text style={styles.memberNameText}>고달픈승구</Text>
                    <MemberHistory />
                    {!isMine &&
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                setModalVisible(false)
                                publicProfile()
                            }}>
                            <Text style={{
                                color: '#ffffff', fontWeight: 'bold', fontSize: 17,
                                textAlign: 'center'
                            }}>프로필 보기</Text>
                        </TouchableOpacity>
                    }
                    {(!isMine && isManaging) &&
                        <TouchableOpacity
                            style={styles.outButton}
                            onPress={() => {
                                goAlert()

                            }}>
                            <Text style={{
                                color: '#ffffff', fontWeight: 'bold', fontSize: 17,
                                textAlign: 'center'
                            }}>멤버 강퇴하기</Text>
                        </TouchableOpacity>
                    }
                    <TouchableIcon
                        iconProps={{ name: 'close', size: 23, color: '#949494' }}
                        style={{ position: 'absolute', right: 20, top: 15, }}
                        onPress={() => setModalVisible(false)}
                    >
                    </TouchableIcon>
                </View>
            </Modal>
        </>
    )
}

export default MemberModal

MemberModal.defaultProps = {
    isManaging: false,
    isMine: false,
}
const styles = StyleSheet.create({
    modalContainer: {
        width: width * 0.85,
        paddingBottom: 20,
        backgroundColor: '#F9F9F9',
        borderRadius: 20,
    },
    memberNameText: {
        marginTop: 10,
        alignSelf: 'center',
        fontSize: 17, fontFamily: 'GodoM'
    },
    button: {
        justifyContent: 'center', alignSelf: 'center',
        width: width * 0.7,
        marginBottom: 10, marginTop: 10,
        paddingVertical: 10,
        borderRadius: 15,
        backgroundColor: '#8AC8FF',
        zIndex: -1,

    },
    outButton: {
        alignSelf: 'center', justifyContent: 'center',
        width: width * 0.7,
        paddingVertical: 10,
        borderRadius: 15,
        backgroundColor: '#FF4141',
        zIndex: -1,

    }
})