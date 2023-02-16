import React, { Component } from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

class List extends Component{

    state = {
        mylist: [
            {
                id: 100,
                name: 'Ashik'
            },
            {
                id: 101,
                name: 'Leon'
            },
            {
                id: 103,
                name: 'Foysal'
            },
            {
                id: 104,
                name: 'Mesuk'
            },
        ]
    }

    alertMess = (item) => {
        alert(item.name);
    }

    render(){
        return(
            <View style = {style.container}>
                
                {
                    this.state.mylist.map((item, index) => (
                        <TouchableOpacity
                        key = {item.id}
                        style = {style.touchOp}
                        onPress = {() => this.alertMess(item)}>
                            <Text style = {style.text}>{item.name}</Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
        )
    }
}
export default List

const style = StyleSheet.create({
    container: {
      backgroundColor: '#abe5f5',
      height: '100%'
    },
    touchOp: {
        backgroundColor: '#85b8ff',
        marginTop: 5,
        alignItems: 'center'
    },
    text: {
        color: 'white',
        padding: 10
    }
})