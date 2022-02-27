
import React, { useCallback } from 'react'
import { Alert, Dimensions, StyleSheet, SafeAreaView, View, Image, Text, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const { width, height } = Dimensions.get('window')


const OtherGroupSummaryBoard = ({ style = {}, data, time = false, isOtherGroup = false }) => {
    // const fontSize = (width*0.038>15) ? 15 : width*0.038
    // console.log('dsfd',PixelRatio.getFontScale())
    const alertOnPress = useCallback(() => {

        Alert.alert(                    // 말그대로 Alert를 띄운다
            '',                    // 첫번째 text: 타이틀 제목
            '그룹에 가입하면 더 많은 정보를 확인 할 수 있어요',// 두번째 text: 그 밑에 작은 제목
            [                              // 버튼 배열
                { text: "확인" },
            ],
            { cancelable: true }
        );
    }, [])
    const fontSize = 12
    const content = time ? (
        <>
            <View style={[boardStyles.groupSummaryContentContainer]}>
                <View style={{ paddingTop: 5 }}>
                    <View style={boardStyles.groupTime}>
                        <Text style={{ fontSize: fontSize, }}>그룹 목표 공부시간</Text>
                        <Text style={{ fontSize: fontSize + 3, fontWeight: '700' }}>{data.goal}</Text>
                    </View>
                    <View style={boardStyles.groupTime}>
                        <Text style={{ fontSize: fontSize, }}>그룹 평균 공부시간</Text>
                        <Text style={{ fontSize: fontSize + 3, fontWeight: '700' }}>{data.avg}</Text>
                    </View>
                    {!isOtherGroup &&
                        <View style={boardStyles.groupTime}>
                            <Text style={{ fontSize: fontSize, }}>내 공부시간</Text>
                            <Text style={{ fontSize: fontSize + 3, fontWeight: '700' }}>{data.my}</Text>
                        </View>
                    }

                </View>

            </View>
        </>
    )
        : (
            <>
                <View style={boardStyles.groupSummaryContentContainer}>
                    {data.map((item, idx) => (
                        <View
                            key={idx}
                            style={boardStyles.groupEachMissionContainer}
                        >
                            <Image style={{ width: 15, height: 15, marginRight: 5 }} source={require('../../../images/group/trophy.png')} />
                            <Text numberOfLines={2} style={boardStyles.missionText}>{item}</Text>
                        </View>
                    ))
                    }





                </View>
            </>
        )

    return (
        <TouchableOpacity
            onPress={alertOnPress}
            style={[boardStyles.groupSummaryBoard, style]}
        >
            {content}
            <View style={boardStyles.groupSummaryTitleContainer}>
                <Text style={{ fontSize: fontSize, fontWeight: '700' }}>
                    {time ? '공부시간' : '그룹미션'}
                </Text>
            </View>
        </TouchableOpacity>

    )
}

export default OtherGroupSummaryBoard

const boardStyles = StyleSheet.create({
    groupSummaryBoard: {
        width: width * 0.43,
        height: 200,
        backgroundColor: '#F9F9F9',
        borderRadius: 10,
        marginVertical: 5,
    },
    groupSummaryContentContainer: {
        padding: width * 0.01,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flex: 4
    },
    groupTime: {
        marginVertical: width * 0.025,
        alignItems: 'center',
        justifyContent: 'center',
    },

    groupSummaryMissionContainer: {

    },
    groupEachMissionContainer: {
        marginTop: 8,
        paddingTop: 3,
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    missionText: {
        fontSize: 12,
        flex: 1,
    },

    groupSummaryTitleContainer: {
        backgroundColor: '#7EBEF9',
        flex: 1,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

})

