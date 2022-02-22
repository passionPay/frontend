import React ,{useCallback} from 'react'
import { TouchableOpacity,Platform,Dimensions,StyleSheet, SafeAreaView, View, Image,Text,ScrollView } from 'react-native'
import {useNavigation} from '@react-navigation/native'


import VerifyItem from './VerifyItem'
import TitleWithSeeMore from '../../../component/TitleWithSeeMore'
const { width, height } = Dimensions.get('window')


const GroupVerifyBoard = () =>{
    const navigation = useNavigation<any>()
    const myGroupVBoard = useCallback(()=>navigation.navigate('MyGroupVBoard'),[])

    return (
        <View style={styles.mainContainer}>
            <TitleWithSeeMore 
                        style={styles.subtitleContainer}
                        titleStyle={styles.titleText}
                        seeMoreStyle={styles.seeMore}
                        title={'인증게시판'} seeMore={'게시글 더보기 >'} 
                        seeMoreNavFunc={myGroupVBoard} />
            
            <VerifyItem hasPhoto/>
            <VerifyItem/>
        </View>
    )
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
        fontSize: 15,
        fontFamily: 'GodoM',
    },
    seeMore:{
        fontSize:13,
        color:'#7EBEF9',
        fontFamily:'GodoM',
        fontWeight:'bold',
    }
})

