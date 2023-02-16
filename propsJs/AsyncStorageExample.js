import React, { Component } from 'react'
import { View, Text, StyleSheet, AsyncStorage, TextInput, TouchableOpacity} from 'react-native'

class AsyncStorageExample  extends Component {

    state = {
        name : '',
        asStor : ''
    }

    addData = () => {
        const myObj = {
            name : 'Ashik',
            email : 'amd@gmail.com',
            address : 'Rangpur'
        }
        AsyncStorage.setItem('info', JSON.stringify(myObj));
    }
    displayData = async () => {
        const data = await AsyncStorage.getItem('info');
        this.setState({asStor: JSON.parse(data)});
        alert(this.state.asStor.address);
    }
/*
    componentDidMount = () => {
        AsyncStorage.getItem('name')
        .then((value) => this.setState({name : value}))
    }
*/
    setName = (value) => {
        //AsyncStorage.setItem(name, value);
        this.setState({name : value});
    }
    
    render(){
        return (
            <View style = {style.container}>
               <TextInput style = {style.textInput}
               autoCapitalize = 'none'
               onChangeText={(vl) => {this.setName(vl)}}/>
               <Text style = {style.value}>Value : {this.state.name}</Text>
               <TouchableOpacity style = {style.button}
                onPress = {this.addData}>
                <Text style = {style.btnText}>Add</Text>
               </TouchableOpacity>
               <TouchableOpacity style = {style.button}
               onPress = {this.displayData}>
                <Text style = {style.btnText}>Display</Text>
               </TouchableOpacity>
            </View>
         )
    }
}
export default AsyncStorageExample 

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInput: {
        margin: 5,
        height: 35,
        width: 150,
        borderWidth: 1,
        backgroundColor: '#7685ed',
        borderRadius: 5,
        color: 'white',
    },
    value: {
        padding: 10,
    },
    button: {
        backgroundColor: 'green',
        margin: 10,
    },
    btnText: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 40,
        paddingRight: 40,
        color: 'white'
    }
})