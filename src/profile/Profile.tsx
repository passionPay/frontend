import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

export default function Profile() {
    return <View style={{backgroundColor: 'white', flex: 1}}>
        <Text style={styles.title}>STUDYGRAM</Text>
        <ScrollView>
            <View style={styles.rateView}>
                <Image source={require('../../images/profile.png')} style={styles.image} />
                <View style={{ flex: 1, padding: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 3, marginBottom: 5 }}>
                        <Text style={styles.rateText}>오늘의 달성률</Text>
                        <Text style={styles.rateText}>34%</Text>
                    </View>
                    <LinearGradient colors={['#CACED5', '#D0D2D8', '#E3E5EC']} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}
                        style={{ borderRadius: 10, height: 18, borderWidth: 0, width: '100%', alignSelf: 'center' }}>
                        <LinearGradient colors={['#2152f0', '#40c0dc']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                            style={[{
                                backgroundColor: "#6667AB66", borderRadius: 10, height: '100%', width: '34%',
                                overflow: 'hidden', borderWidth: 3, borderColor: '#00000000'
                            }]} />
                    </LinearGradient>
                </View>
            </View>
            <Text style={styles.name}>Hi, Sana!</Text>
            <Text style={styles.phrase}>Carpe diem. Seize the day.</Text>
            <ScrollView horizontal={true} style={{padding: 10 }}>
                <View style={styles.rowView}>
                    <View>
                        <Text style={styles.number}>24</Text>
                        <Text style={styles.descText}> Followers </Text>
                    </View>
                    <Image source={require('../../images/followers.png')}
                        style={{ width: 95, height: 95, marginLeft: 30 }} />
                </View>
                <View style={styles.rowView}>
                    <View>
                        <Text style={styles.number}>284</Text>
                        <Text style={styles.descText}> Tasks      </Text>
                    </View>
                    <Image source={require('../../images/tasks.png')}
                        style={{ width: 95, height: 95, marginLeft: 30 }} />
                </View>
                <View style={styles.rowView}>
                    <View>
                        <Text style={styles.number}>24</Text>
                        <Text style={styles.descText}>Study Time</Text>
                    </View>
                    <Image source={require('../../images/studyTime.png')}
                        style={{ width: 95, height: 95, marginLeft: 30 }} />
                </View>
                <View style={styles.rowView}>
                    <View>
                        <Text style={styles.number}>24</Text>
                        <Text style={styles.descText}>Subjects</Text>
                    </View>
                    <Image source={require('../../images/subjects.png')}
                        style={{ width: 95, height: 95, marginLeft: 30 }} />
                </View>
            </ScrollView>
        </ScrollView>
    </View>
}

const styles = StyleSheet.create({
    title: {
        color: 'black', textAlign: 'center',
        fontSize: 18, fontFamily: 'GodoM', marginTop: 50,
        marginBottom: 20
    },
    rateView: {
        padding: 20, flexDirection: 'row', alignItems: 'center'
    },
    rateText: {
        color: 'black', fontSize: 13, fontFamily: 'GodoM'
    },
    image: {
        width: 50, height: 50, borderWidth: 1,
        borderRadius: 40
    },
    name: {
        color: 'black', fontSize: 26, fontFamily: 'GodoM',
        paddingTop: 20, paddingHorizontal: 30,
        fontWeight: 'bold'
    },
    phrase: {
        color: '#4040404f', fontSize: 16, fontFamily: 'GodoM',
        paddingVertical: 5, paddingHorizontal: 30, marginBottom: 20
    },
    rowView: {
        padding: 30, backgroundColor: 'white', elevation: 9,
        marginHorizontal: 10, flexDirection: 'row', width: 'auto',
        borderRadius: 20, marginVertical: 20,
        justifyContent: 'space-between', shadowColor: '#000000aa'
    },
    number: {
        color: '#000000dd', fontSize: 20, fontFamily: 'GodoM',
        fontWeight: 'bold'
    },
    descText: {
        color: '#777777dd', fontSize: 11, fontFamily: 'GodoM',
        // fontWeight: 'bold'
    }
})