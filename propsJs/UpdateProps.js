import React, { Component } from "react";
import { Text, View } from "react-native";

const UpdateProps = (props) => {
    return(
        <View>
            <Text>Press text bleow...and see update</Text>
            <Text onPress={props.updateState}>
                {'\n'}
                My name is {props.name} {'\n'}
                gender : {props.gender} {'\n'}
                age : {props.age} {'\n'}
            </Text>
        </View>
    )
}
export default UpdateProps