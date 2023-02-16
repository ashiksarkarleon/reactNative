import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview'

//only support for mobile, emulator

class WebViewExample extends Component {
   render() {
      return (
         <View style = {style.container}>
            <WebView
                source = {{uri: 'https://www.google.com'}}>
            </WebView>
         </View>
      )
   }
}
export default WebViewExample

const style = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    }
})