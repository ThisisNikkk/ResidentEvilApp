import React, { useState, useRef, useEffect } from "react";
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

const LoginPage = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const image = require('../../assets/img/w2.jpg');
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleLoginPress = () => {
    setModalVisible(true);
    timerRef.current = setTimeout(() => setModalVisible(false), 2000);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return (
    <View style={styles.container}>
      {/* Fixed background image */}
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.backgroundImage}
      />

      <Modal animationType="slide" visible={modalVisible}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Welcome Gamer!!</Text>
          </View>
        </View>
      </Modal>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}

      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.contentContainer}>
            <Image
              source={require("../../assets/img/logo2.png")}
              style={styles.logo}
            />
            <Text style={styles.title}>
              <Text style={styles.titleBold}>One Mission, One Chance: </Text>
              <Text style={styles.titleNormal}>Don't Look Back</Text>
            </Text>

            <View style={styles.loginContainer}>
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
                  style={styles.signupButton}
                  onPress={() => navigation.navigate('SignupPage')}
                >
                  <Text style={styles.signupButtonText}>Signup</Text>
                </Pressable>
                <Pressable
                  style={styles.loginButton}
                  onPress={handleLoginPress}
                >
                  <Text style={styles.loginButtonText}>Login</Text>
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
      height: 280,
      resizeMode: "contain",
      alignSelf: "center",
    },
    title: {
      color: "white",
      textAlign: "center",
      marginVertical: 20,
    },
    titleBold: {
      fontSize: 24,
      fontFamily: "Montserrat-Bold",
    },
    titleNormal: {
      fontSize: 20,
      fontFamily: "Montserrat-Regular",
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
  signupButton: {
    marginTop: 10,
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
    alignSelf: "center",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderWidth: 1,
    borderColor: "rgba(255, 0, 0, 0.1)",
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
  signupButtonText: {
    color: "black",
    fontFamily: "Montserrat-Bold",
    textAlign: "center",
  },
  copyrightContainer: {
    marginVertical: 25,
    marginBottom: Platform.OS === "android" ? 10 : 20,
    alignItems: "center",
  },
  copyrightText: {
    color: "white",
    fontSize: 12,
    fontFamily: "Montserrat-SemiBold",
    textAlign: "center",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,1)",
  },
  modalContent: {
    width: 250,
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
    backgroundColor: "red",
    elevation: 10,
  },
  modalText: {
    fontSize: 20,
    fontFamily: "Montserrat-Bold",
    color: "white",
  },
});

export default LoginPage;