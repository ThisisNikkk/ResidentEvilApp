import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CharacterScreen from '../screens/CharacterScreen';
import HomeScreen from '../screens/HomeScreen';
import BlogScreen from '../screens/BlogScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();
const { width } = Dimensions.get('window');

const Tabs = () => {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: Math.max(insets.bottom, 18),
          marginHorizontal: 20,
          borderRadius: 40,
          height: 80,
          overflow: 'hidden',
          borderWidth: 1,
          borderColor: 'rgba(255, 255, 255, 0.2)',
          ...styles.glassShadow,
        },
      }}
    >
      <Tab.Screen name='HomeScreen' component={HomeScreen}
        options={{
          headerShown:false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabItem}>
              <Image
                source={require('../../assets/img/home.png')}
                style={[
                  styles.tabIcon,
                  { tintColor: focused ? '#e32f45' : '#ffffff' }
                ]}
              />
              <Text style={[
                styles.tabText,
                { 
                  color: focused ? '#e32f45' : '#ffffff',
                  textShadowColor: 'rgba(0, 0, 0, 0.3)',
                  textShadowOffset: { width: 0, height: 1 },
                  textShadowRadius: 2
                }
              ]}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      
      <Tab.Screen name='CharacterScreen' component={CharacterScreen} 
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabItem}>
              <Image
                source={require('../../assets/img/character.png')}
                style={[
                  styles.tabIcon,
                  { tintColor: focused ? '#e32f45' : '#ffffff' }
                ]}
              />
              <Text style={[
                styles.tabText,
                { 
                  color: focused ? '#e32f45' : '#ffffff',
                  textShadowColor: 'rgba(0, 0, 0, 0.3)',
                  textShadowOffset: { width: 0, height: 1 },
                  textShadowRadius: 2
                }
              ]}>
                Character
              </Text>
            </View>
          ),
        }}
      />
      
      <Tab.Screen name='BlogScreen' component={BlogScreen} 
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabItem}>
              <Image
                source={require('../../assets/img/blog.png')}
                style={[
                  styles.tabIcon,
                  { tintColor: focused ? '#e32f45' : '#ffffff' }
                ]}
              />
              <Text style={[
                styles.tabText,
                { 
                  color: focused ? '#e32f45' : '#ffffff',
                  textShadowColor: 'rgba(0, 0, 0, 0.3)',
                  textShadowOffset: { width: 0, height: 1 },
                  textShadowRadius: 2
                }
              ]}>
                Blog
              </Text>
            </View>
          ),
        }}
      />
      
      <Tab.Screen name='ProfileScreen' component={ProfileScreen} 
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabItem}>
              <Image
                source={require('../../assets/img/profile.png')}
                style={[
                  styles.tabIcon,
                  { tintColor: focused ? '#e32f45' : '#ffffff' }
                ]}
              />
              <Text style={[
                styles.tabText,
                { 
                  color: focused ? '#e32f45' : '#ffffff',
                  textShadowColor: 'rgba(0, 0, 0, 0.3)',
                  textShadowOffset: { width: 0, height: 1 },
                  textShadowRadius: 2
                }
              ]}>
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  glassShadow: {
    elevation: 5,
    backgroundColor: 'transparent',
  },
  tabItem: {
    marginTop: 38,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginBottom: 4,
  },
  tabText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
    textAlign: 'center',
    textAlignVertical: 'center',
    height: 14,
    lineHeight: 14, 
    fontWeight: '600',
  }
});

export default Tabs;