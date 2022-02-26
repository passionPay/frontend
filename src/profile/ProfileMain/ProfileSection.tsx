import React, { useCallback } from 'react'
import { View, Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import MemberIcon from '../../component/MemberIcon'

const { width, height } = Dimensions.get('window')


const ProfileSection = ({ profileData }) => {
    

    return (
        <View>
            <View style={{ flexDirection: 'row', paddingHorizontal: '5%', paddingTop: '3%', paddingBottom: '3%' }}>
                <View style={styles.profileContainer}>
                    <MemberIcon size={80}  />
                    <Text style={{
                        fontSize: 16,
                        fontFamily: 'GodoM',
                        color: '#000',
                        marginTop: 10
                    }}>{profileData.memberName}</Text>
                </View>
                <View style={{ flex: 1.5, justifyContent: 'center' }}>
                    <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between', marginHorizontal: width * 0.9 * 0.66 * 0, marginRight: width * 0.9 * 0.66 * 0.07 }}>
                        <TouchableOpacity
                            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 18 }}>{profileData.followingCount}</Text>
                            <Text style={{ marginTop: 5, fontSize: 12 }}>팔로잉</Text>

                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 18 }}>{profileData.followerCount}</Text>
                            <Text style={{ marginTop: 5, fontSize: 12 }}>팔로워</Text>

                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between', marginHorizontal: width * 0.9 * 0.66 * 0, marginRight: width * 0.9 * 0.66 * 0.07 }}>

                        <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 18 }}>{profileData.postCount}</Text>
                            <Text style={{ marginTop: 5, fontSize: 12 }}>내가 쓴 글</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 18 }}>{profileData.commentPostCount}</Text>
                            <Text style={{ marginTop: 5, fontSize: 12 }}>댓글/답변 단 글</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
            </View>
            <View style={{ borderBottomWidth: 0.3, borderTopWidth: 0.3, padding: width * 0.05 }}>
                <Text
                    style={{
                        fontSize: 13,
                        fontWeight: '300',
                        textAlign: 'center'
                    }}>
                    {profileData.motto}
                </Text>
            </View>

        </View>
    )
}

export default ProfileSection
const styles = StyleSheet.create({
    profileContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor:'#ff0000'
    },
})
