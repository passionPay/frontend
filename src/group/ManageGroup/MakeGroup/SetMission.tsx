import React, {useCallback,useEffect,useRef,useState} from 'react'
import {View,Text,TouchableOpacity,TextInput,Dimensions,StyleSheet} from 'react-native'
import { TouchableIcon } from '../../../component/TouchableIcon'
import { notifyMessage } from './toastFunction'
import Toast from 'react-native-simple-toast';



const MissionItem = ({item,onRemove,onEndEditing}) =>{

    const [input,setInput] = useState('')
    
    
    return (
        <>
        <View style={styles.row} >
            <TextInput 
                style={styles.info}
                value={input}
                onChangeText={setInput}
                placeholder ={'미션을 입력해주세요'}
                onEndEditing={() => {console.log(`onEndEditing ${item.id}`); onEndEditing(item.id,input)}}
            />
            <TouchableIcon 
                onPress ={()=>onRemove(item,setInput)}
                iconProps={{style:{marginRight:15}, name:'minus-circle', size:23, color:'#FF3D00'}}/>
        </View>
        </>
    )
}

const MakeMission = ({missions,dispatch}) => {
    
    
    const nextId = useRef(2)

    //for edit missions state only when endEditing
    const onEndEditing = useCallback((id,input)=>{
        dispatch({
            type:'CHANGE_INPUT',
            name:'missions',
            value: missions.map(mission =>
                mission.id === id ? { ...mission, value: input } : mission
            )
        })
    },[missions,dispatch])

    const onCreate = useCallback(()=>{
        if (missions.length>=5){
            // notifyMessage('미션은 최대 5개까지 생성할 수 있어요')
            Toast.show('미션은 최대 5개까지 생성할 수 있어요',Toast.SHORT)
            return
        }
        if (missions.some((item)=>item.value==='')){
            Toast.show('빈 칸에 미션을 입력한 후 새 미션을 추가해주세요',Toast.SHORT)
            return
        }
        const newMission ={
            value:'',
            id:nextId.current,
        }
        dispatch({
            type:'CHANGE_INPUT',
            name:'missions',
            value:[...missions,newMission]
        })
        nextId.current+=1
    },[missions,dispatch])

    const onRemove = useCallback((item,setInput)=>{
        if (missions.length<2){
            console.log('cannot delete')
            Toast.show('미션을 하나 이상 입력해주세요')

            setInput('')
            return
        }
        dispatch({
            type:'CHANGE_INPUT',
            name:'missions',
            value:missions.filter((mission:{id:number,value:string})=> {
                return mission.id!==item.id})
        })
    },[missions,dispatch])

    useEffect(()=>{
        console.log(missions)
    },[missions])
    return(
        <>
            <Text style={[styles.tag, { paddingTop:50,paddingBottom: 15 }]}>미션</Text>
            {missions.map((item,idx)=>
                <MissionItem item={item} key={idx} onRemove = {onRemove} onEndEditing={onEndEditing} />
            )}
            <TouchableIcon 
                style={{justifyContent:'center'}}
                onPress ={()=>onCreate()}
                iconProps={{style:{marginTop:10, alignSelf:'center'}, name:'plus-circle', size:40, color:'#7EBEF9'}}/>


        </>
    )
}

export default MakeMission

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