import { Component } from "react"
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

class InputText extends Component{

    state = {
        name: '',
        email: ''
    }

    handleName= (text) => {
        this.setState({name: text})
    }

    handleEmail = (text) => {
        this.setState({email: text})
    }

    displayInput = (name, email) =>{
        alert('My name is ' + name + 'and email : ' + email);
    }

    render(){
        return(
            <View style = {style.container}>
                <TextInput style = {style.inputText}
                    underlineColorAndroid = "transparent"
                    placeholder = "Enter your Name..."
                    placeholderTextColor = "#9a73ef"
                    autoCapitalize = "none"
                    onChangeText={this.handleName}/>
                <TextInput style = {style.inputText}
                    underlineColorAndroid = "transparent"
                    placeholder = "Enter your email..."
                    placeholderTextColor = "#9a73ef"
                    autoCapitalize = "none"
                    onChangeText={this.handleEmail}/>
                <TouchableOpacity 
                    style = {style.button}
                    onPress = {() => this.displayInput(this.state.name, this.state.email)}>
                    
                    <Text style = {style.buttonText}>Submit</Text>

                </TouchableOpacity>
            </View>
        )
    }
}
export default InputText;

const style = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#abe5f5'
    },
    inputText: {
        margin: 15,
        height: 40,
        borderWidth: 1,
        borderColor: '#7a42f4',
        padding: 10
    },
    button: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
    }
})

