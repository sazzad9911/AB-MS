
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Stay from './Screens/Stay';
import Home from './Screens/Home';
import Login from './Screens/Login';
import register from './Screens/Register';
import Header from './Components/Header';





export default function App() {

  const Stack = createNativeStackNavigator();
  

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{
          header:(props)=><Header {...props}/>
        }} name="Stay Screen" component={Stay}/>
        <Stack.Screen options={{
          headerShown:false
        }} name="StayScreen2" component={Login}/>
        <Stack.Screen name="Registration" component={register}/>
        <Stack.Screen options={{
          headerShown:false
        }} name="RegisterButton" component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


