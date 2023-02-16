import React from 'react'
import { StatusBar, StyleSheet, Text, View} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import About from '../Tab/About';
import Profile from '../Tab/Profile';
import Home from '../Tab/Home';
import Notification from '../Tab/Notification';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator(); 

const TopTabNavigationExample = () => {

  return (
    <View>
        <StatusBar  
            backgroundColor='red'  
             barStyle='light-content'  
        />  
        <View style={styles.header}>  
            <Icon name='ios-camera' size={28} color='white'/>  
            <Icon name='ios-menu' size={28} color='white'/>  
        </View>  
        <View>
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={() => ({
                    tabBarActiveTintColor: 'blue',
                    tabBarInactiveTintColor: 'gray',
                    tabBarLabelStyle: {fontSize: 12},
                    tabBarShowLabel: false,
                })}>
                <Tab.Screen 
                    name='Home' 
                    component={Home}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({color, size = 20}) => (
                            <MaterialCommunityIcons name="home" color={color} size={size}/>
                        ),
                    }}/>
                <Tab.Screen 
                    name='Notification' 
                    component={Notification}
                    options={{
                        tabBarLabel: 'Notification',
                        //tabBarBadge: () => {return 3},
                        tabBarIcon: ({color, size = 20}) => (
                            <MaterialCommunityIcons name="bell" color={color} size={size}/>
                        ),
                    }}/>
                <Tab.Screen 
                    name='About' 
                    component={About}
                    options={{
                        tabBarLabel: 'About',
                        tabBarIcon: ({color, size = 20}) => (
                            <MaterialCommunityIcons name="account-details" color={color} size={size}/>
                        ),
                    }}/>
                <Tab.Screen 
                    name='Proile' 
                    component={Profile}
                    options={{
                        tabBarLabel: 'Profile',
                        tabBarIcon: ({color, size = 20}) => (
                            <MaterialCommunityIcons name="account" color={color} size={size}/>
                        ),
                    }}/>
            </Tab.Navigator>
        </NavigationContainer>
        </View>
    </View>    
  )
}

const styles = StyleSheet.create({   
    header:{  
        backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 18,
        paddingTop: 5,
        paddingBottom: 5,
    }  
});

export default TopTabNavigationExample