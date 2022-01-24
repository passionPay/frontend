// // import React, { Component, createRef } from 'react'
// // import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// // import { AnySizeDragSortableView } from 'react-native-drag-sort'

// // // export default function Grid() {
// // //     return <ImageBackground source={require('../../images/gridBack.png')} style={{ flex: 1 }}>
// // //         <TouchableOpacity style={styles.addTouchable}>
// // //             <Text style={styles.addText}>클릭하여 메모 추가하기</Text>
// // //             <Text style={styles.addBtn}><Text>Sticker Pack Market</Text></Text>
// // //         </TouchableOpacity>
// // //         <ScrollView>
// // //             <View style={{flexDirection: 'row'}}>
// // //                 <View style={styles.column}>
// // //                     <View style={styles.note}>
// // //                         <Text style={styles.noteTitle}>오늘 사야 할 것들</Text>
// // //                         <Text style={styles.noteContent}>
// // //                             {'- 새콤달콤\n- 초코우유\n- 제트스트림 0.5\n- 스프링노트\n- 문제집 두 권\n- 스누피 필통\n- 빈츠\n- 신라면 건면'}</Text>
// // //                     </View>
// // //                 </View>
// // //                 <View style={styles.column}>
// // //                     <Text>여기에 노트</Text>
// // //                 </View>
// // //             </View>
// // //         </ScrollView>
// // //     </ImageBackground>
// // // }

// // // const styles = StyleSheet.create({
// // //     addTouchable: {
// // //         marginHorizontal: 10, borderBottomWidth: 1,
// // //         flexDirection: 'row', justifyContent: 'space-between',
// // //         padding: 7, backgroundColor: 'white', marginTop: 10
// // //     },
// // //     addText: {
// // //         color: 'grey', fontSize: 12
// // //     },
// // //     addBtn: {
// // //         color: 'white', backgroundColor: 'black',
// // //         borderRadius: 20, paddingVertical: 3, paddingHorizontal: 8,
// // //         fontSize: 10
// // //     },
// // //     column: {
// // //         flex: 1, padding: 17
// // //     },
// // //     note: {
// // //         backgroundColor: '#CAD9CC', borderRadius: 5
// // //     },
// // //     noteTitle: {
// // //         backgroundColor: '#A7C2AA',
// // //         paddingHorizontal: 10, borderTopRightRadius: 5, borderTopLeftRadius: 5,
// // //         fontWeight: 'bold', paddingVertical: 7
// // //     },
// // //     noteContent: {
// // //         paddingVertical: 7, fontWeight: 'bold',
// // //         paddingHorizontal: 10
// // //     },

// // // })

// // export default class Grid extends Component {
// //     sortableViewRef
// //     movedKey: null
// //     constructor(props) {
// //         super(props);
// //         this.sortableViewRef = createRef()
// //         const items: {text, width, height}[] = []
// //         for (let i = 0; i < 26; i++) {
// //             items.push({
// //                 text: String.fromCharCode(65 + i),
// //                 width: 100,
// //                 height: 100
// //             })
// //         }
// //         this.state = { 
// //             items,
// //             movedKey: null
// //         };
// //     }
// //     _renderItem = (item, index, isMoved) => {
// //         const { items } = this.state;
// //         return (
// //             <TouchableOpacity
// //                 onLongPress={() => {
// //                     this.setState({movedKey: item.text})
// //                     this.sortableViewRef.current.startTouch(item, index)
// //                 }}
// //                 onPressOut={() => {
// //                     this.sortableViewRef.current.onPressOut()
// //                 }}
// //             >
// //                 <View style={[styles.item_wrap, {opacity: (movedKey === item.text && !isMoved) ? 1 : 1}]}>
// //             {
// //                 <View style={styles.item_clear_wrap}>
// //                     <TouchableOpacity onPress={() => this.onDeleteItem(item, index)}>
// //                         <Image source={require('../data/img/clear.png')} style={styles.item_clear}/>
// //                     </TouchableOpacity>
// //                 </View>
// //             }
// //             <View style={[styles.item, {width: item.width, height: item.height, backgroundColor: isMoved ? 'red' : '#f39c12'}]}>
// //                 {
// //                     isMoved ? (
// //                         <View style={styles.item_icon_swipe}>
// //                             <Image source={require('../data/img/animal1.png')} style={styles.item_icon}/>
// //                         </View>
// //                     ) : null
// //                 }
// //                 <View style={styles.item_text_swipe}>
// //                     <Text style={styles.item_text}>{item.text}</Text>
// //                 </View>
// //             </View>
// //         </View>
// //             </TouchableOpacity>
// //         )
// //     }
// //     render() {
// //         return <View style={{ flex: 1 }}>
// //             <AnySizeDragSortableView
// //                 ref={this.sortableViewRef}
// //                 dataSource={this.state.items}
// //                 keyExtractor={(item) => item}
// //                 renderItem={this._renderItem}
// //                 onDataChange={(data, callback) => {
// //                     this.setState({ items: data }, () => {
// //                         callback() // isRequired
// //                     })
// //                 }}
// //                 onDragEnd={()=>{
// //                     this.setState({
// //                         movedKey: null
// //                     })
// //                 }}
// //                 movedWrapStyle={{}}
// //             />
// //         </View>
// //     }
// // }
// // const styles = StyleSheet.create({
// //     item_wrap: {
// //       position: 'relative',
// //       paddingLeft: 20,
// //       paddingTop: 20
// //     },
// //     item: {
// //       justifyContent: 'space-around',
// //       alignItems: 'center',
// //       backgroundColor: '#f39c12',
// //       borderRadius: 4,
// //     },
// //     item_clear_wrap: {
// //       position: 'absolute',
// //       left: 10,
// //       top: 10,
// //       width: 20,
// //       height: 20,
// //       zIndex: 999
// //     },
// //     item_clear: {
// //       width: 20,
// //       height: 20
// //     },
// //     item_moved: {
// //       opacity: 0.95,
// //       borderRadius: 4,
// //     },
// //     item_icon_swipe: {
// //         width: 50,
// //         height: 50,
// //         backgroundColor: '#fff',
// //         borderRadius: 50 * 0.5,
// //         justifyContent: 'center',
// //         alignItems: 'center',
// //     },
// //     item_icon: {
// //       width: 30,
// //       height: 30,
// //       resizeMode: 'contain',
// //     },
// //     item_text_swipe: {
// //         backgroundColor: '#fff',
// //         width: 56,
// //         height: 30,
// //         borderRadius: 15,
// //         justifyContent: 'center',
// //         alignItems: 'center',
// //     },
// //     item_text: {
// //         color: '#444',
// //         fontSize: 20,
// //         fontWeight: 'bold',
// //     },
// //     header: {
// //       height: 48,
// //       justifyContent: 'center',
// //       alignItems: 'center',
// //       borderBottomColor: '#2ecc71',
// //       borderBottomWidth: 2,
// //   },
// //   header_title: {
// //       color: '#333',
// //       fontSize: 24,
// //       fontWeight: 'bold'
// //   },
// //   aheader_title: {
// //       color: '#333',
// //       fontSize: 20,
// //       marginBottom: 10,
// //       fontWeight: 'bold'
// //   },
// //   abottom_desc: {
// //       color: '#333',
// //       fontSize: 20,
// //       fontWeight: 'bold'
// //   }
// //   });

// import React,{createRef} from 'react';
// import {
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   View,
//   Image,
//   Dimensions,
//   SafeAreaView,
//   ImageBackground
// } from 'react-native';
// import { AnySizeDragSortableView } from 'react-native-drag-sort'

// const {width} = Dimensions.get('window')
// const headerViewHeight = 160
// const bottomViewHeight = 40

// const getW = (index, isWidth) => isWidth ? index % 3 === 0 ? (width - 40) : (width - 60) / 2 : 80;
// // const getW = (index, isWidth) => 120 + Math.floor((Math.random() - 0.5) * 100);
// // const getW = (index, isWidth) => 150;

// export default class App extends React.Component {
//     sortableViewRef
//     state
//   constructor(props) {
//     super(props);
//     const items: {text, width, height}[] = []
//     for (let i = 0; i < 26; i++) {
//         items.push({
//             text: String.fromCharCode(65 + i),
//             width: getW(i, true),
//             height: getW(i, false)
//         })
//     }
//     this.state = { 
//         items,
//         movedKey: null
//     };

//     this.sortableViewRef = createRef()
//   }

//   onDeleteItem = (item, index) => {
//     const items = [...this.state.items]
//     items.splice(index, 1)
//     this.setState({ items })
//   }

//   _renderItem = (item, index, isMoved) => {
//     const {movedKey} = this.state
//     return (
//       <TouchableOpacity
//         onLongPress={() => {
//             this.setState({movedKey: item.text})
//             this.sortableViewRef.current.startTouch(item, index)
//         }}
//         onPressOut = {() => this.sortableViewRef.current.onPressOut()}
//       >
//         <View style={[styles.item_wrap, {opacity: (movedKey === item.text && !isMoved) ? 1 : 1}]}>
//             {
//                 <View style={styles.item_clear_wrap}>
//                     <TouchableOpacity onPress={() => this.onDeleteItem(item, index)}>
//                         <Image source={require('../../images/gridBack.png')} style={styles.item_clear}/>
//                     </TouchableOpacity>
//                 </View>
//             }
//             <View style={[styles.item, {width: item.width, height: item.height, backgroundColor: isMoved ? 'red' : '#f39c12'}]}>
//                 {
//                     isMoved ? (
//                         <View style={styles.item_icon_swipe}>
//                             <Image source={require('../../images/gridBack.png')} style={styles.item_icon}/>
//                         </View>
//                     ) : null
//                 }
//                 <View style={styles.item_text_swipe}>
//                     <Text style={styles.item_text}>{item.text}</Text>
//                 </View>
//             </View>
//         </View>
//       </TouchableOpacity>
//     )
//   }

//   render() {
//     const { items } = this.state;
//     return (
//         <ImageBackground source={require('../../images/gridBack.png')} style={{ flex: 1 }}>
//         <AnySizeDragSortableView
//             ref={this.sortableViewRef}
//             dataSource={items}
//             keyExtractor={(item) => item.text}
//             renderItem={this._renderItem}
//             onDataChange={(data, callback)=> {
//                 this.setState({items: data},()=>{
//                     callback()
//                 })
//             }}
//             movedWrapStyle={styles.item_moved}
//             onDragEnd={()=>{
//                 this.setState({
//                     movedKey: null
//                 })
//             }}
//         />
//       </ImageBackground>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   item_wrap: {
//     position: 'relative',
//     paddingLeft: 20,
//     paddingTop: 20
//   },
//   item: {
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     backgroundColor: '#f39c12',
//     borderRadius: 4,
//   },
//   item_clear_wrap: {
//     position: 'absolute',
//     left: 10,
//     top: 10,
//     width: 20,
//     height: 20,
//     zIndex: 999
//   },
//   item_clear: {
//     width: 20,
//     height: 20
//   },
//   item_moved: {
//     opacity: 1,
//     borderRadius: 4,
//   },
//   item_icon_swipe: {
//       width: 50,
//       height: 50,
//       backgroundColor: '#fff',
//       borderRadius: 50 * 0.5,
//       justifyContent: 'center',
//       alignItems: 'center',
//   },
//   item_icon: {
//     width: 30,
//     height: 30,
//     resizeMode: 'contain',
//   },
//   item_text_swipe: {
//       backgroundColor: '#fff',
//       width: 56,
//       height: 30,
//       borderRadius: 15,
//       justifyContent: 'center',
//       alignItems: 'center',
//   },
//   item_text: {
//       color: '#444',
//       fontSize: 20,
//       fontWeight: 'bold',
//   },
//   header: {
//     height: 48,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderBottomColor: '#2ecc71',
//     borderBottomWidth: 2,
// },
// header_title: {
//     color: '#333',
//     fontSize: 24,
//     fontWeight: 'bold'
// },
//   aheader: {
//     height: headerViewHeight,
//     flexDirection: 'row',
//     borderBottomColor: '#2ecc71',
//     borderBottomWidth: 2,
//     zIndex: 100,
//     backgroundColor: '#fff'
// },
// aheader_img: {
//     width: headerViewHeight * 0.6,
//     height: headerViewHeight * 0.6,
//     resizeMode: 'cover',
//     borderRadius: headerViewHeight * 0.3,
//     marginLeft: 16,
//     marginTop: 10,
// },
// aheader_context: {
//     marginLeft: 8,
//     height: headerViewHeight * 0.4,
//     marginTop: 10
// },
// aheader_title: {
//     color: '#333',
//     fontSize: 20,
//     marginBottom: 10,
//     fontWeight: 'bold'
// },
// aheader_desc: {
//     color: '#444',
//     fontSize: 16,
//     width: width - headerViewHeight * 0.6 - 32
// },
// abottom: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: bottomViewHeight,
//     backgroundColor: '#fff',
//     zIndex: 100,
//     borderTopColor: '#2ecc71',
//     borderTopWidth: 2,
// },
// abottom_desc: {
//     color: '#333',
//     fontSize: 20,
//     fontWeight: 'bold'
// }
// });

import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    ImageBackground
} from 'react-native'
import { DragSortableView } from 'react-native-drag-sort'

const deviceWidth = Dimensions.get('window').width
const childrenWidth = deviceWidth / 2
const childrenHeight = deviceWidth / 2
const sortWidth = deviceWidth
const items = [
    {title: '타이틀1', content: '내용1'},
    {title: '타이틀2', content: '내용2'},
    {title: '타이틀3', content: '내용3'},
    {title: '타이틀4', content: '내용4'},
    {title: '타이틀5', content: '내용5'},
    {title: '타이틀6', content: '내용6'},
    {title: '타이틀7', content: '내용7내용7내용7내용7내용7내용7내용7내용7내용7내용7내용7내용7내용7내용7내용7내용7내용7내용7내용7내용7내용7내용7내용7내용7내용7내용7내용7내용7내용7내용7내용7내용7내용7내용7내용7내용7내용7내용7내용7내용7내용7내용7내용7'},
    {title: '타이틀8', content: '내용8'},
]

export default class Grid extends Component {
    state

    constructor(props) {
        super(props)

        this.state = {
            scrollEnabled: true,
            items: items
        }
    }

    render() {
        return (
            <ImageBackground source={require('../../images/gridBack.png')} style={{ flex: 1 }}>
                <TouchableOpacity style={styles.addTouchable}>
                    <Text style={styles.addText}>클릭하여 메모 추가하기</Text>
                    <Text style={styles.addBtn}><Text>Sticker Pack Market</Text></Text>
                </TouchableOpacity>
                <ScrollView
                    scrollEnabled={this.state.scrollEnabled}
                    style={styles.container}>
                    <DragSortableView
                        dataSource={this.state.items}
                        parentWidth={sortWidth}
                        childrenWidth={childrenWidth - marginChildrenLeft}
                        childrenHeight={childrenHeight}
                        marginChildrenTop={10}
                        marginChildrenLeft={marginChildrenLeft}
                        onDragStart={this.onSelectedDragStart}
                        onDragEnd={this.onSelectedDragEnd}
                        onDataChange={(data) => { this.setState({ items: data }) }}
                        keyExtractor={(item, index) => index}
                        renderItem={this.renderItem} />
                </ScrollView>
            </ImageBackground>
        )
    }

    renderItem = (item, index) => <View style={styles.note}>
        <Text style={styles.noteTitle}>{item.title}</Text>
        <Text style={styles.noteContent} ellipsizeMode='tail' numberOfLines={8}>{item.content}</Text>
    </View>

    onSelectedDragEnd = () => this.setState({ scrollEnabled: true })

    onSelectedDragStart = () => {
        this.setState({
            scrollEnabled: false
        })
    }

}

const marginChildrenLeft = 10

const styles = StyleSheet.create({
    addTouchable: {
        marginHorizontal: 10, borderBottomWidth: 1,
        flexDirection: 'row', justifyContent: 'space-between',
        padding: 7, backgroundColor: 'white', marginTop: 10
    },
    addText: {
        color: 'grey', fontSize: 12
    },
    addBtn: {
        color: 'white', backgroundColor: 'black',
        borderRadius: 20, paddingVertical: 3, paddingHorizontal: 8,
        fontSize: 10
    },
    column: {
        flex: 1, padding: 17
    },
    note: {
        backgroundColor: '#CAD9CC', borderRadius: 5,
        width: childrenWidth - marginChildrenLeft * 2,
        height: childrenHeight
    },
    noteTitle: {
        backgroundColor: '#A7C2AA', width: '100%',
        paddingHorizontal: 10, borderTopRightRadius: 5, borderTopLeftRadius: 5,
        fontWeight: 'bold', paddingVertical: 7, fontSize: 13
    },
    noteContent: {
        paddingVertical: 7, fontWeight: 'bold',
        paddingHorizontal: 10
    },
    container: {
    },
})