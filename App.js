

import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Stay from './Screens/Stay';
import Login from './Screens/Login';
import register from './Screens/Register';
import Header from './Components/Header';
import {Background} from './Components/Background';
import { SvgXml } from 'react-native-svg';
import Card from './Components/Card';
import Bottombar from './Components/Bottombar';
import Thanks from './Screens/Thanks';






const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle='light-content' translucent={true} backgroundColor='transparent' />
      <SvgXml xml={Background} height='800' width={'400'} style={styles.AppSvg}></SvgXml>
      <Navigation/>
    </View>
  )
}
/*<Navigation />
*/
const Navigation = () => {

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'rgb(255, 45, 85)',
      background: 'transparent'
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen options={{
          header: (props) => <Header {...props} />
        }} name="Stay Screen" component={Stay} />
        <Stack.Screen options={{
          headerShown: false
        }} name="StayScreen2" component={Login} />
        <Stack.Screen name="Registration" component={register} />
        <Stack.Screen options={{
          headerShown: false
        }} name="LogInButton" component={Bottombar} />   
        <Stack.Screen options={{
          headerShown: false
        }} name="RegisterButton" component={Bottombar} />
         <Stack.Screen options={{
          headerShown: false,
        }} name="BuyTicket" component={Card} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  AppSvg: {
    position: 'absolute',
    top: -20
  }
});
