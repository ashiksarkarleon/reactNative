import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-web';
import UpdateProps from './propsJs/UpdateProps';

export default class App extends React.Component {

  render(){
    return(
      <View style= {style.container}>
        <View style= {style.box1}></View>
        <View style= {style.box2}></View>
        <View style= {style.box3}></View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1 
  },
  box1: {
    flex: 1,
    backgroundColor: 'blue',
  },
  box2: {
    flex: 2,
    backgroundColor: 'red',
  },
  box3: {
    flex: 3,
    backgroundColor: 'yellow',
  }
})



