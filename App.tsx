import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AdharScreen, OtpVerification, ProfileScreen } from "./screens";

import { IconButton } from "react-native-paper";
import { StateProvider } from "store";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <StateProvider>
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
              headerShadowVisible: false,
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
              headerShadowVisible: false,
              headerTitleAlign: "center",
            }}
          />

          <Stack.Screen
            name="ProfileScreen"
            component={ProfileScreen}
            options={{
              title: "",
              headerStyle: {
                backgroundColor: "#C1D7FF",
              },
              headerShadowVisible: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </StateProvider>
  );
}

export default App;
