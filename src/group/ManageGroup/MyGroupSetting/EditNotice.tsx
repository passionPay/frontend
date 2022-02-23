import React, {useCallback,useEffect,useState} from 'react'
import { TextInput,Platform, Dimensions,StyleSheet, SafeAreaView, View, Image,Text,ScrollView, TouchableOpacity } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import { State } from 'react-native-gesture-handler'


const { width, height } = Dimensions.get('window')

type StateType = {
    noticeTitle:string,
    noticeContent:string,
}
const initState:StateType = { 
    noticeTitle:'',
    noticeContent:'',
}


const EditNotice = ({route})=>{
    const navigation = useNavigation<any>()
    const goBack = useCallback(()=>navigation.goBack(),[])

    const [state,setState] = useState(initState)
    const [editState,setEditState] = useState(false)

    useEffect(()=>{
        if (typeof(route.params) !== 'undefined' && route.params.isEditMode){
            setState(route.params.prevState)
            setEditState(true)
        }
        console.log(route)
    },[route])

    return (
        <SafeAreaView style={styles.safeContainer}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.header} onPress={goBack}>
                    <Text style={{
                                    fontSize: 13,
                                    fontFamily: 'GodoM',
                                    color: '#9F9F9F',
                                }}>
                    {`< 그룹 설정`}</Text>
                </TouchableOpacity>
                <Text style={styles.title}>{'공지사항 설정'}</Text>
                <View style={styles.noticeTitleContainer}>
                    <Text style={{
                        alignSelf:'center'
                    }}>제목
                    </Text>
                    <TextInput style={styles.info} value={state.noticeTitle}
                    onChangeText={(text)=>{setState({...state,noticeTitle:text})}}
                    placeholder='제목을 입력해주세요'
                    />
                </View>
                <View>
                    <View style={styles.noticeContentContainer}>
                        <Text style={{
                            alignSelf:'flex-start',
                            marginTop:10,
                        }}>내용
                        </Text>
                        <TextInput 
                        multiline
                        style={styles.contentInfo} value={state.noticeContent}
                        onChangeText={(text)=>{setState({...state,noticeContent:text})}}
                        placeholder='내용을 입력해주세요'
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default EditNotice

const styles=StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container:{
        flex:1,
        paddingHorizontal:width*0.05,
    },
    header:{
        height:50,
        justifyContent:'center',
        alignSelf:'baseline',

    },
    title: {
        fontSize: 18,
        fontFamily: 'GodoM',
        color: '#000',
        marginBottom:height*0.02,
        

    },
    info: {
        fontSize: 15, 
        paddingVertical: 10,
        // paddingTop:10,
        // borderRadius: 10,
        // backgroundColor:'#f9f9f9',
        // borderBottomWidth:0.5,
        borderWidth:0.4,
        paddingHorizontal: 10, 
        marginHorizontal: 20, flex: 1
    },
    contentInfo: {
        fontSize: 15,

        paddingTop:10,
        paddingBottom:10,
        height:300,
        // borderRadius: 10,
        // backgroundColor:'#f9f9f9',
        // borderBottomWidth:0.5,
        borderWidth:0.4,
        paddingHorizontal: 10, 
        marginHorizontal: 20, flex: 1
    },
    noticeTitleContainer:{
        flexDirection:'row',
        marginTop:10,
    },
    noticeContentContainer:{
        flexDirection:'row',
        marginTop:30,
    }
})