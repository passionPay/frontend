import React from 'react'
import { Modal, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from '../../../component/CustomComponent';
import { useContextOfPlanner } from '../PlannerProvider';

export default function StoppingModal({ }) {
    const cont = useContextOfPlanner()
    return <Modal
        animationType="slide"
        transparent={true}
        visible={cont.stoppingModalVisible}
        onRequestClose={() => {
            cont.setStoppingModalVisible(!cont.stoppingModalVisible);
        }}
    >
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <TouchableOpacity onPress={() => {
                    cont.setStart(false)
                    cont.setStoppingModalVisible(!cont.stoppingModalVisible)
                    // cont.setRunningTask(-1)
                }}>
                    <Text>타이머 종료</Text>
                </TouchableOpacity>
            </View>
        </View>
    </Modal> // setStart
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center"
    },
    modalView: {
        margin: 25,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        elevation: 5
    },
})