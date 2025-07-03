import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const ProfileScreen = () => (
  <ImageBackground 
    source={require('../../assets/img/w1.jpeg')} 
    style={styles.backgroundImage}
  >
    <View style={styles.container}>
      <Text style={styles.text}>Profile Screen</Text>
    </View>
  </ImageBackground>
);

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  text: {
    color: 'white',
    fontSize: 24,
  },
});

export default ProfileScreen;