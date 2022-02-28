import React from 'react'
import { Dimensions, StyleSheet, TextInput, View } from 'react-native'
import { Text } from '../../../component/CustomComponent'
import { useContextOfPlanner } from '../../PlannerProvider'

const borderWidth = 0.5
const hourViewWidth = 23, hourViewHeight = 24
const { width, height } = Dimensions.get('window')
const rowWidth = (width - 47) * 2 / 5 - hourViewWidth

export default function TimeBlock() {
    const cont = useContextOfPlanner()
    const hours = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 0, 1, 2, 3, 4]
    return <View style={{ flex: 2 }}>
        <Text style={{
            borderBottomWidth: 0.5,
            fontFamily: 'SourceSansPro-Bold',
            paddingBottom: 5,
            fontSize: 12,
            borderColor: '#151515',
        }}>TIME TABLE</Text>
        <View>
            {hours.map((v, i) => <View style={styles.row} key={i}>
                <TextInput style={styles.hour} editable={false} value={v.toString()}
                    multiline={true} numberOfLines={1} />
                <View style={{ flex: 1, backgroundColor: '#0000' }} />
            </View>)}
            {cont.data.timestamps.map((v, i) => {
                return <View key={i} style={{
                    position: 'absolute',
                    backgroundColor: v.color,
                    height: hourViewHeight,
                    top: getTopPosition(v.startTime),
                    left: getLeftPosition(v.startTime),
                    width: getBlockWidth(v.startTime, v.endTime)
                }} />
            })}
        </View>
    </View>
}

function getTopPosition(startTime: string) {
    return ((Number(startTime.substring(0, 2)) + 19) % 24) * (hourViewHeight + borderWidth)
}

function getLeftPosition(startTime: string) {
    const sec = Number(startTime.substring(3, 5)) * 60 + Number(startTime.substring(6, 8))
    return hourViewWidth + rowWidth * sec / 3600
}

function getBlockWidth(startTime: string, endTime: string) {
    const startPosition = getLeftPosition(startTime)
    const endPosition = getLeftPosition(endTime)
    return Math.max(endPosition - startPosition, rowWidth / 60) // 59분일 때 아직 고려 안 함
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        borderColor: '#151515',
    },
    hour: {
        width: hourViewWidth,
        height: hourViewHeight,
        fontSize: 9,
        textAlign: 'center',
        borderRightWidth: 0.5,
        borderColor: '#151515',
        textAlignVertical: 'center',
        color: '#151515',
        fontFamily: 'GodoM',
        padding: 0
    }
})