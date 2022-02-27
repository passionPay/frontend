import React from 'react'
import { View, Text, Dimensions, StyleSheet, TextInput } from 'react-native'

const { width, height } = Dimensions.get('window')


const PostWriteForm = ({ state, setState }) => {
    return (
        <View>
            <View style={styles.noticeTitleContainer}>
                <Text style={{
                    marginBottom:10,
                }}>제목
                </Text>
                <TextInput style={styles.titleInfo} 
                    value={state.noticeTitle}
                    onChangeText={(text) => { setState({ ...state, noticeTitle: text }) }}
                    placeholder='제목을 입력해주세요'
                />
            </View>
            <View>
                <View style={styles.noticeContentContainer}>
                    <Text style={{
                        marginVertical: 10,
                    }}>내용
                    </Text>
                    <TextInput
                        multiline
                        style={styles.contentInfo} value={state.noticeContent}
                        onChangeText={(text) => { setState({ ...state, noticeContent: text }) }}
                        placeholder='내용을 입력해주세요'
                    />
                </View>
            </View>
        </View >
    )
}
export default PostWriteForm

const styles = StyleSheet.create({
    titleInfo: {
        fontSize: 15,
        paddingVertical: 10,
        backgroundColor:'#f9f9f9',
        borderBottomWidth: 0.4,
        paddingHorizontal: 10,
        // marginHorizontal: 20, 
    },
    contentInfo: {
        fontSize: 15,

        paddingTop: 10,
        paddingBottom: 10,
        minHeight: 200,
        maxHeight:height-400,
        backgroundColor:'#f9f9f9',
        borderBottomWidth: 0.4,
        paddingHorizontal: 10,

    },
    noticeTitleContainer: {
        // flexDirection: 'row',
        marginTop: 10,
    },
    noticeContentContainer: {

        marginTop: 10,
    }
})