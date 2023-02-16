import React, { Component } from 'react'
import { View, Text, StyleSheet, } from 'react-native'
import {createNavigator, createAppContainer} from 'react-navigation';

class StackNavigatorExample  extends Component {
    
    render(){
        return (
            <View style = {style.container}>
                <Text>Home Screen</Text>
            </View>
         )
    }
} 

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})

const AppNavigator = createNavigator({
    HOME: {
        screen: StackNavigatorExample
    }
})

export default createAppContainer(AppNavigator);