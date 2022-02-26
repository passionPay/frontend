import React, { useCallback, useState } from 'react'
import { View, Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import MemberIcon from '../../component/MemberIcon'

const { width, height } = Dimensions.get('window')


const PublicProfileSection = ({ profileData, onPressPrivate }) => {
    const navigation = useNavigation<any>()

    const [followState, setFollowState] = useState(1)

    const onFollowPress = useCallback((state)=>{
        if (state===0) {
            if (profileData.isPrivate){
                console.log('follow requested')
                setFollowState(1)
            }else{
                console.log('follow successed')
                setFollowState(2)
            }
        }else {
            console.log('follow canceled')
            setFollowState(0)
        }
    },[])


    return (

        <View>
            <View style={{ flexDirection: 'row', paddingHorizontal: '5%', paddingTop: '3%', paddingBottom: '3%' }}>
                <View style={styles.profileContainer}>
                    <MemberIcon size={80} />
                    <Text style={{
                        fontSize: 16,
                        fontFamily: 'GodoM',
                        color: '#000',
                        marginTop: 10
                    }}>{profileData.memberName}</Text>
                </View>
                <View style={{ flex: 1.5, paddingTop:15,justifyContent: 'space-between', backgroundColor: 'white' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white' }}>
                        <TouchableOpacity
                            onPress={onPressPrivate}
                            style={{ width: 80, borderWidth: 0, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                            <Text style={{ fontSize: 18 }}>{profileData.followingCount}</Text>
                            <Text style={{ marginTop: 5, fontSize: 12 }}>팔로잉</Text>

                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={onPressPrivate}
                            style={{ width: 80, borderWidth: 0, justifyContent: 'center', alignItems: 'center', }}>
                            <Text style={{ fontSize: 18 }}>{profileData.followerCount}</Text>
                            <Text style={{ marginTop: 5, fontSize: 12 }}>팔로워</Text>

                        </TouchableOpacity>
                    </View>
                    <FollowButton followState={followState} onPress={onFollowPress}/>

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

export default PublicProfileSection
const styles = StyleSheet.create({
    profileContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor:'#ff0000'
    },
    followButton: {
        backgroundColor: '#8AC8FF',
        width: 160,
        height:37,
        justifyContent:'center',
        alignSelf: 'center',
        paddingVertical: 10,
        marginBottom:3,
        borderRadius: 10,
    },
    followingButton: {
        backgroundColor: '#ffffff',
        width: 160,
        height:37,
        justifyContent:'center',
        alignSelf: 'center',
        paddingVertical: 10,
        borderRadius: 10,
        borderWidth:0.5,
        marginBottom:3,

    },
})


const FollowButton = ({ followState,onPress }) => {
    switch (followState) {
        case 0:
            return (
                <TouchableOpacity
                    style={styles.followButton}
                    onPress={() => onPress(0)}

                >
                    <Text style={{
                        fontSize: 14,
                        textAlign: 'center',
                        fontWeight: 'bold',
                        color: '#ffffff',
                    }}>팔로우
                    </Text>
                </TouchableOpacity>
            )
        case 1 :
            return (
                <TouchableOpacity
                    style={styles.followingButton}
                    onPress={() => onPress(1)}

                >
                    <Text style={{
                        fontSize: 14,
                        textAlign: 'center',
                        fontWeight: '500',
                        color: '#000000',
                    }}>팔로우 요청함
                    </Text>
                </TouchableOpacity>
            )
        case 2:
            return (
                <TouchableOpacity
                    style={styles.followingButton}
                    onPress={() => onPress(2)}

                >
                    <Text style={{
                        fontSize: 14,
                        textAlign: 'center',
                        fontWeight: '500',
                        color: '#000000',
                    }}>팔로잉
                    </Text>
                </TouchableOpacity>
            )
        default :
            throw Error('inappropriate follow Status')
    }
}