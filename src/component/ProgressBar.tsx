import React from 'react'
import { Platform, Dimensions,StyleSheet, SafeAreaView, View, Image,Text,ScrollView, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { redA700 } from 'react-native-paper/lib/typescript/styles/colors';

const {width:windowWidth, height:windowHeight} = Dimensions.get('window')

const Triangle = ({width=30, color='#ff0000', style={}}) => {

    // const realStyle = style
    return <View style={[{
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftWidth: width,
        borderRightWidth: width,
        borderBottomWidth: width*1.73,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: color,
        transform: [{ rotate: "180deg" }],
      }, style]} />;
};
  

const defaultProps = {
    style : {
        width:windowWidth*0.9,
        height:10,
    },
    progress:0.5,
    hasIndicator:false,
}

const ProgressBar = ({style,progress,hasIndicator}) =>{
    style = Object.assign({}, defaultProps.style , style)
    const {width,height,} = style
    style.width = hasIndicator ? width-height*1.5 : width
    
    progress=Math.round(progress*10000) / 10000

    const mainBar = (
        <View style={style}>
            <View style={[{backgroundColor:'#C4C4C4',borderRadius:height/2}]}>
                <LinearGradient start={{x:0,y:1}} end ={{x:1,y:1}} 
                    colors={['#0085FF','#90C8FC',]}  
                    style={{width:style.width*progress,height,backgroundColor:'#65B5FF',borderRadius:height/2}}
                    >
                </LinearGradient>
            </View>
        </View>
    )
    

    return (
        hasIndicator?
        <View style={{width:'100%', alignItems:'center', justifyContent:'center'}}> 
            <View style={{width,height:height*7,position:'relative', justifyContent:'flex-end',paddingBottom:height*2,paddingRight:height*1.5}}>
                <Triangle width={height*0.75} color = {'#90C8FC'} style= {{position:'absolute', top : height*2,left:style.width*progress-height, }}/>
                {mainBar}
                <Text style={{fontSize:height*1.2, position:'absolute', top:0, left:style.width*progress-height*1.5}}>{`${ Math.round(progress*100*100)/100}%`}</Text>
                <Text style={{fontSize:height*1.2, position:'absolute', bottom:0, left:style.width-height*2}}>{`100%`}</Text>
        
            </View>
        </View>
        
        :
        <View style={{width:'100%', alignItems:'center', justifyContent:'center'}}> 
            {mainBar}
        </View>
        
    )
}

ProgressBar.defaultProps= defaultProps


export default ProgressBar