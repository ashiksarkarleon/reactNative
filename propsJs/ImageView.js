import { Component } from "react"
import { Image, StyleSheet, View } from "react-native";

import img_1 from '../img/Node.js_logo.jpg';
import img_2 from '../img/pngtree.jpg';
import img_3 from '../img/React-icon..jpg';

class ImageView extends Component{

    state = {
        img:[img_1,img_2,img_3]
    }

    render(){
        return(
            <View style = {style.container}>
                {
                    this.state.img.map((item, index) => (
                        <View style = {style.imgView}>
                            <Image 
                                source = {item}
                                style = {style.img}/>
                        </View>
                    ))
                }
            </View>
        )
    }
}
export default ImageView;

const style = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    imgView: {
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 5
    },
    img: {
        width: 100,
        height: 100,
        resizeMode: "contain",
        margin: 10

    }
})

