import React, {useCallback,useState,useReducer} from 'react'
import {ScrollView,TextInput, TouchableOpacity, SafeAreaView,View,Dimensions,StyleSheet,Text} from 'react-native'
import {useNavigation} from '@react-navigation/native'

import CommonInput from './CommonInput'
import SetTimeGoal from './SetTimeGoal'
import SetMission from './SetMission'
import SetPrivacy from './SetPrivacy'

import { State } from 'react-native-gesture-handler'


const { width, height } = Dimensions.get('window')

type StateType = {
    title:string,
    description:string,
    timeGoal:string,
    headCount:string,
    missions:{
        value:string,
        id:number,
    }[],

    privacy:boolean,
}
type ActionType= {
    type:'CHANGE_INPUT',
    name:string,
    value:any,
}
const initState : StateType ={
    title: '',
    description:'',
    timeGoal:'',
    headCount:'',
    missions:[
        {
            value:'',
            id:1,
        },
    ],
    privacy:false,
}  
const reducer = (state:StateType,action:ActionType) :StateType => {
    switch (action.type) {
        case 'CHANGE_INPUT' :
            return {
                ...state,
                [action.name]:action.value
        }
    }
    return state
}



const MakeGroup = () => {

    const navigation = useNavigation<any>()
    const goBack = useCallback(()=>navigation.goBack(),[])
    
    const [state,dispatch] = useReducer(reducer,initState)



    return (
    <SafeAreaView style={styles.safeContainer}>
        <View style={styles.container}>
            <TouchableOpacity style={styles.header} onPress={goBack}>
                    <Text style={{fontSize: 13,
                                fontFamily: 'GodoM',
                                color: '#9F9F9F',
                                }} >
                    &lt; Study Group </Text>
            </TouchableOpacity>
            <Text style={styles.title}>그룹 만들기</Text>
            <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
                <View style={{ borderTopLeftRadius: 30, borderTopRightRadius: 30, flex: 1 }}>
                    <CommonInput state={state} dispatch={dispatch} tagName='그룹 이름' stateName='title'
                        placeholder ={'그룹 이름을 입력해주세요'}

                    /> 
                    <CommonInput state={state} dispatch={dispatch} tagName='그룹 소개' stateName='description'
                        placeholder ={'그룹 소개를 입력해주세요'}
                    />
                    <CommonInput state={state} dispatch={dispatch} tagName='인원' stateName='headCount' 
                        placeholder ={'최소 2명 ~ 최대 100명'} keyboardType='numeric'
                    />

                    <SetTimeGoal state={state} dispatch={dispatch} />
                    <SetMission missions={state.missions} dispatch={dispatch}/>
                    <SetPrivacy privacy={state.privacy} dispatch={dispatch}/>
                    
                    

                    <TouchableOpacity style={[styles.selectButton,{alignSelf:'center',marginTop:30}]}>
                            <Text style={{fontSize:14}}>그룹 만들기</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    </SafeAreaView>
    )   
    

}

export default MakeGroup

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: '#fff',
        
    },
    container:{
        flex: 1,
        paddingHorizontal:'5%',
    },
    header:{
        height:50,


        // backgroundColor:'#ff0000',
        justifyContent:'center',
        alignSelf:'baseline',


    },
    title: {
        fontSize: 18,
        fontFamily: 'GodoM',
        color: '#000',
        marginBottom:height*0.02,
        
    },

    textInputTitle: {
        borderBottomWidth: 1, 
        
        padding: 20, borderRadius: 0, fontSize: 18, fontWeight: 'bold',
        marginTop: 30
    },
    textInputContent: {
    
        padding: 20, borderRadius: 0, fontSize: 16,
        borderBottomWidth: 1,
        textAlignVertical: 'top'
    },
    tag: {
        fontSize: 16, 
        paddingRight: 10,
        paddingLeft:10,
    },
    info: {
        fontSize: 15, paddingVertical: 3,
        borderRadius: 10,
        backgroundColor:'#f9f9f9',
        paddingHorizontal: 10, 
        marginHorizontal: 20, flex: 1
    },
    row: {
        borderBottomWidth: 1, 
        flexDirection: 'row', alignItems: 'center', paddingVertical: 6
    },
    btn: {
        color: 'black', paddingVertical: 10,
        borderRadius: 10,
        fontSize: 15, marginHorizontal: 5, paddingHorizontal: 20,
        borderColor: '#FFB830', borderWidth: 1,
        marginTop: 10, width: width * 0.3, textAlign: 'center'
    },
    selectButton:{
        borderWidth:0.5,
        width:width*0.4,
        alignItems:'center',
        paddingVertical:10,
        borderRadius:10,
    }
    
})
