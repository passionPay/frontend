import React from 'react'
import { Modal, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from '../../../component/CustomComponent';
import { useContextOfPlanner } from '../PlannerProvider';

export default function StartingModal({ }) {
    const cont = useContextOfPlanner()
    return <Modal
        animationType="slide"
        transparent={true}
        visible={cont.startingModalVisible}
        onRequestClose={() => {
            cont.setStartingModalVisible(!cont.startingModalVisible);
        }}
    >
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <TouchableOpacity onPress={() => {
                    cont.setStart(true)
                    cont.setStartingModalVisible(!cont.startingModalVisible)
                }}>
                    <Text>타이머 시작</Text>
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