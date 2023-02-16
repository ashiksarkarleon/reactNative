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
    backgroundColor: 'grey',
    height: '100%',
    flexDirection: 'column',
    //flexDirection: 'column',
    //justifyContent: 'space-evenly',
    //justifyContent: 'space-between',
    //justifyContent: 'space-around',
    //justifyContent: 'flex-start',
    //justifyContent: 'flex-end',
    //alignItems: 'center'
    //alignItems: 'flex-end'
    //alignItems: 'stretch'
    
  },
  box1: {
    width: '50px',
    height: '50px',
    backgroundColor: 'blue',
  },
  box2: {
    width: '50px',
    height: '50px',
    backgroundColor: 'red'
  },
  box3: {
    width: '50px',
    height: '50px',
    backgroundColor: 'green'
  }
})



