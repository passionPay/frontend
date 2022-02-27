import React, {useState} from 'react'
import {View,Text, TextInput,StyleSheet,Dimensions, TouchableOpacity} from 'react-native'


const {width,height} = Dimensions.get('window')

const CommentInput = () =>{
    const [input,setInput] = useState('')
    return (
        <View style={styles.inputContainer}>
            <TextInput 
            style={styles.inputBox}
            multiline
            placeholder='댓글을 입력해주세요.'
            value={input}
            onChangeText={setInput}
            />
            <TouchableOpacity>
                <Text style={{marginRight:width*0.02,color:'#7EBEF9',marginLeft:10,}}>댓글달기</Text>
            </TouchableOpacity>
        </View>
        
    )
}

export default CommentInput
const styles = StyleSheet.create({
    inputContainer:{
        flexDirection:'row',
        paddingHorizontal:width*0.05,
        paddingVertical:10,
        backgroundColor:'#ffffff',
        minHeight:50,
        maxHeight:100,
        borderColor: '#c4c4c4',
        borderTopWidth:0.5,
        alignItems:'center',
    },
    inputBox:{
        flex:1,
    }
})