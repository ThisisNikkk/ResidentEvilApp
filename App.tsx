import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "./src/navigation/Tab"; // Make sure this path is correct
import LoginPage from "./src/components/LoginPage";
import SignupPage from "./src/components/SignupPage";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      {/* Root SafeAreaView to handle device notches */}
      <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }} edges={['top', 'left', 'right']}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="LoginPage"
              component={LoginPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignupPage"
              component={SignupPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Tabs"
              component={Tabs}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;