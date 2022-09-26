
import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Profile from '../Screens/Profile';
import Home from '../Screens/Home';



const Drawer = createDrawerNavigator();

const Drawerbar = () => {
  return (
    <NavigationContainer initialRouteName="Home">
      <Drawer.Navigator>
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Home" component={Home} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default Drawerbar;

