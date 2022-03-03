import React, { useCallback, useEffect, useState } from 'react'
import { Alert, TextInput, Platform, Dimensions, StyleSheet, SafeAreaView, View, Image, Text, ScrollView, TouchableOpacity } from 'react-native'
import { hasPermissions } from './permissionHelper'
import { RESULTS } from 'react-native-permissions';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { createIconSetFromFontello } from 'react-native-vector-icons';

const { width, height } = Dimensions.get('window')




const ImageUploadSection = ({state,setState}) => {
    const setDatas = useCallback((datas)=>{
        setState({...state,photos:datas})
    },[setState,state])
    return (
        <>
            <NewPhotoItem style={{ marginVertical: 20, }} setDatas={setDatas} />
            <View style={{ height: 140 }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                    {state.photos.map((item: any, idx:number) => {
                        return (
                            <PhotoItem key={idx} source={{ uri: item.uri }} />
                        )
                    })}
                </ScrollView>
            </View>
        </>

    )
}

export default ImageUploadSection

const PhotoItem = ({ source }) => {
    return (

            <TouchableOpacity
                style={{
                    width: 80, height: 80, borderWidth: 1, marginHorizontal: 5, backgroundColor: 'red',
                }}>
                <Image style={{ width: 78, height: 78, }} source={source} />
            </TouchableOpacity>
    )
}

const NewPhotoItem = ({ setDatas, style }) => {

    const onPress = useCallback(async () => {
        try {
            const isPermitted = await hasPermissions(Platform.OS,'Gallery')
            if (isPermitted) {
                const result = await launchImageLibrary({ mediaType: 'photo', selectionLimit: 5, })
                if (result.assets) {
                    if (result.assets.length <= 5) {
                        setDatas(result.assets.map((item, idx) => ({ name: item.fileName, type: 'image/jpeg', uri: item.uri })))
                    }
                    else console.log('too many image uplodaed')
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

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[{}, style]}
        >
            <Text style={{ fontSize: 15,fontWeight:'bold',color:'#0085FF' }}>이미지 업로드하기 +</Text>

        </TouchableOpacity>
    )
}


