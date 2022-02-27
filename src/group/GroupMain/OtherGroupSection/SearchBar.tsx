import React from 'react'
import { Platform, Dimensions,StyleSheet, View, Image,Text,ScrollView ,TouchableOpacity} from 'react-native'
const { width, height } = Dimensions.get('window')

const SearchBar = () => {
    return (

        <TouchableOpacity style={[styles.searchBox,styles.shadow]} onPress={() => {

        }}>
            
        </TouchableOpacity>
    )
}

export default SearchBar



const styles = StyleSheet.create({
    shadow:{
        ...Platform.select({
            ios: {
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.02,
            },
            android: {
                elevation: 0.05, 
            },
        }
    )
    },
   searchBox:{
        marginHorizontal:5,
        // width: '97%',
        width: width*0.85,
        alignSelf:'center',
        borderWidth:1.3,
        borderColor :'#c4c4c4',
        marginTop:height*0.015,
        marginBottom:height*0.005,
        backgroundColor:'#F4FAFF',
        height:35,
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
   }
})





