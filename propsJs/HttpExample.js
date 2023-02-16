import React, { Component } from "react"
import { StyleSheet, Text, View } from "react-native";


class HttpExample extends Component{

    state = {
        data: ''
    }

    componentDidMount = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/1',{
            method: 'GET'
        })
        .then((response) => response.json())
        .then((resData) => {
            this.setState({
                data: resData
            })
        })
        .catch((err) => {
            console.error(err);
        })
    }

    render(){
        return(
            <View style = {style.container}>
                <Text style = {style.text}>{this.state.data.id}</Text>
                <Text style = {style.text}>{this.state.data.title}</Text>
                <Text style = {style.text}>{this.state.data.body}</Text>
            </View>
        )
    }
}
export default HttpExample;

const style = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
    },
    text: {
        padding: 5
    }
})

