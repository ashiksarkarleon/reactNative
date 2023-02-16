import React, { Component } from 'react'
import { View, StyleSheet, SectionList, Text} from 'react-native';


class SectionListExample extends Component {

    render(){

        return (
            <View style = {style.container}>
                <SectionList style = {style.sectionList}
                    sections={[
                        {title: 'A', data: ['Ashik', 'Asif', 'Akbar']},
                        {title: 'P', data: ['Pyel', 'Pinky', 'Priya']},
                        {title: 'R', data: ['Rafsan', 'Rafid', 'Riya']}
                    ]}
                    renderItem = {({item}) => <View style = {style.itemView}><Text style={style.item}>{item}</Text></View>}
                    renderSectionHeader = {({section}) => <Text style = {style.sectionHeader}>{section.title}</Text>}
                    keyExtractor = {(item, index) => `basicListEntry-${item.title}`}
                />
            </View>    
          )
    }
  
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    sectionList: {
        backgroundColor: 'gray',
    },
    itemView: {
        backgroundColor: 'red'
    },
    item: {
        margin: 10,
        padding: 10,
        backgroundColor: 'yellow'
    },
    sectionHeader: {
        backgroundColor: 'rgba(247,247,247,1.0)',
        fontSize: 14,
        fontWeight: 'bold',
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 5,
    },
})


export default SectionListExample