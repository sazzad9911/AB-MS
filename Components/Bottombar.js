
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Profile from '../Screens/Profile';
import Service from '../Screens/Service';
import Settinges from '../Screens/Settings';
import Bus_sit_System from '../Screens/Bus_sit_System'
import Ionic from 'react-native-vector-icons/Ionicons';



const Tab = createBottomTabNavigator();

const Bottombar = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size, colour }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'ios-home-sharp' : 'ios-home-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Service') {
            iconName = focused ? 'md-build' : 'md-build-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          } else if (route.name === 'SitSystem') {
            iconName = focused ? 'md-list-sharp' : 'md-list-outline';
          }
          return <Ionic name={iconName} size={size} colour={colour} />
        }
      })}
      style={{ flex: 1 }}>
      <Tab.Screen options={{ headerShown: false }} name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name='Service' component={Service} />
      <Tab.Screen options={{
          headerShown: false,
        }}name='Settings' component={Settinges} />
      <Tab.Screen options={{
          headerShown: false,
        }} name='SitSystem' component={Bus_sit_System} />
    </Tab.Navigator>
  )
}

export default Bottombar
/*
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  */