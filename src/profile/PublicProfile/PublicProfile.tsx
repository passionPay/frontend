import React, { useCallback, useState } from 'react'
import { TouchableOpacity, Image, ScrollView, Dimensions, SafeAreaView, StyleSheet, Text, View, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { TouchableIcon } from '../../component/CustomComponent'
import CommonModal from '../../group/commonComponent/CommonModal'

import PublicProfileSection from './PublicProfileMainSection'
import RecordSection from '../ProfileMain/RecordSection'
import PrivateScreen from './PrivateScreen'



const { width, height } = Dimensions.get('window')

type ProfileDataType = {
    memberProfile: MemberProfileType,
    date: string,

}


type MemberProfileType = {
    memberImage: string,
    memberName: string,
    followingCount: number,
    followerCount: number,
    postCount?: number,
    commentPostCount?: number,
    motto: string,
    isPrivate: boolean,
}
const initState: ProfileDataType = {
    memberProfile: {
        memberImage: '/',
        memberName: '고달픈승구',
        followingCount: 100,
        followerCount: 1000,
        postCount: 10000,
        commentPostCount: 100000,
        motto: '노력하는 자는 즐기는 자를 이기지 못한다. ㅁㄴㅇㄹ',
        isPrivate: false,
    },
    date: '2022-02-21',
}




const PublicProfile = () => {
    const navigation = useNavigation<any>()
    const profileSetting = useCallback(() => navigation.navigate('ProfileSetting'), [])
    const goBack = useCallback(() => navigation.goBack(), [])
    const [data, setData] = useState(initState)

    const [modalVisible, setModalVisible] = useState(false)
    const onPressPrivate = useCallback(()=>{ setModalVisible(true)},[])
        

    return (
        <SafeAreaView style={styles.safeContainer}>
            <View style={styles.header}>
                <View>
                    <Text style={styles.titleText}>Profile</Text>
                </View>

                <View style={{ flexDirection: 'row' }}>

                    <TouchableIcon
                        onPress={goBack}
                        iconProps={{ style: [styles.headerIcon], name: 'cog-outline', size: 23, color: 'black' }}
                        style={{
                            marginRight: width * 0.03,
                        }}
                    />
                </View>
            </View>

            <ScrollView style={{ flex: 1, }} >
                <PublicProfileSection onPressPrivate={onPressPrivate} profileData={data.memberProfile} />
                {data.memberProfile.isPrivate ? <PrivateScreen /> : <RecordSection />}
                <TouchableOpacity
                    onPress={onPressPrivate}
                    style={styles.plannerButton}>
                    <Text style={{ fontSize: 14 }}>플래너 보러가기</Text>
                </TouchableOpacity>
            </ScrollView>
            <CommonModal
                modalVisible={modalVisible} setModalVisible={setModalVisible}
                data={{
                    title:'비공개 계정입니다',
                    content:'팔로우를 요청하여 상대가 수락하면 상대의 정보를 열람할 수 있어요',
                }}
            />
        </SafeAreaView>
    )
}
export default PublicProfile

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        paddingHorizontal: '5%',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
        // backgroundColor:'#ff00ff'
    },
    titleText: {
        fontSize: 18,
        fontFamily: 'GodoM',
        color: '#000',
    },
    headerIcon: {
        paddingLeft: 10,
    },

    timeCard: {
        width: width * 0.43,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center'

    },
    plannerButton: {
        marginTop: height * 0.02,
        marginBottom: height * 0.04,
        width: width * 0.5,
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'grey',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    }

})





const getOnPressListener = (isPrivate: boolean) => {
    if (isPrivate) {
        return () => {
            Alert.alert(
                '비공개 계정입니다',
                '팔로우를 요청하여 상대가 수락하면 상대의 플래너를 열람할 수 있어요',
                [
                    { text: "확인", onPress: () => console.log('네 pressed') },
                ],
                { cancelable: false }
            );
        }
    }
    return () => { }
}