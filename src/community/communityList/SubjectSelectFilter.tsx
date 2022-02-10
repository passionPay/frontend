import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function SubjectSelectFilter() {
    return <View style={{
        borderRadius: 10, borderWidth: 1, alignSelf: 'flex-end', marginVertical: 10, marginRight: 50,
        borderColor: '#000', padding: 2, flexDirection: 'row' ,alignItems: 'center'
    }}>
        <Icon name='filter-outline' size={20} color='#000' />
        <Text style={styles.filterText}>화법과 작문</Text>
    </View>
}

const styles = StyleSheet.create({
    filterText: {
        fontSize: 12,
        fontFamily: 'GodoM',
        color: '#000',
    }
})