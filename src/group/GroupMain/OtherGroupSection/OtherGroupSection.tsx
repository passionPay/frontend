import React, { useCallback } from 'react'
import { Dimensions, StyleSheet, SafeAreaView, View, Image, Text, ScrollView } from 'react-native'

import OtherGroupCard from './OtherGroupCard'
import GroupEmpty from '../GroupEmpty'
import SearchBar from './SearchBar'


const { width, height } = Dimensions.get('window')

const OtherGroupSection = ({ otherGroups }) => {
    return (
        <>
            <View style={styles.otherGroups}>
                        <Text style={styles.groupTitle}>둘러보기</Text>

                        {otherGroups.length === 0 ? <GroupEmpty isMine={false} /> :
                            <>
                                <SearchBar />
                                <OtherGroupCard />
                                <OtherGroupCard />
                                <OtherGroupCard />
                                <OtherGroupCard />
                                <OtherGroupCard />
                                <OtherGroupCard />
                                <OtherGroupCard />
                            </>
                        }

                </View>
        </>
    )
}

export default OtherGroupSection

const styles = StyleSheet.create({
    groupTitle: {
        fontSize: 15,
        fontFamily: 'GodoM',
        color: '#484848',
        marginTop: 0,
    },
    otherGroups: {
        paddingTop: height * 0.02,
    },
})