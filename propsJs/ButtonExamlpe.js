import React, { Component } from "react";
import { TouchableOpacity, View, Text, StyleSheet, Button, TouchableHighlight, TouchableNativeFeedback, TouchableWithoutFeedback } from "react-native";

class ButtonExamlpe extends Component{

    handlePress = () => {
        alert('hello');
    }

    render(){
        return(
            <View style = {style.container}>
                {/*Buttons*/}
                <View style = {style.buttonView}>
                    <Button
                        title = "Ok"
                        onPress = {this.handlePress}/>
                </View>
                <View style = {style.buttonView}>
                    <Button
                        title = "Ok"
                        onPress = {this.handlePress}
                        disabled = {true}/>
                </View>

                {/*Touchable Opacity Buttons*/}
                <TouchableOpacity
                    onPress={this.handlePress}>
                    <Text style = {style.text}>
                        Ok
                    </Text>
                </TouchableOpacity>

                {/*Touchable Highlight Buttons*/}
                <TouchableHighlight
                    onPress={this.handlePress}>
                    <Text style = {style.text}>
                        Ok
                    </Text>
                </TouchableHighlight>

                {/*Touchable Native Feedback Buttons*/}
                <TouchableNativeFeedback
                     onPress={this.handlePress}>
                        <Text style = {style.text}>
                        Ok
                    </Text>
                </TouchableNativeFeedback>

                {/*Touchable Without Feedback Buttons*/}
                <TouchableWithoutFeedback
                     onPress={this.handlePress}>
                        <Text style = {style.text}>
                        Ok
                    </Text>
                </TouchableWithoutFeedback>

            </View>
        )
    }
}
export default ButtonExamlpe

const style = StyleSheet.create({
    container: {
      marginTop: 50,
      backgroundColor: '#abe5f5',
      height: '100%'
    },
    buttonView: {
        margin: 10,
        backgroundColor: 'red',
    },
    text: {
        textAlign: 'center',
        backgroundColor: 'green',
        margin: 10,
        padding: 10
    },

})