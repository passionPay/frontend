import React, {useCallback} from 'react'
import { Dimensions,StyleSheet, SafeAreaView, View, Image,Text,ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import MyGroupCard from './component/MyGroupCard'
import OtherGroupCard from './component/OtherGroupCard'
import SearchBar from './component/SearchBar'
import {useNavigation} from '@react-navigation/native'

const { width, height } = Dimensions.get('window')





export default function MyGroup() {

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
                &lt; 스터디 그룹 </Text>
            </TouchableOpacity>
            <ScrollView > 
                <Text style={styles.title}>내 그룹</Text>
                <View style={styles.myGroups}>
                    <Text style={styles.groupTitle}>내 스터디 그룹</Text>
                    <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false}>
                        <MyGroupCard/>
                        <MyGroupCard/>
                        <MyGroupCard/>
                    </ScrollView>
                </View>
                <View style={styles.otherGroups}>
                    <Text style={styles.groupTitle}>둘러보기</Text>
                    <SearchBar/>
                    <OtherGroupCard/>
                    <OtherGroupCard/>
                    <OtherGroupCard/>
                    <OtherGroupCard/>
                    <OtherGroupCard/>
                    <OtherGroupCard/>
                    <OtherGroupCard/>
                </View>
            </ScrollView>
        </View>
    </SafeAreaView>
    )

}


const styles = StyleSheet.create({
    header:{

        height:60,
        width:100,
        justifyContent:'center',
        // justifyContent:'flex-start',
        // alignSelf: 'baseline',
        // borderWidth:1,
        // flexDirection: "row",
        // flexWrap: "wrap"

    },
    safeContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container:{
        paddingHorizontal: '5%',
    },
    title: {
        fontSize: 24,
        fontFamily: 'GodoM',
        color: '#000',
        
    },
    myGroups:{
        paddingTop: height*0.02,
    },
    groupTitle: {
        fontSize: 17,
        fontFamily: 'GodoM',
        color: '#484848',
        marginTop: 5,
    },
    image: {
        width: 60, height: 60, borderWidth: 1,
        borderRadius: 10, backgroundColor: '#ddd'
    },
    otherGroups:{
        paddingTop: height*0.02,
    }
    
})

