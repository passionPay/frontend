import React from 'react'
import { StyleSheet, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Text } from '../../../component/CustomComponent'
import { useContextOfPlanner } from '../../PlannerProvider'

export default function Bottom() {
    const cont = useContextOfPlanner()
    return <>
    <Text style={ [styles.tag, {marginTop: 20, marginLeft: 20}] }>REVIEW</Text>
    <View style={{
        alignItems: 'flex-start',
        paddingHorizontal: 5,
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        paddingTop: 10,
        paddingBottom: 25,
        borderColor: '#151515',
        marginHorizontal: 20,
        marginBottom: 20
    }}>
        <Text style={ styles.tag }>ACHIEVEMENT</Text>
        <View style={{ flexDirection: 'row', marginBottom: 15 }}>
            <Chart rate={20} />
            <Text style={{ marginLeft: 10, fontSize: 12 }}>20%</Text>
        </View>
        {/* <View style={{
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5, width: '100%', paddingVertical: 10, paddingBottom: 15,
        marginTop: 20}}> */}
        <Text style={ styles.tag }>FEEDBACK</Text>
        <Text style={{fontSize: 12}}>{cont.data.evaluation}</Text>
        {/* </View> */}
    </View>
    </>
}

function Chart({ rate }) {
    return <LinearGradient colors={['#CACED5', '#D0D2D8', '#E3E5EC']} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}
        style={{ borderRadius: 10, height: 18, borderWidth: 0, flex: 1, alignSelf: 'center' }}>
        <LinearGradient colors={['#2152f0', '#40c0dc']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
            style={[{
                backgroundColor: "#6667AB66", borderRadius: 10, height: '100%', width: rate + '%',
                overflow: 'hidden', borderWidth: 3, borderColor: '#0000'
            }]} />
    </LinearGradient>
}

const styles = StyleSheet.create({
    tag: {
        // marginLeft: 3,
        marginTop: 7,
        marginBottom: 10,
        fontFamily: 'SourceSansPro-Bold',
        fontSize: 12
    }
})