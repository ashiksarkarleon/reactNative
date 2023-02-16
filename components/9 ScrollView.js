import { Component } from "react"
import { ScrollView, StyleSheet, Text, View } from "react-native";

class ScrollViewExample extends Component{

    state = {
        data: [
            {'name': 'Ashik', 'id' : 101},
            {'name': 'Leon', 'id' : 102},
            {'name': 'Foysal', 'id' : 103},
            {'name': 'Koysik', 'id' : 104},
            {'name': 'Faruk', 'id' : 105},
            {'name': 'Javed', 'id' : 106},
            {'name': 'Mintu', 'id' : 107},
            {'name': 'Forad', 'id' : 108},
            {'name': 'Fuad', 'id' : 109},
            {'name': 'Akkas', 'id' : 110},
            {'name': 'Romjan', 'id' : 111},
            {'name': 'Sumaiya', 'id' : 112},
            {'name': 'Jenen', 'id' : 113},
            {'name': 'Rabeka', 'id' : 114},
        ]
    }

    render(){
        return(
            <View style = {style.container}>
                <ScrollView>
                    {
                        this.state.data.map((item, index) => (
                            <View key={item.id} style = {style.item}>
                                <Text>{item.name}</Text>
                            </View>
                        ))
                    }
                </ScrollView>
            </View>
        )
    }
}
export default ScrollViewExample;

const style = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#abe5f5',
    },
    item: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 30,
        margin: 5,
        borderWidth: 1,
        borderColor: '#dfe5e3',
        backgroundColor: '#cbffed',
        alignItems: 'center'

    }
})

