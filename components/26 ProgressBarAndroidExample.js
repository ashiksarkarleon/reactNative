import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity,} from 'react-native';
import * as Progress from 'expo-progress';


class ProgressBarAndroidExample extends Component {

    /*
    state = {
        progressStatus: 0,
    }

    startProgress = () => {
        this.value = setInterval(() => {
            if(this.state.progressStatus <= 1){
                this.setState({progressStatus: this.progressStatus+ 0.1})
            }
        }, 100);
    }

    stopProgress = () => {
        clearInterval(this.value);
    }

    clearProgress = () => {
        this.setState({progressStatus: 0.0})
    }
*/
    render(){
        return (
            <View style = {style.container}>
                <Text style = {style.textProgressValue}>Progress Value : {/*parseFloat((this.state.progressStatus*100).toFixed(3))*/} %</Text>

                <Progress.Bar isAnimated progress={0.4} color='red' trackColor='gray' borderRadius={0} height={7} />

            </View>    
          )
    }
  
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textProgressValue: {
        marginBottom: 20,
    }
})


export default ProgressBarAndroidExample