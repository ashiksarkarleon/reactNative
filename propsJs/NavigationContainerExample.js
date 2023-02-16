import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import HomeScreen from '../Screen/HomeScreen';
import ProfileScreen from '../Screen/ProfileScree';

const Stack = createNativeStackNavigator();

const NavigationContainerExample = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen
            name = 'Home'
            component = {HomeScreen}
            options = {{ title: 'Welcome to HomeScreen'}}/>
        <Stack.Screen 
            name = 'Profile'
            component={ProfileScreen} />
        <Stack.Screen 
            name = 'About'
            component={ProfileScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default NavigationContainerExample