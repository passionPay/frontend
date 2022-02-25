import React, { useState } from 'react'
import { Dimensions, StyleSheet, SafeAreaView, View, Image, Text, ScrollView } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
import ProgressBar from '../../component/ProgressBar'

const { width, height } = Dimensions.get('window')

const ToggleButton = () => {
    return (
        <View style={{
            position: 'absolute',
            width: 100,
            height: 30,
            right: 15,
            top: 3,
            borderRadius: 15,
            backgroundColor: '#F5FBFF',
            borderWidth: 0.2,
            borderColor: '#8AC8FF',
            flexDirection: 'row',
            alignItems: 'center',
            // justifyContent:'space-around',
        }}>
            <View style={{
                marginLeft: 5,
                width: 50,
                height: 23,
                borderRadius: 10,
                backgroundColor: '#8AC8FF',
                justifyContent: 'center'
            }}>
                <Text style={{
                    textAlign: 'center',
                    color: '#ffffff',
                    fontSize: 14,
                    fontWeight: 'bold',
                }}>시간</Text>
            </View>
            <Text style={{
                marginLeft: 5,
                fontSize: 14,
                fontWeight: '500',
            }}>미션</Text>
        </View>
    )
}


const OtherGroupProgressBar = ({ groupGoalProgresses }) => {
    const [goalTypeValue, setGoalTypeValue] = useState(0)
    const [goalTypeOpen, setGoalTypeOpen] = useState(false)
    const [goalTypeItems, setGoalTypeItems] = useState([{ label: '미션', value: 0 }, { label: '시간', value: 1 }])

    const {mission:missionProgress,time:timeProgress} = groupGoalProgresses

    return (
        <View style={{ position: 'relative', marginBottom: 20, }}>
            <View style={{
                flexDirection: 'row', justifyContent: 'space-between',
                zIndex: 2, height: 90, marginBottom: -90 + 40,
                
            }}>
                <Text style={{
                    marginTop: 10,
                    marginBottom: 10,
                    fontSize: 13,
                    fontFamily: 'GodoM'
                }}>
                    오늘 평균 목표 달성률({`${goalTypeValue===0?'미션':'시간'}`})
                </Text>
                <View style={{ marginRight: 15,marginTop:3, }}>
                    <DropDownPicker
                        style={{
                            width: 100,
                            height: 30,
                        }}
                        containerStyle={{
                            width: 100,
                            height: 90,
                            zIndex: 100,
                        }}
                        maxHeight={60}
                        autoScroll={true}
                        open={goalTypeOpen}
                        value={goalTypeValue}
                        items={goalTypeItems}
                        setOpen={setGoalTypeOpen}
                        setValue={setGoalTypeValue}
                        setItems={setGoalTypeItems}
                        listMode="SCROLLVIEW"
                    >
                    </DropDownPicker>
                </View>
            </View>
            <ProgressBar style={{ width: width * 0.8, height: 7 }} hasIndicator
                progress={goalTypeValue===0?missionProgress:timeProgress } 
            />

        </View>
    )
}

export default OtherGroupProgressBar

const styles = StyleSheet.create({

})