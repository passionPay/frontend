import React, { useCallback, useState } from 'react'
import { Platform, Dimensions, StyleSheet, SafeAreaView, View, Image, Text, ScrollView, TouchableOpacity } from 'react-native'
import MemberIcon from '../../../../component/MemberIcon'

const { width, height } = Dimensions.get('window')


const PostSection = ({data}) => {
    return (
        <>
            <View style={{ flexDirection: 'row', marginHorizontal: width * 0.05, justifyContent:'space-between'}}>
                <View style={{ flexDirection: 'row',  }}>
                    <MemberIcon size={50} isOnline></MemberIcon>
                    <View style={{ paddingLeft: 20, paddingTop: 5, justifyContent: 'space-around', backgroundColor: undefined }}>
                        <Text style={{fontSize: 15,}}>{data.author}</Text>
                        <Text style={{fontSize: 13,}}>{data.createdAt}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginRight: width * 0.03, 
                    }}>
                    <TouchableOpacity>
                        <Text style={{fontSize: 13, marginTop:5,}}>좋아요 3</Text> 
                    </TouchableOpacity>
                    <Text style={{fontSize: 13, marginTop:5,}}>  |  </Text>
                    <Text style={{fontSize: 13, marginTop:5,}}>댓글 4</Text>
                </View>
            </View>

            <Text style={{ marginHorizontal: '5%', marginVertical: height * 0.03, fontSize: 13, }}>{data.content}</Text>
        </>
    )
}

export default PostSection