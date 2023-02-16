import React, { Component } from 'react'
import { View, Text, StyleSheet, Modal, TouchableHighlight } from 'react-native'

class ModalExample extends Component {

    state = {
        modalVisible: false,
    }

    toggleModal(visible) {
        this.setState({modalVisible: visible});
    }

   render() {
      return (
         <View style = {style.container}>
            <Modal
                animationType = {'slide'}
                transparent = {false}
                visible = {this.state.modalVisible}
                onRequestClose = {() => {console.log('Modal has been close');}}>       
                <View style = {style.modal}>
                    <Text style = {style.text}>Modal is open!</Text>
                    <TouchableHighlight 
                        onPress = {() => {this.toggleModal(!this.state.modalVisible)}}>
                        <Text style = {style.text}>Close Modal</Text>
                    </TouchableHighlight>
                </View>
            </Modal>
            <TouchableHighlight
                onPress = {() => {this.toggleModal(true)}}>
                <Text style = {style.text}>Open Modal</Text>
            </TouchableHighlight>
         </View>
      )
   }
}
export default ModalExample

const style = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#ede3f2',
        padding: 100,
     },
     modal: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f7021a',
        padding: 100
     },
     text: {
        color: '#3f2949',
        marginTop: 10
     }
})