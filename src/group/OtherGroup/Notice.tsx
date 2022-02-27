import React, { useState } from 'react'
import { Dimensions, StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import NoticeModal from '../commonComponent/NoticeModal'

const { width, height } = Dimensions.get('window')

const Notice = () => {
    const data = {
        title: '[필독] 지켜야 할 사항',
        content: '미션 체크 후 인증게시판에 인증 사진 꼭 올려주세요. 미인증 또는 거짓 체크 시 강퇴합니다!\n'.repeat(100)
    }
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <>

            <Text style={{
                marginTop: 20,
                marginBottom: 10,
                fontSize: 15,
                fontFamily: 'GodoM'
            }}>
                공지사항
            </Text>
            <TouchableOpacity
                onPress={()=>setModalVisible(true)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.titleContainer}>
                        <Icon style={{
                            marginTop: -3,
                            marginRight: 5,
                        }} name='bullhorn-outline' size={20} color='black' />
                        <Text style={{
                            flex: 1,
                            fontSize: 13,
                        }}>{data.title}</Text>
                    </View>
                    <View style={styles.contentContainer}>
                        <Text
                            numberOfLines={10}
                            style={{
                                fontSize: 13,
                            }}>{data.content}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
            <NoticeModal
                data={data}
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
            />
        </>


    )
}
export default Notice

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: '#F9F9F9',
        borderRadius: 20,
    },
    titleContainer: {
        paddingHorizontal: 20,
        paddingVertical: 13,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        // borderWidth:1,
        backgroundColor: '#7EBEF9',
        flexDirection: 'row',
    },
    contentContainer: {
        padding: 20,
        flex: 1,
    },
    confirmButton: {
        // borderWidth:0.5,
        marginBottom: 30,
        width: width * 0.3,
        alignSelf: 'center',
        paddingVertical: 10,
        borderRadius: 20,
        backgroundColor: '#7EBEF9',

    }
})