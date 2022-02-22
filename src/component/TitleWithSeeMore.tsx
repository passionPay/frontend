import React, {useCallback, useState} from 'react'
import { TouchableOpacity, Image, ScrollView, Dimensions, SafeAreaView,StyleSheet, Text, View } from 'react-native'
const { width, height } = Dimensions.get('window')

const TitleWithSeeMoreDefaultProps = {
    style : {

        flexDirection:'row',

    },

    titleStyle:{
        fontSize: 17,
    },
    seeMoreStyle:{
        fontSize:13,
    }
}

const TitleWithSeeMore = ({style,title,seeMore,titleStyle,seeMoreStyle,seeMoreNavFunc}) =>{
    style = Object.assign({}, TitleWithSeeMoreDefaultProps.style , style)
    titleStyle = Object.assign({}, TitleWithSeeMoreDefaultProps.titleStyle , titleStyle)
    seeMoreStyle = Object.assign({}, TitleWithSeeMoreDefaultProps.seeMoreStyle , seeMoreStyle)

    return (
        <View style={style}>

            <Text style={titleStyle}>{title}</Text>
            <TouchableOpacity 
                onPress={seeMoreNavFunc}
                style={{
                    marginLeft:'auto', marginRight:10, marginBottom:2,
                    alignSelf:'flex-end'
                }}>
                <Text style={seeMoreStyle}>
                        {seeMore}
                </Text>
            </TouchableOpacity>
        </View>
        
    )
}

TitleWithSeeMore.defaultProps=TitleWithSeeMoreDefaultProps

export default TitleWithSeeMore

const styles = StyleSheet.create({
    
})

