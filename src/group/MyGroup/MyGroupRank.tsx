import React, { useCallback } from 'react'
import { Platform, Dimensions, StyleSheet, SafeAreaView, View, Image, Text, ScrollView, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import RankItem from './component/RankItem'

const { width, height } = Dimensions.get('window')
type RankDataType = {
    name: string,
    rank: number,
    time: string,
}

const datas: RankDataType[] = [
    {
        rank: 1,
        name: '윤예슬',
        time: '22시간 30분'
    },
    {
        rank: 2,
        name: '고달픈승구',
        time: '22시간 30분'
    },
    {
        rank: 3,
        name: '바보',
        time: '22시간 30분'
    },
    {
        rank: 4,
        name: 'ghghgghhghhghghghghghghghghghghghghghghghghghghghghghgh',
        time: '22시간 30분'
    },
    {
        rank: 5,
        name: '윤예슬',
        time: '22시간 30분'
    },
]
const data: RankDataType = {
    rank: 1,
    name: '윤예슬',
    time: '22시간 30분'
}


export default function MyGroupGoal() {

    const navigation = useNavigation<any>()
    const goBack = useCallback(() => navigation.goBack(), [])
    return (
        <SafeAreaView style={styles.safeContainer}>
            <View style={styles.container}>

                <TouchableOpacity style={styles.header} onPress={goBack}>
                    <Text style={{
                        fontSize: 13,
                        fontFamily: 'GodoM',
                        color: '#9F9F9F',
                        // backgroundColor:'#000000'

                    }} >
                        &lt; 3학년 1반 국어스터디 </Text>
                </TouchableOpacity>
                <Text style={styles.title}>그룹 랭킹</Text>

                <ScrollView showsVerticalScrollIndicator={false}>

                    {datas.map((item, idx) => (
                        <RankItem data={item} key={idx} />
                    ))}

                </ScrollView>

            </View>

        </SafeAreaView>
    )

}


const styles = StyleSheet.create({
    shadow: {
        ...Platform.select({
            ios: {
                shadowColor: "#000",
                shadowOffset: {
                    width: 0.1,
                    height: 0.1,
                },
                shadowOpacity: 0.25,
            },
            android: {
                elevation: 3,
            },
        }
        )
    },
    header: {

        height: 60,

        // backgroundColor:'#ff0000',
        justifyContent: 'center',
        alignSelf: 'baseline',


    },
    safeContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        paddingHorizontal: '5%',
    },
    title: {
        fontSize: 18,
        fontFamily: 'GodoM',
        color: '#000',
        marginBottom: height * 0.02,

    },

    groupDescription: {
        fontSize: 17,
        fontFamily: 'GodoM',
        color: '#484848',
        marginTop: width * 0.05,
    },


})

