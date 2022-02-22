import React, {useCallback,useEffect,useRef,useState} from 'react'
import {View,Text,TouchableOpacity,TextInput,Dimensions,StyleSheet} from 'react-native'

//props here is textProps
const CommonInput = ({state,dispatch,stateName,tagName,...props})=>{
    return(
    <>
        <View style={styles.row}>
            <Text style={styles.tag}>{tagName}</Text>
            <TextInput style={styles.info} value={state[stateName]}
                onChangeText={(text)=>{dispatch({type:'CHANGE_INPUT',name:stateName,value:text})}}
                {...props}
            />
        </View>
    </>
    )
}

export default CommonInput

const styles=StyleSheet.create({
    tag: {
        fontSize: 16, 
        paddingRight: 10,
        paddingLeft:10,
    },
    info: {
        fontSize: 15, paddingVertical: 7,
        // borderRadius: 10,
        backgroundColor:'#f9f9f9',
        paddingHorizontal: 10, 
        marginHorizontal: 20, flex: 1
    },
    row: {
        borderBottomWidth: 1, 
        flexDirection: 'row', alignItems: 'center', paddingVertical: 6
    },
})