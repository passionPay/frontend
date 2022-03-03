import React, { useState } from 'react'
import { Platform, Dimensions, StyleSheet, SafeAreaView, View, Image, Text, ScrollView, TouchableOpacity } from 'react-native'
import ImageModal from 'react-native-image-modal'

import { TouchableIcon } from '../../../../component/CustomComponent'
import MemberIcon from '../../../../component/MemberIcon'
import PostMenuModal from './PostMenuModal'
const { width, height } = Dimensions.get('window')


const PostSection = ({ data }) => {

    const [modalVisible, setModalVisible] = useState(false)
    return (
        <>
            <View style={{ flexDirection: 'row', marginHorizontal: width * 0.05, justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', }}>
                    <MemberIcon size={50} isOnline></MemberIcon>
                    <View style={{ paddingLeft: 20, paddingTop: 5, justifyContent: 'space-around', backgroundColor: undefined }}>
                        <Text style={{ fontSize: 15, }}>{data.author}</Text>
                        <Text style={{ fontSize: 13, }}>{data.createdAt}</Text>
                    </View>
                </View>
                <TouchableIcon
                    onPress={() => setModalVisible(true)}
                    iconProps={{
                        style: [{ marginTop: 10, marginLeft: 5, marginRight: width * 0.03, }],
                        name: 'dots-horizontal', size: 25, color: 'black'
                    }} />

            </View>

            <Text style={{ marginHorizontal: '5%', marginTop: height * 0.03, fontSize: 13, }}>{data.content}</Text>
            
            {data.photos.length!==0&& <ImageSection data={data} />}
            

            <View style={{
                marginHorizontal: '5%', marginVertical: height * 0.03, flexDirection: 'row', marginRight: width * 0.03,
            }}>
                <TouchableOpacity>
                    <Text style={{ fontSize: 13, marginTop: 5, }}>좋아요 3</Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 13, marginTop: 5, }}>  |  </Text>
                <Text style={{ fontSize: 13, marginTop: 5, }}>댓글 4</Text>

            </View>

            <PostMenuModal modalVisible={modalVisible} setModalVisible={setModalVisible}
                isAuthor={true} editParams={{ prevState: { content: data.content, photos: [] } }}
            />

        </>
    )
}

export default PostSection



const ImageSection = ({ data }) => {
    return (
        <View style={{ marginLeft:width*0.05,height: 120, marginTop: height * 0.03 }}>
            <ScrollView horizontal bounces={false} showsHorizontalScrollIndicator={false}>
            {data.photos.map((item, idx) =>
            <View key={idx} style={{marginRight:5, }}>
                <ImageModal
                    resizeMode="contain"
                    modalImageResizeMode="contain"
                    imageBackgroundColor="#000000"
                    style={{
                        width: 100,height: 100,
                    }}
                    source={{
                        uri: 'https://cdn.pixabay.com/photo/2019/07/25/18/58/church-4363258_960_720.jpg',
                    }}
                />
            </View>
            )}
            </ScrollView>
            

        </View>
    )
}

