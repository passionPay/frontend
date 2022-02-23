import React, {useCallback,useState} from 'react'
import { Platform, Dimensions,StyleSheet, SafeAreaView, View, Image,Text,ScrollView, TouchableOpacity } from 'react-native'
import Modal from "react-native-modal";
import Icon from 'react-native-vector-icons/Ionicons'
import MemberIcon from '../../../../component/MemberIcon';
import {useNavigation} from '@react-navigation/native'


const { width, height } = Dimensions.get('window')

const MemberModal= ({modalVisible,setModalVisible,data,option={}}) =>{
    
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
                <MemberIcon
                size={80}/>
                <TouchableOpacity
                    onPress={()=>setModalVisible(false)}>
                    <Text>hihi</Text>
                </TouchableOpacity>
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


            </View>
        </Modal>
     </>
 )
}

export default MemberModal

const styles= StyleSheet.create({
    modalContainer:{
        // backgroundColor:'#ffffff',
        backgroundColor:'#F9F9F9',

        width:width*0.85,
        height:height*0.6,
        borderRadius:20,

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
})