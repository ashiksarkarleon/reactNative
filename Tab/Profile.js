import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Profile = () => {
  return (
    <View style = {style.container}>
        <Text style = {style.text}>this is Profile</Text>
    </View>
  )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontWeight: '600'
    }
})

export default Profile