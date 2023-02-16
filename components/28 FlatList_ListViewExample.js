
import React, { Component } from 'react'
import { View, StyleSheet, FlatList, Text, TouchableOpacity} from 'react-native';


class FlatList_ListViewExample extends Component {

    render(){

        return (
            <View style = {style.container}>
                <FlatList style = {style.flatList}
                data={[
                    {key: 'Ashik'},
                    {key: 'Rasel'},
                    {key: 'Imthyaj'},
                    {key: 'Tanjila'},
                    {key: 'Oni'},
                    {key: 'Labonno'},
                    {key: 'Priya'},
                    {key: 'Kojak'},
                    {key: 'Pamila'},
                    {key: 'Yaht'},
                ]}
                renderItem = {({item}) => 
                    <View>
                        <TouchableOpacity style = {style.itemButon} onPress={() => alert(item.key)}>
                            <Text style={style.item}>{item.key}</Text>
                        </TouchableOpacity>
                    </View>
                }
                />
            </View>    
          )
    }
  
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    flatList: {
        backgroundColor: 'gray',
    },
    itemButon: {
        backgroundColor: 'orange',
        margin: 5,
        justifyContent: 'space-between',
        alignItems:'center'
    },
    item: {
        margin: 10,
        padding: 10,
        color: 'white'
    }
})


export default FlatList_ListViewExample