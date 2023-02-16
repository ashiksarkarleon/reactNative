import React, { Component } from 'react'
import { View, Text, StyleSheet, Modal, TouchableHighlight, ActivityIndicator } from 'react-native'

class ActivityIndicatorExample  extends Component {

    state = {
        animating: true,
    }

    closeActivityIndicator = () => setTimeout(() => {
        this.setState({animating: false})
    }, 4000);

    componentDidMount = () => {
        this.closeActivityIndicator();
    }

   render() {
    const animating = this.state.animating;
      return (
         <View style = {style.container}>
            <ActivityIndicator style = {style.activityIndicator}
                animating = {animating}
                color = '#bc2b78'
                size={'large'}/>
         </View>
      )
   }
}
export default ActivityIndicatorExample 

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 70
     },
     activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 80
     }
})