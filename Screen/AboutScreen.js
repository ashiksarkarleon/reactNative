import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const AboutScreen = ({navigator, route}) => {
    return(
        <View style = {style.container}>
            <Text>This is {route.params.name}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default AboutScreen