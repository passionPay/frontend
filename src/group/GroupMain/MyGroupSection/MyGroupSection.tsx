import React, { useCallback } from 'react'
import { Dimensions, StyleSheet, SafeAreaView, View, Image, Text, ScrollView } from 'react-native'

import MyGroupCard from './MyGroupCard'
import GroupEmpty from '../GroupEmpty'

const { width, height } = Dimensions.get('window')

const MyGroupSection = ({ myGroups }) => {
    return (
        <>
            <Text style={styles.groupTitle}>내 스터디 그룹</Text>
            {myGroups.length === 0 ? <GroupEmpty isMine /> :
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{
                        paddingLeft: width * 0.05,
                    }}>
                    <MyGroupCard />
                    <MyGroupCard />
                    <MyGroupCard />
                </ScrollView>
            }
        </>
    )
}

export default MyGroupSection

const styles = StyleSheet.create({
    groupTitle: {
        fontSize: 15,
        fontFamily: 'GodoM',
        color: '#484848',
        marginTop: 0,
    },
})