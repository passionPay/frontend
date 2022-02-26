import React, { useCallback, useState } from 'react'
import { TouchableOpacity, Image, ScrollView, Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import LottieView from 'lottie-react-native'

const { width, height } = Dimensions.get('window')

const PrivateScreen = () => {
    return (
        <View style={styles.container}>
            <View style={{
                height: 150, width: 150,
                alignSelf: 'center', justifyContent: 'center',
                borderWidth:0.5,
                borderRadius:75,
            }}>
                <View style={{ height: 100 }}>
                    <LottieView
                        source={require("../../../images/profile/lock.json")}
                        loop={false}
                        autoPlay
                        speed={0.9}
                    />
                </View>
            </View>
            <Text style={{
                marginTop: 30,
                fontSize: 17,
                textAlign: 'center',
                fontFamily: 'GodoM',
            }}>
                비공개 계정입니다.
            </Text>
            <Text style={{
                fontSize: 13,
                marginTop: 10,
                textAlign: 'center'
            }}>
                팔로우를 요청하여 상대가 수락하면 상대의 더 많은 정보를 열람할 수 있습니다.
            </Text>
        </View>
    )
}

export default PrivateScreen

const styles = StyleSheet.create({
    container: {
        marginTop: 35,
        marginBottom: 20,
        paddingHorizontal: width * 0.15
    }
}) 