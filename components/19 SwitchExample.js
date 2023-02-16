import React, { Component } from 'react'
import { View, Text, StyleSheet, StatusBar, Switch} from 'react-native'

class SwitchExample  extends Component {

    state = {
        switchValue: false,
    }

    switchValueChange = (value) => {
        this.setState({switchValue: value})
    }

    render(){
        return (
            <View style = {style.container}>
               <Switch 
                   value = {this.state.switchValue}
                   //onValueChange = {()=>this.switchValueChange(!this.state.switchValue)}
                   onValueChange = {(switchValue)=>this.setState({switchValue})}/>
            </View>
         )
    }
}
export default SwitchExample 

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})