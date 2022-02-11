import React ,{useCallback} from 'react'
import { TouchableOpacity,Platform,Dimensions,StyleSheet, SafeAreaView, View, Image,Text,ScrollView } from 'react-native'
import {useNavigation} from '@react-navigation/native'


import VerifyItem from './VerifyItem'

const { width, height } = Dimensions.get('window')


const GroupVerifyBoard = () =>{
    const navigation = useNavigation<any>()
    const myGroupVBoard = useCallback(()=>navigation.navigate('MyGroupVBoard'),[])

    return (<View style={styles.mainContainer}>
        <View style={styles.subtitleContainer}>
            <Text style={styles.titleText}>인증게시판</Text>
            <TouchableOpacity style={{
                marginLeft:'auto', marginRight:10, marginBottom:2,
                alignSelf:'flex-end'
                }}
                onPress={myGroupVBoard}
                >
                <Text style={styles.seeMore}>게시글 더보기 &gt;</Text>
            </TouchableOpacity>
        </View>
        <VerifyItem hasPhoto/>
        <VerifyItem/>


    </View>)
}

export default GroupVerifyBoard

const styles = StyleSheet.create({
    shadow:{
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
    )},
    mainContainer:{
        paddingTop:height*0.04,
    },
    subtitleContainer:{
        flexDirection:'row',
        paddingBottom:10,

    },
    titleText:{
        fontSize: 20,
        fontFamily: 'GodoM',
    },
    seeMore:{
        color:'#7EBEF9',
        fontFamily:'GodoM',
        fontWeight:'bold',
    }
})

