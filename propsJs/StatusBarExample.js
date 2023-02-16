import React, { Component } from 'react'
import { View, Text, StyleSheet, StatusBar} from 'react-native'

class StatusBarExample  extends Component {

   render() {
      return (
         <View style = {style.container}>
            <StatusBar barStyle={'light-content'} hidden = {false} backgroundColor="#00BCD4" translucent={true} />
            <StatusBar barStyle={'dark-content'} hidden = {false} backgroundColor="#00BCD4" translucent={true} />
         </View>
      )
   }
}
export default StatusBarExample 

const style = StyleSheet.create({
    container: {
        
     }
})