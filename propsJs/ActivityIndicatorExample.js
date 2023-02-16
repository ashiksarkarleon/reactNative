import React, { Component } from 'react'
import { View, StyleSheet, ActivityIndicator} from 'react-native';


class ActivityIndicatorExample extends Component {

    state = {
        animating: true
    }

    closeActivityIndicator = () => {
        setTimeout(() => {
            this.setState({animating: false})
        }, 6000)
    }

    componentDidMount = () => {
        this.closeActivityIndicator()
    }

    render(){

        const animat = this.state.animating;

        return (
            <View style = {style.container}>
                <ActivityIndicator  animating = {animat} size='large' color={'red'} />
                <ActivityIndicator  animating = {animat} size='small' color={'green'} />
                <ActivityIndicator  size='large' color={'blue'} />
            </View>    
          )
    }
  
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }
})


export default ActivityIndicatorExample