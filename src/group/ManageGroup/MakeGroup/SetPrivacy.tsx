
import React, {useCallback,useState,useReducer} from 'react'
import {ScrollView,TextInput, TouchableOpacity, SafeAreaView,View,Dimensions,StyleSheet,Text} from 'react-native'

const { width, height } = Dimensions.get('window')


const MakePrivacy = ({privacy,dispatch})=>{

    const setPrivacy = useCallback((privacy) =>{
        dispatch({
            type:'CHANGE_INPUT',
            name:'privacy',
            value:privacy,
        })
    },[dispatch])

    return(
        <>
            <Text style={[styles.tag, { paddingTop:20,paddingBottom: 15 }]}>공개 여부</Text>
                <View style={{flexDirection:'row',justifyContent:'space-around',paddingBottom:15}}>
                    <TouchableOpacity 
                        style={[styles.selectButton,privacy?{}:{backgroundColor:'#7EBEF9'}]}
                        onPress ={()=>setPrivacy(false)}>
                        <Text style={[privacy?{}:{color:'white'}]}>공개</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={[styles.selectButton,privacy?{backgroundColor:'#7EBEF9',borderColor:'blue'}:{}]}
                        onPress={()=>setPrivacy(true)}>
                        <Text style={[privacy?{color:'white'}:{}]}>비공개</Text>
                    </TouchableOpacity>
                </View>
                {privacy&&
                    <View style={styles.row} >
                    <TextInput style={styles.info} keyboardType='numeric'
                            placeholder ={'그룹 비밀번호를 설정해주세요.'}
                    />
                    </View>
                }
        </>
    )
}

export default MakePrivacy

const styles = StyleSheet.create({
    tag: {
        fontSize: 16, 
        paddingRight: 10,
        paddingLeft:10,
    },
    info: {
        fontSize: 15, paddingVertical: 3,
        borderRadius: 10,

        paddingHorizontal: 10, 
        marginHorizontal: 20, flex: 1
    },
    row: {
        borderBottomWidth: 1, 
        flexDirection: 'row', alignItems: 'center', paddingVertical: 6
    },
    selectButton:{
        borderWidth:0.5,
        width:width*0.4,
        alignItems:'center',
        paddingVertical:10,
        borderRadius:10,
    }
})