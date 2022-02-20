import React, { useCallback ,useRef} from 'react'
import {Animated, View, TouchableOpacity,Dimensions,Text,StyleSheet } from 'react-native'

const { width, height } = Dimensions.get('window')

const HistoryTabBar = ({tabNumber,setTabNumber})=>{

    const tabBarAnimVal = useRef(new Animated.Value(0)).current;

    const tabBarAnim = {
        marginLeft: tabBarAnimVal.interpolate({
            inputRange: [0, 2],
            outputRange: ['11.5%', '71%']
        })
    };
    
    return(
        <View>
            <View style={{
                width:width,
                flexDirection:'row',
                borderTopWidth:0.3,
                paddingHorizontal:width*0.05,
                marginTop:height*0.01,
                paddingTop:height*0.02,
                paddingBottom:height*0.01,
            }}>
                {[{tab:0,name:'일간'},{tab:1,name:'주간'},{tab:2,name:'월간'}].map((v, i) => 
                <TouchableOpacity
                    style={styles.historyTab}
                    onPress = {useCallback(() => {
                        Animated.timing(tabBarAnimVal, {
                            toValue: v.tab, useNativeDriver: false, duration: 200
                        }).start(() => { setTabNumber(v.tab) })
                        },[])}>
                    <Text style={styles.historyTabText}>{v.name}</Text>
                </TouchableOpacity>)}

            </View>
            <Animated.View style={[styles.indicator, tabBarAnim]} />

        </View>
    )

}

export default HistoryTabBar

const styles = StyleSheet.create({
    historyTab:{
        flex:1,
        alignItems:'center',
        fontSize:17,
        // borderWidth:1,
    },
    historyTabText:{
        fontSize:14,

    },
    indicator: {
        backgroundColor: '#A7D5FF',
        width: '18%',
        marginTop:height*0.005,
        height: 5,
        borderRadius: 10,
    },
})