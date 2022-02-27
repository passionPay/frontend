import React ,{useCallback} from 'react'
import { TouchableOpacity,Platform,Dimensions,StyleSheet, SafeAreaView, View, Image,Text,ScrollView } from 'react-native'
import MemberIcon from '../../../component/MemberIcon'
import {useNavigation} from '@react-navigation/native'

const { width, height } = Dimensions.get('window')

const VerifyItem = ({hasPhoto}) =>{

    const navigation = useNavigation<any>()
    const verifyPost = useCallback(()=>navigation.navigate('VerifyPost'),[])
    const imageSize = (width/4<100) ?  width/4 :100
    const textContent = 
        <>
            <View style={itemStyles.itemTextContainer}>
                <View style={itemStyles.authorContainer}>
                    <View style={itemStyles.memberIconContainer}>
                        <MemberIcon isOnline size={40}/>
                    </View>
                    <View style={itemStyles.memberNameContainer}>
                        <Text>name</Text>
                    </View>
                </View>    
                <View style={itemStyles.itemContentContainer}>
                    <Text  
                        style={{
                            fontSize:12,
                        }}
                        numberOfLines={2}>
                        24학점은 기본이죠adddddddddsdfddddddssddddddd
                    </Text>

                </View>
                <View style={itemStyles.itemDetailContainer}>
                <Text style={itemStyles.itemDetailText}>좋아요 3 | 댓글 4 | 3시간 전</Text>
                </View>
            </View>
        </>   
    const imageContent = 
        <View style={itemStyles.itemImageContainer}>
            <Image style={[itemStyles.itemImage,{width:imageSize,height:imageSize}]} source={require('../../../../images/group/studyImage.jpeg')} />
        </View>

    return(
    <TouchableOpacity onPress={verifyPost} style={[itemStyles.mainContainer]}>
            {textContent}
            {hasPhoto && imageContent}
    </TouchableOpacity>
    )
}
VerifyItem.defaultProps = {
    hasPhoto:false,
}

export default VerifyItem

const itemStyles = StyleSheet.create({
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
    mainContainer :{
        backgroundColor:'#F9F9F9',
        padding:width*0.01,
        height: 120,
        marginBottom:7,
        marginHorizontal:5,
        borderRadius:10,
        flexDirection:'row',
        borderWidth:0.5,
        borderColor:'#c4c4c4'
    },
    itemTextContainer:{
        flex:1,
        paddingHorizontal:width*0.02,

    },
    authorContainer:{
        // backgroundColor:'#00ff00',
        alignItems:'center',
        // justifyContent:'center',
        flexDirection:'row',
        height:50,
    },
    memberIconContainer:{
        // backgroundColor:'#ff0000',
        
    },
    memberNameContainer:{
        // backgroundColor:'#0000ff',
        // alignItems:'center',
        // justifyContent:'center',
        paddingLeft:width*0.02,
    },
    itemContentContainer:{

        flex:2,

        // alignItems:'center',
        justifyContent:'center',
    },
    itemDetailContainer:{
        flex:1,
        // backgroundColor:'#00ff00',
        
        justifyContent:'center',
    },
    itemDetailText:{
        fontSize:11,
    },
    itemImageContainer:{
        justifyContent:'center',
        alignItems:'center',
        paddingRight:10-width*0.01,
    },
    itemImage:{
        borderRadius:5,
        width:100,
        height:100,
    }


})