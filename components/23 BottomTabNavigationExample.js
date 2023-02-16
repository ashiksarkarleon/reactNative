import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import About from '../Tab/About';
import Profile from '../Tab/Profile';
import Home from '../Tab/Home';
import Notification from '../Tab/Notification';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator(); 

const BottomTabNavigationExample = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator
            screenOptions={() => ({
                tabBarActiveTintColor: 'blue',
                tabBarInactiveTintColor: 'gray'
            })}>
            <Tab.Screen 
                name='Home' 
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="home" color={color} size={size}/>
                    ),
                }}
            />
            <Tab.Screen 
                name='Notification' 
                component={Notification}
                options={{
                    tabBarBadge: 3,
                    tabBarLabel: 'Notification',
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="bell" color={color} size={size}/>
                    ),
                }}/>
            <Tab.Screen 
                name='About' 
                component={About}
                options={{
                    tabBarLabel: 'About',
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="account-details" color={color} size={size}/>
                    ),
                }}/>
            <Tab.Screen 
                name='Profile' 
                component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="account" color={color} size={size}/>
                    ),
                }}/>
        </Tab.Navigator>
    </NavigationContainer>    
  )
}

export default BottomTabNavigationExample