import React, {useCallback,useState} from 'react'
import { Alert,Platform, Dimensions,StyleSheet, SafeAreaView, View, Image,Text,ScrollView, TouchableOpacity } from 'react-native'
import Modal from "react-native-modal";
import Icon from 'react-native-vector-icons/Ionicons'
import MemberIcon from '../../../../component/MemberIcon';
import MemberHistory from './MemberHistory';
import {useNavigation} from '@react-navigation/native'


const { width, height } = Dimensions.get('window')

type MemberModalProps ={
    modalVisible:boolean,
    setModalVisible:React.Dispatch<React.SetStateAction<boolean>>
    isLeader:boolean
}
const MemberModal= ({modalVisible,setModalVisible,isLeader}:MemberModalProps) =>{
    
    /*option에서 onPRess 를 받아오든지 해야할듯
    navigation??
    */
    const navigation = useNavigation<any>()
    const onPress = useCallback(()=>navigation.pop(2),[])

    const goAlert = () =>
     Alert.alert(                    // 말그대로 Alert를 띄운다
      '정말 강퇴하시겠습니까?',                    // 첫번째 text: 타이틀 제목
      '멤버를 강제 퇴장 시킬 시 그룹에 저장된 멤버의 데이터는 모두 사라지며, 복구할 수 없습니다. 그래도 강퇴하시겠습니까?',// 두번째 text: 그 밑에 작은 제목
      [                              // 버튼 배열
        {
          text: "아니요",                              // 버튼 제목
          style: "cancel"
        },
        { text: "네", onPress: () => setModalVisible(false) }, //버튼 제목// 이벤트 발생시 로그를 찍는다
      ],
      { cancelable: false }
    );
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
                    touchable
                    style={{
                        marginTop:15,
                        alignSelf:'center',
                    }}
                    size={90}
                />

                <Text style={styles.memberNameText}>고달픈승구</Text>
                <MemberHistory/>
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>setModalVisible(false)}>
                    <Text style={{
                        color:'#ffffff',
                        fontWeight:'bold',
                        fontSize:17,
                        textAlign:'center'
                    }}>프로필 보기</Text>
                </TouchableOpacity>
                {isLeader&&
                <TouchableOpacity
                    style={styles.outButton}
                    onPress={()=>{
                        goAlert()
                        
                    }}>
                    <Text style={{
                        color:'#ffffff',
                        fontWeight:'bold',
                        fontSize:17,
                        textAlign:'center'

                    }}>멤버 강퇴하기</Text>
                </TouchableOpacity>
                }
            </View>
        </Modal>
     </>
 )
}

export default MemberModal

MemberModal.defaultProps={
    isLeader:false,
}
const styles= StyleSheet.create({
    modalContainer:{
        // backgroundColor:'#ffffff',
        backgroundColor:'#F9F9F9',

        width:width*0.85,
        // height:height*0.6,
        borderRadius:20,

    },
    memberNameText:{
        marginTop:10,
        alignSelf:'center',
        fontSize:17,
        fontFamily:'GodoM'
    },
    button:{
        alignSelf:'center',
        marginBottom:10,
        marginTop:10,
        justifyContent:'center',
        borderRadius:15,
        backgroundColor:'#8AC8FF',
        width:width*0.7,
        zIndex:-1,
        paddingVertical:10,

    },
    outButton:{
        alignSelf:'center',
        marginBottom:10,
        justifyContent:'center',
        borderRadius:15,
        backgroundColor:'#FF4141',
        width:width*0.7,
        zIndex:-1,
        paddingVertical:10,

    }
})