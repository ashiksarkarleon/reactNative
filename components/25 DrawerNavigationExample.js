import React from 'react'
import { StatusBar, Text} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer'
import About from '../Tab/About';
import Profile from '../Tab/Profile';
import Home from '../Tab/Home';
import Notification from '../Tab/Notification';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Drawer = createDrawerNavigator(); 

const DrawerNavigationExample = () => {

  return (
    <NavigationContainer>
        <Drawer.Navigator initialRouteName='Home'
            screenOptions={{
                drawerActiveBackgroundColor: 'black',
                drawerActiveTintColor: 'yellow',
                drawerInactiveTintColor: 'red',
                drawerStyle: {
                    backgroundColor: 'white',
                }
            }}>
            <Drawer.Screen 
                name='Home' 
                component={Home}
                options={{
                    drawerIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="home" color={color} size={size}/>
                    ),
                }}
            />
            <Drawer.Screen 
                name='Notification'
                component={Notification}
                options={{
                    drawerIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="bell" color={color} size={size}/>
                    ),
                }}
            />
            <Drawer.Screen 
                name='About' 
                component={About}
                options={{
                    drawerIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="account-details" color={color} size={size}/>
                    ),
                }}
            />
            <Drawer.Screen 
                name='Proile' 
                component={Profile}
                options={{
                    drawerIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="account" color={color} size={size}/>
                    ),
                }}
            />
        </Drawer.Navigator>
    </NavigationContainer>    
  )
}

export default DrawerNavigationExample