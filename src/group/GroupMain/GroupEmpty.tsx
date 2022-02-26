
import React from 'react'
import { Platform,Dimensions,StyleSheet, View, Image,Text,ScrollView ,TouchableOpacity} from 'react-native'
import LottieView from 'lottie-react-native'

const { width, height } = Dimensions.get('window')


const GroupEmpty =({isMine}) =>{
    return (
    <View style={styles.container}>
        <View style={{height:100,}}>
            <LottieView
                    source={require("../../../images/group/MyGroupEmptyAnimation.json")}
                    loop
                    autoPlay />
        </View>
        <Text style={{
            marginTop:10,
            fontSize:17,
            textAlign:'center',
            fontFamily:'GodoM',
        }}>
            {isMine?'아직 가입한 그룹이 없어요':'아직 생성된 그룹이 없어요'}
        </Text>
        <Text style={{
            fontSize:13,
            marginTop:5,
        }}>
        {isMine?'다른 스터디 그룹에 가입하거나 새로운 스터디 그룹을 만들어보세요.':'먼저 새로운 스터디 그룹을 만들어보세요.'}</Text>
    </View>)
}

export default GroupEmpty
const styles=StyleSheet.create({
    container: {
        paddingHorizontal:width*0.15,
        width: width*0.85,
        height:160,
        borderColor :'#c4c4c4',
        borderRadius: 10, 
        marginTop:0,
        flex:1,
        alignSelf:'center',
    },
})