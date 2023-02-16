import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-web';

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
        <Text>My name is {this.state.name}</Text>
        <Text>Gender : {this.state.gender}</Text>
        <Text>Age : {this.state.age}</Text>
        <Button
          onPress = {this.updateState}
          title = "Update State"
          color = "gray"
        />
      </View>
    );
  }
}

