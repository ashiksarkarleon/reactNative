import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native'

class AlertExamlpe  extends Component {

    showAlert = () => {
        Alert.alert('Hello Alert');
    }

    render(){
        return (
            <View style = {style.container}>
               <TouchableOpacity style = {style.button}
                onPress = {this.showAlert}>
                    <Text style = {style.buttonText}>Press</Text>
               </TouchableOpacity>
            </View>
         )
    }
}
export default AlertExamlpe 

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        backgroundColor: 'green',
    },
    buttonText: {
        paddingVertical: 10,
        paddingHorizontal: 20,
    }
})