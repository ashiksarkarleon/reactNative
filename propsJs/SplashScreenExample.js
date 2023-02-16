import React, { Component } from 'react'
import { View, StyleSheet, ActivityIndicator, Image, Text} from 'react-native';
import sPlash_Img from '../img/React-icon..jpg'


class SplashScreenExample extends Component {

    state = {
        isVisible: true
    }

    hide_Splash_Screen = () => {
        this.setState({isVisible: false});
    }

    componentDidMount(){
        setTimeout(() => {
            this.hide_Splash_Screen();
        }, 3000);
    }


    render(){
        let sPlashScreren = (
            <View style = {style.splash_view}>
                <Image style = {style.splash_img} source={sPlash_Img}/>
                <Text style = {style.splashText}>WELCOME</Text>
            </View>
        )

        let nextScreen = (
            <View style = {style.welcomeContainer}>
                <Text style = {style.textWelcome}>Welcome to Home</Text>
            </View>
        )

        return (
            <View style = {style.container}>
                {(this.state.isVisible === true) ? sPlashScreren : nextScreen}
            </View>    
          )
    }
  
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    splash_view: {
        margin: 10,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray'
    },
    splashText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white'
    },
    splash_img: {
        width: '50%',
        height: '50%',
        resizeMode: 'contain',
    },
    welcomeContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textWelcome: {
        fontWeight: 'bold'
    }
})


export default SplashScreenExample
