import React  from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
} from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginPage from "./src/components/LoginPage";
import SignupPage from "./src/components/SignupPage";

const App = () => {


  const Stack = createNativeStackNavigator();

  return (
       <NavigationContainer styles ={styles.container}>
            <Stack.Navigator>
              <Stack.Screen
                name="LoginPage"
                component={LoginPage}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="SignupPage"
                component={SignupPage}
                options={{headerShown: false}}
              />
            </Stack.Navigator>
          </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});

export default App;
