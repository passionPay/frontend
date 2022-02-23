import React, {useCallback,useState,useEffect,useReducer} from 'react'
import {ScrollView,TextInput, TouchableOpacity, SafeAreaView,View,Dimensions,StyleSheet,Text} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import Toast from 'react-native-simple-toast';


import {CommonInput,NumericInput} from './CommonInput'
import SetTimeGoal from './SetTimeGoal'
import SetMission from './SetMission'
import SetPrivacy from './SetPrivacy'




const { width, height } = Dimensions.get('window')

type StateType = {
    groupTitle:string,
    groupDescription:string,
    groupTimeGoal:number,
    maxMember:number,
    groupMissions:{
        value:string,
        id:number,
    }[],

    groupPrivacy:boolean,
    groupPassword:string|undefined,
}
type ActionType= {
    type:'CHANGE_INPUT',
    name:string,
    value:any,
}|{
    type:'CHANGE_ALL',
    value:StateType
}
const initState : StateType ={
    groupTitle: '',
    groupDescription:'',
    groupTimeGoal:0,
    maxMember:0,
    groupMissions:[
        {
            value:'',
            id:1,
        },
    ],
    groupPrivacy:false,
    groupPassword:undefined
}  
const reducer = (state:StateType,action:ActionType) :StateType => {
    switch (action.type) {
        case 'CHANGE_INPUT' :
            return {
                ...state,
                [action.name]:action.value
        }
        case 'CHANGE_ALL':
            return action.value
    }
    return state
}


const checkValidInput =(state:StateType) : boolean|string =>{
    if (state.groupTitle===''){
        return '그룹 이름을 입력해주세요'
    }
    if (state.groupDescription===''){
        return '그룹 소개를 입력해주세요'
    }
    if (state.maxMember===0 || isNaN(state.maxMember)){
        return '인원을 입력해주세요'
    }else if (state.maxMember<2 || state.maxMember>100){
        return '2명 ~ 100명 사이의 인원을 입력해주세요'
    }
    if (state.groupTimeGoal===0){
        return '목표 시간을 입력해주세요'
    }
    if (state.groupMissions.every((item)=>item.value==='')){
        return '그룹 미션을 하나 이상 입력해주세요'
    }
    if (state.groupPrivacy && (typeof(state.groupPassword) === 'undefined' || state.groupPassword==='')){
        return '비밀번호를 입력해주세요'
    }

    return true
}
const makeGroupSubmit = (state:StateType) :void=>{
    const validity = checkValidInput(state)
    if (validity===true){
        Toast.show(validity.toString())
        
    }else{
        Toast.show(validity.toString())
    }
}


const MakeGroup = ({route}) => {

    const navigation = useNavigation<any>()
    const goBack = useCallback(()=>navigation.goBack(),[])
    
    const [state,dispatch] = useReducer(reducer,initState)
    const [editState,setEditState] = useState(false)
    
    useEffect(()=>{
        if (typeof(route.params) !== 'undefined' && route.params.isEditMode){
            dispatch({
                type:'CHANGE_ALL',
                value:route.params.prevState
            })
            setEditState(true)
        }
        console.log(route)
    },[route])


    return (
    <SafeAreaView style={styles.safeContainer}>
        <View style={styles.container}>
            <TouchableOpacity style={styles.header} onPress={goBack}>
                    <Text style={{fontSize: 13,
                                fontFamily: 'GodoM',
                                color: '#9F9F9F',
                                }} >
                    {editState?'< 그룹 설정':'< StudyGroup'}</Text>
            </TouchableOpacity>
            <Text style={styles.title}>{editState?'그룹 정보 수정' : '그룹 만들기'}</Text>
            <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
                <View style={{ borderTopLeftRadius: 30, borderTopRightRadius: 30, flex: 1 }}>
                    <CommonInput state={state} dispatch={dispatch} tagName='그룹 이름' stateName='groupTitle'
                        placeholder ={'그룹 이름을 입력해주세요'}
                    /> 
                    <CommonInput state={state} dispatch={dispatch} tagName='그룹 소개' stateName='groupDescription'
                        placeholder ={'그룹 소개를 입력해주세요'}
                    />
                    <NumericInput state={state} dispatch={dispatch} tagName='인원' stateName='maxMember' 
                        placeholder ={'최소 2명 ~ 최대 100명'} 
                    />
                    <SetTimeGoal state={state} dispatch={dispatch} />
                    <SetMission state={state} dispatch={dispatch}/>
                    <SetPrivacy state={state} dispatch={dispatch}/>
                    
                    <TouchableOpacity 
                        onPress={()=>makeGroupSubmit(state)}
                        style={[styles.selectButton,{alignSelf:'center',marginTop:30}]}>
                            <Text style={{fontSize:14}}>{editState?'수정 정보 저장' : '그룹 만들기'}</Text>
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
