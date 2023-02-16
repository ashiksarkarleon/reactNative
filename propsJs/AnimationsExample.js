import React, { Component } from "react";
import { View, StyleSheet, Button, Animated, Easing, NativeModules, LayoutAnimation, TouchableOpacity, Text, ScrollView} from "react-native";
import img_1 from '../img/React-icon..jpg';

const {UIManager} = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true);

class AnimationsExample extends Component{

    state = {
        spinValue: new Animated.Value(0),
        w: 100,
        h: 100
    }

    onPress = () => {
        LayoutAnimation.spring();
        this.setState({w: this.state.w + 20, h: this.state.h + 20});
    }

    componentDidMount(){
        this.spin();
    }

    spin(){
        this.state.spinValue.setValue(0);

        Animated.timing(this.state.spinValue, {
            toValue: 1 ,    ////and setting spinValue to 1 
            duration: 2000,
            easing: Easing.linear
        }
        ).start(() => this.spin());

    };

    render(){
        const spin = this.state.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        })
        const marginLeft = this.state.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 300]
        })
        const opacity = this.state.spinValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 1, 0]
        })
        const movingMargin = this.state.spinValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 300, 0]
        })
        const textSize = this.state.spinValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [18, 32, 18]
        })
        const rotateX = this.state.spinValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: ['0deg', '180deg', '0deg']
        })

        return(
            <ScrollView>
                <View style = {style.container}>
                    <Animated.Image 
                    style = {{
                        width: 227,
                        height: 200,
                        transform: [{rotate: spin}]
                    }}
                        source = {img_1}/>
                    <Animated.View
                    style = {{
                        marginLeft,
                        width: 40,
                        height: 40,
                        backgroundColor: 'red',
                        margin: 30,
                        borderRadius: 50
                    }}
                    />
                    <Animated.View
                    style = {{
                        opacity,
                        width: 40,
                        height: 40,
                        backgroundColor: 'green',
                        margin: 30,
                        borderRadius: 50
                    }}
                    />
                    <Animated.View
                    style = {{
                        marginLeft:movingMargin,
                        width: 40,
                        height: 40,
                        backgroundColor: 'yellow',
                        margin: 30,
                        borderRadius: 50
                    }}
                    />
                    <Animated.Text
                    style = {{
                        fontSize: textSize,
                        width: 40,
                        height: 40,
                        backgroundColor: 'blue',
                        margin: 30,
                        borderRadius: 50
                    }}
                    />
                    <Animated.View
                    style = {{
                        transform: [{rotateX}],
                        width: 40,
                        height: 40,
                        backgroundColor: 'black',
                        margin: 30,
                        borderRadius: 50
                    }}
                    />

                    <View style = {[style.box, {width: this.state.w, height: this.state.h}]}>

                    </View>

                    <View>
                        <TouchableOpacity
                            onPress = {this.onPress}>
                            <View style = {style.button}>
                                <Text style = {style.buttonText}>Click</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
export default AnimationsExample

const style = StyleSheet.create({
    container: {
      marginTop: 50,
      backgroundColor: '#abe5f5',
      height: '100%',
      flex: 1,
      alignItems: 'center'
    },
    box: {
        backgroundColor: '#e7651f',
        borderRadius: 15
    },
    button: {
        marginTop: 20,
        marginBottom: 20,
        paddingHorizontal: 50,
        paddingVertical: 10,
        backgroundColor: 'green',
    },
    buttonText: {
        color: 'white'
    }
})