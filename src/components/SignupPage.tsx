import React, { useState, useRef } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  Pressable,
  Modal,
  Platform,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";

import { useNavigation } from '@react-navigation/native';

const SignupPage = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const image = require('../../assets/img/w2.jpg');
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Fixed background image */}
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.backgroundImage}
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.contentContainer}>
            <Image source={require("../../assets/img/logo2.png")} style={styles.logo} />
            <Text style={styles.title}>
              <Text style={styles.titleBold}>One Mission, One Chance: </Text>
              <Text style={styles.titleNormal}>Don't Look Back</Text>
            </Text>

            <View style={styles.loginContainer}>
              <TextInput
                placeholder="Name"
                placeholderTextColor="#fff"
                style={styles.input}
              />
              <TextInput
                placeholder="Email"
                placeholderTextColor="#fff"
                style={styles.input}
              />
              <TextInput
                placeholder="Password"
                placeholderTextColor="#fff"
                secureTextEntry
                style={styles.input}
              />
              <View style={styles.buttonContainer}>
                <Pressable
                  style={styles.loginButton}
                  onPress={() => navigation.navigate('LoginPage')}
                >
                  <Text style={styles.loginButtonText}>Create Account</Text>
                </Pressable>
              </View>
            </View>

            <View style={styles.copyrightContainer}>
              <Text style={styles.copyrightText}>
                Copyright © Nikhil Siwan.
              </Text>
              <Text style={styles.copyrightText}>All Rights Reserved.</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: 'transparent',
  },
  logo: {
    width: "100%",
    maxWidth: 450,
    height: 270,
    resizeMode: "contain",
    alignSelf: "center",
  },
  title: {
    color: "white",
    textAlign: "center",
    marginVertical: 25,
  },
  titleBold: {
    fontSize: 24,
    fontFamily: "Montserrat-Bold",
  },
  titleNormal: {
    fontSize: 20,
    fontFamily: "Montserrat-Regular",
  },
  loginContainer: {
    width: "100%",
    maxWidth: 400,
    padding: 20,
    borderRadius: 20,
    alignSelf: "center",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 10,
  },
  input: {
    height: 50,
    marginVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    color: "white",
    fontFamily: "Montserrat-Regular",
  },
  loginButton: {
    marginTop: 10,
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
    alignSelf: "center",
    backgroundColor: "rgba(255, 0, 0, 0.6)",
    borderWidth: 1,
    borderColor: "rgba(255, 0, 0, 0.1)",
  },
  loginButtonText: {
    color: "white",
    fontFamily: "Montserrat-Bold",
    textAlign: "center",
  },
  copyrightContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  copyrightText: {
    color: "white",
    fontSize: 12,
    fontFamily: "Montserrat-SemiBold",
    textAlign: "center",
  },
});

export default SignupPage;