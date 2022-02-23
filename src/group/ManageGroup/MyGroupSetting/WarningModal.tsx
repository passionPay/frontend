import React, {useCallback,useState} from 'react'
import { Platform, Dimensions,StyleSheet, SafeAreaView, View, Image,Text,ScrollView, TouchableOpacity } from 'react-native'
import Modal from "react-native-modal";
import Icon from 'react-native-vector-icons/Ionicons'
import {useNavigation} from '@react-navigation/native'


const { width, height } = Dimensions.get('window')

const WarningModal= ({modalVisible,setModalVisible,data,option={}}) =>{
    
    /*option에서 onPRess 를 받아오든지 해야할듯
    navigation??
    */
    const navigation = useNavigation<any>()
    const onPress = useCallback(()=>navigation.pop(2),[])
    return(
    <>
        <Modal
                isVisible={modalVisible}
                useNativeDriver={true}
                hideModalContentWhileAnimating={true}
                style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <View style={styles.modalContainer}>
                <Icon style={{
                    alignSelf:'center',
                    marginTop:15,
                }}
                    name='warning-outline' size={width*0.22} color='#FF4141'/>

                <Text style={{
                    fontSize:23,
                    fontWeight:'bold',
                    alignSelf:'center'
                }}>{data.title}</Text>
                <Text style={{
                    marginVertical:10,
                    marginHorizontal:width*0.1,
                    fontSize:15,
                    alignSelf:'center'
                }}>{data.content}</Text>

                <View style={{
                    flexDirection:'row',
                    paddingHorizontal:width*0.03,
                    justifyContent:'center'
                }}>

                    <TouchableOpacity
                        style={styles.cancelButton}
                        onPress={()=>setModalVisible(false)} 
                    >
                            <Text style={{
                                fontSize:17,
                                textAlign:'center',
                                fontWeight:'bold',
                                color:'#000000',
                            }}>취소하기
                            </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.confirmButton}
                        onPress={()=>{
                            onPress()
                            setModalVisible(false)
                        }} 
                    >
                            <Text style={{
                                fontSize:17,
                                textAlign:'center',
                                fontWeight:'bold',
                                color:'#ffffff',
                            }}>{data.buttonText}
                            </Text>
                    </TouchableOpacity>
                </View>

            </View>
        </Modal>
     </>
 )
}

export default WarningModal

const styles= StyleSheet.create({
    modalContainer:{
        // backgroundColor:'#ffffff',
        backgroundColor:'#F9F9F9',

        width:width*0.85,
        // height:height*0.3,
        borderRadius:20,
        marginBottom:height*0.1,

    },
    titleContainer:{
        padding:20,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        // borderWidth:1,
        // backgroundColor:'#7EBEF9',
        backgroundColor:'#F67B7B'
    },
    contentContainer:{
        padding:20,
        flex:1,
    },
    cancelButton:{
        // borderWidth:0.5,
        marginBottom:20,
        width:130,
        alignSelf:'center',
        paddingVertical:10,
        borderRadius:20,
        borderWidth:0.5,


    },
    confirmButton:{
        // borderWidth:0.5,
        marginLeft:10,
        marginBottom:20,
        width:130,
        alignSelf:'center',
        paddingVertical:10,
        borderRadius:20,
        backgroundColor:'#FF4141',

    }
})