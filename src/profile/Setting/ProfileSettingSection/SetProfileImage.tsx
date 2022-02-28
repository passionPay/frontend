import React, { useCallback, useEffect, useState } from 'react'
import { Alert, TextInput, Platform, Dimensions, StyleSheet, SafeAreaView, View, Image, Text, ScrollView, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { SettingItem } from '../../../component/SettingItem'
import MemberIcon from '../../../component/MemberIcon'
import { hasPermissions } from '../../../group/MyGroup/MyGroupVBoard/WritePost/permissionHelper'
import { launchImageLibrary } from 'react-native-image-picker'




const { width, height } = Dimensions.get('window')

const profileImageSettingItems = [
    {
        tag: '프로필 사진 변경하기',
        type: 'custom',
        option: {
        }
    },
    {
        tag: '프로필 사진 삭제하기',
        type: 'custom',
        option: {
        }
    },
]


type StateType =
    {
        name: string | undefined,
        type: string | undefined,
        uri: string | undefined
    }


const initState: StateType = {
    name: '',
    type: 'image/jpeg',
    uri: '',
}



const SetProfileImage = () => {
    const navigation = useNavigation<any>()
    const goBack = useCallback(() => navigation.goBack(), [])

    const [input, setInput] = useState(initState)

    const onChangePress = useCallback(async () => {
        try {
            const isPermitted = await hasPermissions(Platform.OS, 'Gallery')
            if (isPermitted) {
                const result = await launchImageLibrary({ mediaType: 'photo', selectionLimit: 1, })
                if (result.assets) {
                    if (result.assets.length>1){
                        console.log('too many photo')
                    }
                    else{
                        setInput(result.assets.map((item, idx) => ({ name: item.fileName, type: 'image/jpeg', uri: item.uri }))[0])
                    }  
                } else {
                    console.log('upload canceled or failed')
                }
            } else {
                Alert.alert(
                    '권한 설정',
                    '사진 접근 권한이 없습니다. 설정에서 사진 접근 권한을 허용해주세요.',
                    [
                        { text: "확인" },
                    ],
                )
            }
        } catch (error) {
            console.log(error)
        }
    }, [])

    const onDeletePress = useCallback(() => {
        Alert.alert(
            '프로필 사진 삭제',
            '정말 삭제하시겠습니까?',
            [
                {
                    text: '취소'
                },
                {
                    text: '확인',
                    onPress: () => setInput({ name: 'default', type: 'image/jpeg', uri: '' })
                }
            ]
        )
    }, [])


    const onSubmit = useCallback(() => {
        if (input.uri !== '') {
            console.log(input)
            goBack()
        }
        else console.log('empty!')
    }, [input])

    useEffect(() => {
        console.log(input)
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
                    <Text style={styles.title}>{'프로필 사진 설정'}</Text>
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

                <MemberIcon source={{ uri: input.uri }} size={150} style={{ alignSelf: 'center', marginVertical: 20, }} />
                <SettingItem tag={'프로필 사진 변경하기'} type={'custom'}
                    option={{ onPress: onChangePress }}
                />
                <SettingItem tag={'프로필 사진 삭제하기'} type={'custom'}
                    option={{onPress:onDeletePress}}
                />

            </View>
        </SafeAreaView>
    )
}

export default SetProfileImage

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
    titleInfo: {
        fontSize: 15,
        paddingVertical: 10,
        borderWidth: 0.4,
        paddingHorizontal: 10,
        marginHorizontal: 20, flex: 1
    },
    contentInfo: {
        fontSize: 15,
        paddingTop: 10,
        paddingBottom: 10,
        height: 300,
        borderWidth: 0.4,
        paddingHorizontal: 10,
        marginHorizontal: 20, flex: 1
    },
    noticeTitleContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    noticeContentContainer: {
        flexDirection: 'row',
        marginTop: 30,
    },
    submitButton: {
        width: 80,
        height: 30,
        marginLeft: 10,
        borderRadius: 10,

        backgroundColor: '#7EBEF9',
        justifyContent: 'center',
    },
    info: {
        borderBottomWidth: 0.5,
        fontSize: 15, paddingVertical: 10,
        backgroundColor: '#f9f9f9',
        paddingHorizontal: 10,
    },
})