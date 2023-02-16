import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-web';
import UpdateProps from './propsJs/UpdateProps';

export default class App extends React.Component {

  state = {
    name: 'MD ASHIK SARKAR LEON',
    gender: 'Male',
    age: '24'
  }

  updateState = () => {
    this.setState({
      name: 'Mina Islam',
      gender: 'female',
      age: '22'
    })
  }

  render(){
    return(
      <View>
        <UpdateProps name = {this.state.name} gender = {this.state.gender} age = {this.state.age} updateState = {this.updateState}/>
      </View>
    );
  }
}

// propsJs + UpdateProps.js