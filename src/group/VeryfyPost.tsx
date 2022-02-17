import React, {useCallback} from 'react'
import { Platform, Dimensions,StyleSheet, SafeAreaView, View, Image,Text,ScrollView, TouchableOpacity } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import MemberIcon from '../component/MemberIcon'
// import {ReactComponent as CommentIcon}  from '../../images/group/fire.svg'

const { width, height } = Dimensions.get('window')

const data = {
    author:'김승구',
    content:'202020202020 공부완료',
    createdAt : '3분 전',
}

const CommentItem =()=>{
    

    return (
        <View style={{borderTopWidth:1,borderColor:'#0085FF' ,paddingVertical:height*0.02}}>
            <View style={{flexDirection:'row',}}>
                    <View style={{flexDirection:'row'}}>
                        <MemberIcon size={30} isOnline></MemberIcon>
                        <View style={{paddingLeft:20}}>
                            <Text style={{flex:2,}}>{data.author}</Text>
                            <Text style={{flex:1}}>{data.createdAt}</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',marginLeft:'auto',marginRight:width*0.02}}>
                        <Text>  <Image style={{width:13,height:13}} source={require('../../images/group/fire.png')}></Image> 3  </Text>
                    </View>
                </View>
            <Text style={{marginTop:height*0.01}}>
                {'댓글댓글'.repeat(100)}
            </Text>
        </View>
        
    )
}



/* paddingVertical for container is deleted here and not applied to comment container */

export default function VerifyPost() {

    const navigation = useNavigation<any>()
    const goBack = useCallback(()=>navigation.goBack(),[])

    return (
    <SafeAreaView style={styles.safeContainer}>
        <View style={styles.container}>


                <TouchableOpacity style={styles.header} onPress={goBack}>
                    <Text style={{fontSize: 17,
                                fontFamily: 'GodoM',
                                color: '#9F9F9F',
                                // backgroundColor:'#000000'
                                
                                }} >
                    &lt; 인증게시판 </Text>
                </TouchableOpacity>


            <ScrollView showsVerticalScrollIndicator={false}> 
                <View style={{flexDirection:'row',marginHorizontal: '5%',}}>
                    <View style={{flexDirection:'row'}}>
                        <MemberIcon size={50} isOnline></MemberIcon>
                        <View style={{paddingLeft:20}}>
                            <Text style={{flex:2,}}>{data.author}</Text>
                            <Text style={{flex:1}}>{data.createdAt}</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',marginLeft:'auto',marginRight:width*0.02}}>
                        <Text>  <Image style={{width:13,height:13}} source={require('../../images/group/fire.png')}></Image> 3  |</Text>
                        
                        {/* <Text>  <CommentIcon width={13} height={13} /> 2  |</Text> */}
                    </View>
                </View>
                
                <Text style={{marginHorizontal: '5%',marginVertical:height*0.03}}>{data.content}</Text>
                
                <View style={[styles.commentsContainer,styles.shadow]}>
                    <CommentItem/>
                    <CommentItem/>
                    <CommentItem/>
                    <CommentItem/>
                    <CommentItem/>
                </View>                
                
            </ScrollView>
            
        </View>
    </SafeAreaView>
    )

}


const styles = StyleSheet.create({
    shadow:{
        ...Platform.select({
            ios: {
                shadowColor: "#000",
                shadowOffset: {
                    width: 0.1,
                    height: 0.1,
                },
                shadowOpacity: 0.25,
            },
            android: {
                elevation: 3, 
            },
        }
    )},
    header:{

        height:60,

        // backgroundColor:'#ff0000',
        justifyContent:'center',
        alignSelf:'baseline',
        marginHorizontal: '5%',


    },
    safeContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container:{
        flex:1,
    },
    title: {
        fontSize: 24,
        fontFamily: 'GodoM',
        marginHorizontal: '5%',

        
    },

    commentsContainer:{
        width:'100%',
        backgroundColor:'#F9F9F9',
        // backgroundColor:'#ffff00',

        borderTopLeftRadius:width*0.05,
        borderTopRightRadius:width*0.05,
        paddingTop:width*0.05,
        paddingHorizontal: '7%',

        
    }
    

})

