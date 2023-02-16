import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';

export default class App extends React.Component {

  state = {
    name: 'MD ASHIK SARKAR LEON',
    gender: 'Male',
    age: '24'
  }

  render(){
    return(
      <View>
        <Text>My name is {this.state.name}</Text>
        <Text>Gender : {this.state.gender}</Text>
        <Text>Age : {this.state.age}</Text>
      </View>
    );
  }
}

