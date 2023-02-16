import React, { Component } from 'react'
import { View, Text, StyleSheet, Picker} from 'react-native'

class PickerExample  extends Component {

    state = {
        user: '',
    }

    updateUser = (newUser) => {
        this.setState({user: newUser});
    }

   render() {
    const animating = this.state.animating;
      return (
         <View style = {style.container}>
            <Picker selectedValue = {this.state.user} onValueChange = {this.updateUser}>
                <Picker.Item label = 'NONE' value = ''/>
                <Picker.Item label = 'CSE' value = 'cse'/>
                <Picker.Item label = 'EEE' value = 'eee'/>
                <Picker.Item label = 'RAC' value = 'rac'/>
            </Picker>
            <Text style = {style.text}>{this.state.user}</Text>
         </View>
      )
   }
}
export default PickerExample 

const style = StyleSheet.create({
    container: {
        
     }
})