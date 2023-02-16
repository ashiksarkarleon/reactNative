import React, { Component } from 'react'
import { View, Text, StyleSheet} from 'react-native'

class GeolocationExample  extends Component {

    state = {
        initialPosition: 'unkown',
        lastPosition: 'unkown',
        watchID: 'unkown',
        number: ''
    }

    componentDidMount = () => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const iPosition = JSON.stringify(position.coords.latitude);
                this.setState({initialPosition: iPosition});
            },
            (err) => alert(err.message),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        );
        this.state.watchID = navigator.geolocation.watchPosition((position) => {
            const lPosition = JSON.stringify(position.coords.longitude);
            this.setState({lastPosition: lPosition});
        });
    }

    componentWillUnmount = () => {
        navigator.geolocation.clearWatch(this.state.watchID);
    }
    
    render(){
        return (
            <View style = {style.container}>
               <Text>Initial Position : {this.state.initialPosition}</Text>
               <Text>Current Position : {this.state.lastPosition}</Text>
            </View>
         )
    }
}
export default GeolocationExample 

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})