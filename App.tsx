import React from "react";
import { View, Image, Text, StyleSheet, ImageBackground, TextInput, Pressable } from "react-native";

function App() {

  const image = require('./assets/img/w2.jpg');

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Image
          source={require('./assets/img/logo2.png')}
          style={styles.logo} // optional: add styling so image is visible
        />
        <Text style={styles.title}>
          <Text style={styles.titleBold}>One Mission, One Chance : </Text>
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
           <Pressable style={styles.loginButton} onPress={() => console.log('Login pressed')}>
             <Text style={styles.loginButtonText}>Login</Text>
           </Pressable>
        </View>
        <Text style={styles.copyrightText}>Copyright © Nikhil Siwan.</Text>
        <Text style={styles.copyrightText2}>All Right Reserved.</Text>
      </ImageBackground>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    width: 450,
    top: -100,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  loginContainer: {
      width: "85%",
      height:260,
      padding: 20,
      borderRadius: 20,
      alignSelf: "center",
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      borderWidth: 1,
      borderColor: "rgba(255, 255, 255, 0.1)",
      top: -120,
    },
    input: {
      height: 50,
      marginVertical: 15,
      fontSize: 16,
      fontFamily: 'Montserrat-Regular',
      borderRadius: 20,
      paddingHorizontal: 15,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      color: "white",
    },
    title: {
      color: 'white',
      textAlign: 'center',
      marginBottom: 15,
      top: -120,
      fontSize: 27,
    },
    titleBold: {
      fontSize: 27,
      fontFamily: 'Montserrat-Bold',
      color: 'white',
    },
    titleNormal: {
      fontSize: 21,
      fontFamily: 'Montserrat-Regular',
      color: 'white',
    },
    loginButton: {
      position: 'absolute',
      bottom: 20,
      alignSelf: 'center',
      paddingVertical: 12,
      paddingHorizontal: 40,
      borderRadius: 30,
      backgroundColor: 'rgba(255, 0, 0, 0.5)',
      borderWidth: 1,
      borderColor: 'rgba(255, 0, 0, 0.1)',
    },

    loginButtonText: {
      color: 'white',
      fontSize: 16,
      fontFamily: 'Montserrat-Bold',
      textAlign: 'center',
    },
    copyrightText :{
        color:'white',
        fontSize:12,
        fontFamily: 'Montserrat-SemiBold',
        textAlign:'center',
        bottom:100
    },
    copyrightText2 :{
        color:'white',
        fontSize:10,
        fontFamily: 'Montserrat-SemiBold',
        textAlign:'center',
        bottom:100
    }



});

export default App;
