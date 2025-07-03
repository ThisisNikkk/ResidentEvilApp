import { StyleSheet, View, Text, TouchableOpacity, ImageBackground } from 'react-native';

const HomeScreen = () => (
    <ImageBackground 
        source={require('../../assets/img/w2.jpg')} 
        style={styles.backgroundImage}
      >
        <View style={styles.container}>
          <Text style={styles.text}>Home Screen</Text>
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
    backgroundColor:'black',
  },
  text: {
    color: 'white',
    fontSize: 24,
  },
});

export default HomeScreen;