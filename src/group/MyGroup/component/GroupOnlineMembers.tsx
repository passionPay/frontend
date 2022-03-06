import React, { useState } from 'react'
import { Dimensions, StyleSheet, SafeAreaView, View, Image, Text, ScrollView } from 'react-native'

import MemberIcon from '../../../component/MemberIcon'
import MemberModal from '../../commonComponent/MemberModal'
import { useGroupState } from '../MyGroupContext'

const { width, height } = Dimensions.get('window')

const Members = () => {
    const [modalVisible, setModalVisible] = useState<boolean>(false)
    const groupState = useGroupState();

    return (

        <View style={styles.mainContainer}>
            <Text style={styles.memberTitleText}>공부 중인 친구들</Text>

            <ScrollView style={styles.memberScrollContainer} horizontal={true} showsHorizontalScrollIndicator={false}>

                {groupState.groupMembers.map((item, idx) => (
                    <MemberIcon 
                        key={idx}
                        size={50} style={{ marginHorizontal: width * 0.02 }}
                        isOnline touchable
                        source={{uri:item.uri}}
                        onPress={() => setModalVisible(true)}
                    />
                ))}

                
            </ScrollView>
            <MemberModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
        </View>
    )
}

export default Members

const styles = StyleSheet.create({
    mainContainer: {
        marginTop: height * 0.04,

    },
    memberScrollContainer: {
        marginTop: height * 0.01,
        paddingVertical: height * 0.02,
        paddingLeft: width * 0.02,
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: '#c4c4c4'
    },
    memberImage: {
        width: 35, height: 35,
        borderRadius: 20,
        // backgroundColor: '#ddd',
    },
    memberTitleText: {
        fontSize: 15,
        fontFamily: 'GodoM',
    },
    memberImageContainer: {
        marginHorizontal: width * 0.03,
    }



})