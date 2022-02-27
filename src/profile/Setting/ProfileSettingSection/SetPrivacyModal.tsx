import React, { useCallback, useState,useRef } from 'react'
import { Dimensions,Animated, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import Modal from "react-native-modal";
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'


const { width, height } = Dimensions.get('window')

const SetPrivacyModal = ({ modalVisible, setModalVisible, data }) => {

    /*option에서 onPRess 를 받아오든지 해야할듯
    navigation??
    */

    
    const completeButtonAnimVal = useRef(new Animated.Value(0)).current;
    const completeButtonAnim = {
        marginLeft: completeButtonAnimVal.interpolate({
            inputRange: [0, 1],
            outputRange: ['0%', '50%']
        })
    };

    const [privacy, setPrivacy] =useState(false)


    return (
        <>
            <Modal
                isVisible={modalVisible}
                useNativeDriver={true}
                hideModalContentWhileAnimating={true}
                style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
            >
                <View style={styles.modalContainer}>
                    {/* <Icon style={{
                        alignSelf: 'center',
                        marginTop: 15,
                    }}
                        name='cog-outline' size={width * 0.22} color='#FF4141' /> */}

                    <Text style={{
                        fontSize: 20,fontWeight: 'bold',
                        alignSelf: 'center',
                    }}>프로필 공개 설정</Text>
                    <Text style={{
                        fontSize: 15,
                        marginVertical: 10, marginHorizontal: width * 0.1,
                        alignSelf: 'center', textAlign: 'center'
                    }}>프로필을 비공개로 설정하면 팔로우를 한 유저만 나의 플래너, 공부 기록을 볼 수 있어요</Text>

                    <View style={{
                        width: '90%', height: 50, marginHorizontal:'5%',
                        backgroundColor: '#F4F9F9', flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <Animated.View style={[{
                            width: '50%', height: '100%', backgroundColor: '#A4EBF3',
                            position: 'absolute', top: 0, left: 0
                        }, completeButtonAnim]} />
                        <TouchableOpacity activeOpacity={1} style={{ width: '50%' }}
                            onPress={() => {
                                Animated.timing(completeButtonAnimVal, {
                                    toValue: 0, useNativeDriver: false, duration: 100
                                }).start(() => setPrivacy(false))
                            }}>
                            <Text style={{ textAlign: 'center', color: '#1B262C' }}>공개</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={1} style={{ width: '50%' }}
                            onPress={() => {
                                Animated.timing(completeButtonAnimVal, {
                                    toValue: 1, useNativeDriver: false, duration: 100
                                }).start(() => setPrivacy(true))
                            }}>
                            <Text style={{ textAlign: 'center', color: '#1B262C' }}>비공개</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        paddingHorizontal: width * 0.03, marginTop:20,
                        justifyContent: 'center'
                    }}>

                        <TouchableOpacity
                            style={styles.cancelButton}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={{
                                color: '#000000', fontWeight: 'bold', fontSize: 15,
                                textAlign: 'center',
                            }}>취소하기
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.confirmButton}
                            onPress={() => {
                                console.log(privacy)
                                setModalVisible(false)
                            }}
                        >
                            <Text style={{
                                fontSize: 15, fontWeight: 'bold', color: '#ffffff',
                                textAlign: 'center',
                            }}>설정 완료하기
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </Modal>
        </>
    )
}

export default SetPrivacyModal

const styles = StyleSheet.create({
    modalContainer: {
        width: width * 0.85,
        marginBottom: height * 0.1,
        paddingTop:20,
        backgroundColor: '#F9F9F9',
        borderRadius: 20,
    },
    titleContainer: {
        padding: 20,
        borderTopLeftRadius: 20, borderTopRightRadius: 20,
        backgroundColor: '#F67B7B'
    },
    contentContainer: {
        flex: 1,
        padding: 20,
    },
    cancelButton: {
        alignSelf: 'center',
        width: 130,
        marginBottom: 20,
        paddingVertical: 10,
        borderRadius: 20,
        borderWidth: 0.5,
    },
    confirmButton: {
        alignSelf: 'center',
        width: 130,
        marginLeft: 10, marginBottom: 20,
        paddingVertical: 10,
        borderRadius: 20,
        backgroundColor: '#8AC8FF',
    }
})