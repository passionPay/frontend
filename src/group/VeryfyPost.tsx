import React, {useCallback} from 'react'
import { Platform, Dimensions,StyleSheet, SafeAreaView, View, Image,Text,ScrollView, TouchableOpacity } from 'react-native'
import {useNavigation} from '@react-navigation/native'


const { width, height } = Dimensions.get('window')



export default function VerifyPost() {

    const navigation = useNavigation<any>()
    const goBack = useCallback(()=>navigation.goBack(),[])

    return (
    <SafeAreaView style={styles.safeContainer}>
        <View style={styles.container}>

                <TouchableOpacity style={styles.header} onPress={goBack}>
                    <Text style={{fontSize: 17,
                                fontFamily: 'GodoM',
                                color: '#9F9F9F',
                                // backgroundColor:'#000000'
                                
                                }} >
                    &lt; 인증게시판 </Text>
                </TouchableOpacity>
            <ScrollView showsVerticalScrollIndicator={false}> 
                <Text style={styles.title}></Text>

                
                
            </ScrollView>
            
        </View>
    </SafeAreaView>
    )

}


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
    header:{

        height:60,

        // backgroundColor:'#ff0000',
        justifyContent:'center',
        alignSelf:'baseline',


    },
    safeContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container:{
        flex:1,
        paddingHorizontal: '5%',
    },
    title: {
        fontSize: 24,
        fontFamily: 'GodoM',
        color: '#000',
        
    },

    groupDescription: {
        fontSize: 17,
        fontFamily: 'GodoM',
        color: '#484848',
        marginTop: width*0.05,
    },
    

})

