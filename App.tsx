import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AdharScreen, OtpVerification } from "./screens";

import { IconButton } from "react-native-paper";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="AdharScreen"
          component={AdharScreen}
          options={{
            title: "New ABHA Address",
            headerStyle: {
              backgroundColor: "#C1D7FF",
            },
            headerTitleAlign: "center",
            headerLeft: () => <IconButton icon="arrow-left"></IconButton>,
          }}
        />
        <Stack.Screen
          name="OtpVerification"
          component={OtpVerification}
          options={{
            title: "OTP Verification",
            headerStyle: {
              backgroundColor: "#C1D7FF",
            },
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
