import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingsAllButton from "../Components/SettingsAllButton";
import Notification from "./Notification";
import Display from "./Display";
import Limit from "./Limit";
import Help_Line from "./Help_line";

const Stack = createNativeStackNavigator();

const Settings = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShon: false }}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="SettingsAllButton"
        component={SettingsAllButton}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Notificatione"
        component={Notification}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Display"
        component={Display}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Help_Line"
        component={Help_Line}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Limit"
        component={Limit}
      />
    </Stack.Navigator>
  );
};
export default Settings;
