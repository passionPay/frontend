import React, {useCallback} from 'react'
import {SafeAreaView,View,TouchableOpacity,Text,Dimensions,StyleSheet} from 'react-native'
import {useNavigation} from '@react-navigation/native'

const { width, height } = Dimensions.get('window')

const ProfileSetting = () =>{

    const navigation = useNavigation<any>()
    const goBack = useCallback(()=>navigation.goBack(),[])

    return (
    <SafeAreaView style={styles.safeContainer}>
        <TouchableOpacity style={styles.header} onPress={goBack}>
                <Text style={{fontSize: 13,
                            fontFamily: 'GodoM',
                            color: '#9F9F9F',
                            }} >
                &lt; Profile </Text>
        </TouchableOpacity>
        <Text>This is profileSetting</Text>
    </SafeAreaView>
    )   
    

}

export default ProfileSetting



const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header:{

        height:50,
        paddingHorizontal: '5%',

        // backgroundColor:'#ff0000',
        justifyContent:'center',
        alignSelf:'baseline',


    },
})

