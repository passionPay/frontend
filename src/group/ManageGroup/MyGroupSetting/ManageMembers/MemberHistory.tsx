import React, {useCallback,useState} from 'react'
import { Platform, Dimensions,StyleSheet, SafeAreaView, View, Image,Text,ScrollView, TouchableOpacity } from 'react-native'
import { DateSelectDropdown } from '../../../../profile/component/DateSelectDropdown'
import moment from 'moment'

const { width, height } = Dimensions.get('window')


const MemberHistory = ({style={}}) =>{

    const [dateValue,setDateValue] = useState(moment().date())
    const [yearValue,setYearValue] = useState(moment().year())
    const [monthValue,setMonthValue] = useState(moment().month()+1)

    return (
    <View style={[styles.mainContainer,style]}>
        <DateSelectDropdown 
            yearValue={yearValue}
            setYearValue={setYearValue}
            monthValue={monthValue}
            setMonthValue={setMonthValue}
            dateValue={dateValue}
            setDateValue={setDateValue}
            yearWidth={100}
            monthWidth={83}
            dateWidth={85}
            style={{
                marginHorizontal:0,
                alignSelf:'center'
            }
            }
        />
        <View style={{paddingTop:20,paddingHorizontal:20,
            flexDirection:'row',justifyContent:'space-around'
        }}>
            <View style={{flex:1}}> 
                <View style={styles.item}>
                    <Text style={styles.tag}>그룹 목표 공부시간</Text>
                    <Text style={styles.content}>11:30:20</Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.tag}>공부시간</Text>
                    <Text style={styles.content}>11:30:20</Text>
                </View>
            </View>
        
            <View style={{flex:1}}> 
                <View style={styles.item}>
                    <Text style={styles.tag}>목표달성률(시간)</Text>
                    <Text style={styles.content}>40%</Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.tag}>목표달성률(미션)</Text>
                    <Text style={styles.content}>75%</Text>
                </View>
            </View>  
        </View>
        
    </View>
    )
}

export default MemberHistory

const styles = StyleSheet.create({
    mainContainer:{
        width:'100%',
        // height:height*0.35,
        marginTop:10,
        // borderWidth:1,
        borderTopWidth:0.3,    
    },
    item:{
        // flexDirection:'row',

        alignItems:'center',
        paddingVertical:5,
    },
    tag:{
        fontSize:14,
        fontWeight:'bold'
    },
    content:{
        marginTop:5,
        fontSize:17,
        fontWeight:'bold'

    }
    
})

