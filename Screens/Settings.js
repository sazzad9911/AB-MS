
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingsAllButton from '../Components/SettingsAllButton';
import Notification from './Notification';

const Stack = createNativeStackNavigator();

const Settings = () => {
  return (
    <Stack.Navigator screenOptions={{headerShon:false}}>
      <Stack.Screen options={{
        headerShown: false
      }} name="SettingsAllButton" component={SettingsAllButton} />
      <Stack.Screen options={{
          headerShown: false,
        }} name="Notificatione" component={Notification} />
    </Stack.Navigator>
  );
}
export default Settings


