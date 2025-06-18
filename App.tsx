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

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const image = require("./assets/img/w2.jpg");

  const handleLoginPress = () => {
    setModalVisible(true);
    timerRef.current = setTimeout(() => setModalVisible(false), 1500);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground
          source={image}
          resizeMode="cover"
          style={styles.container}
        >
          <View style={styles.contentContainer}>
            <Image
              source={require("./assets/img/logo2.png")}
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

              <Pressable style={styles.loginButton} onPress={handleLoginPress}>
                <Text style={styles.loginButtonText}>Login</Text>
              </Pressable>
            </View>

            <View style={styles.copyrightContainer}>
              <Text style={styles.copyrightText}>
                Copyright © Nikhil Siwan.
              </Text>
              <Text style={styles.copyrightText}>All Rights Reserved.</Text>
            </View>
          </View>

          <Modal animationType="slide" transparent visible={modalVisible}>
            <View style={styles.modalOverlay}>
              <View style={styles.modalContent}>
                <Text style={styles.modalText}>Welcome Gamer!!</Text>
              </View>
            </View>
          </Modal>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: "100%",
    maxWidth: 450,
    height: 250,
    resizeMode: "contain",
    alignSelf: "center",
  },
  title: {
    color: "white",
    textAlign: "center",
    marginVertical: 35,
  },
  titleBold: {
    fontSize: 25,
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
    backgroundColor: "rgba(255, 0, 0, 0.5)",
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
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.7)",
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

export default App;
