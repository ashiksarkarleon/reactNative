import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const HomeScreen = ({navigation}) => {
  return (
    <View style = {style.container}>
        <View style = {style.button}>
            <Button
            title='Go to Profile'
            onPress={() => navigation.navigate('Profile', {name: 'Profile Screen'})}/>
        </View>
        <View style = {style.button}>
            <Button style = {style.button}
                title='Go to About'
                onPress={() => navigation.navigate('About', {name: 'About Screen'})}/>
        </View>
        </View>
  )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    button: {
        margin: 15,
    }
})

export default HomeScreen