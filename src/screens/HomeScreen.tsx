import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, Pressable, Linking } from 'react-native';
import { BlurView } from '@react-native-community/blur';

const image = require('../../assets/img/Home.webp');
const logo = require('../../assets/img/logo2.png');
const ps5Img = require('../../assets/img/PS5.webp');
const ps4Img = require('../../assets/img/PS4.png');
const xboxImg = require('../../assets/img/XBOX.jpg');
const steamImg = require('../../assets/img/STEAM.jpg');

const platforms = [
  { key: 'ps5', label: 'PS5', img: ps5Img },
  { key: 'ps4', label: 'PS4', img: ps4Img },
  { key: 'xbox', label: 'XBOX', img: xboxImg },
  { key: 'steam', label: 'Steam', img: steamImg },
];

const platformLinks: { [key: string]: string } = {
  ps5: 'https://store.playstation.com/en-us/product/UP0102-PPSA07411_00-RE4RMAINGAME0000',
  ps4: 'https://store.playstation.com/en-us/product/UP0102-PPSA07411_00-RE4RMAINGAME0000',
  xbox: 'https://www.xbox.com/en-us/games/store/resident-evil-4/9N7JCPPCPN37/',
  steam: 'https://store.steampowered.com/app/2050650/Resident_Evil_4/',
};

const HomeScreen = () => {
  const [activePlatform, setActivePlatform] = useState('ps5');

  const handleSelectPlatform = () => {
    const url = platformLinks[activePlatform];
    if (url) {
      Linking.openURL(url);
    }
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
    >
      <View style={styles.ImageWrapper}>
        <Image source={image} style={styles.homeImg} />
        <Image source={logo} style={styles.logoImg} />
        <Text style={styles.tagLinetext}>Survival is just the beginning</Text>
      </View>
      <View style={styles.TextWrapper}>
        <Text style={styles.homeText}>
          Resident Evil 4 is a remake of the 2005 original Resident Evil 4.
          Reimagined for 2023 to bring state-of-the-art survival horror.
          Resident Evil 4 preserves the essence of the original game, while introducing modernized gameplay,
          a reimagined storyline, and vividly detailed graphics to make this the latest survival horror game where life and death, terror and catharsis intersect.
        </Text>
      </View>
      <View style={styles.TextWrapper}>
        <Text style={styles.titleText}>STORY</Text>
        <Text style={styles.homeText}>
          6 years have passed since the biological disaster in Raccoon City.

          Leon S. Kennedy, one of the survivors of the incident,
          has been recruited as an agent reporting directly to the president of the United States.

          With the experience of multiple missions on his back,
          Leon is sent to rescue the president's kidnapped daughter.

          He tracks her to a secluded European village,
          where there is something terribly wrong with the villagers.

          And the curtain rises on this story of daring rescue and grueling horror.
        </Text>
        <Image source={require('../../assets/img/leon-face.png')} style={styles.FillerImageLeft} />
      </View>
      <View style={styles.TextWrapper}>
        <Text style={styles.titleText}>THE VILLAGE & LAS PLAGAS</Text>
        <Text style={styles.homeText}>
          Upon arrival, Leon discovers his police escorts brutally murdered and the villagers themselves are hostile, exhibiting disturbing, erratic behavior. He quickly learns they are controlled by a parasitic organism known as Las Plagas and are devout members of a sinister cult called Los Illuminados.
        </Text>
        <Image source={require('../../assets/img/chruch.jpg')} style={styles.FillerImageRight} />
        <Text style={styles.homeText}>
          Leon is captured by the intimidating village chief, Bitores Méndez, and injected with a Plaga parasite himself. He manages to escape, encountering a mysterious scientist named Luis Serra, who reveals he once worked for the Umbrella Corporation (the notorious bio-weapon developers from previous Resident Evil games) and later for Los Illuminados. Luis is on the run and seeks to atone for his past by helping Leon and Ashley.
        </Text>
        <Image source={require('../../assets/img/mendez.jpg')} style={styles.FillerImageLeft} />
      </View>
      <View style={styles.TextWrapper}>
        <Text style={styles.titleText}>THE CASTLE & RAMÓN SALAZAR</Text>
        <Text style={styles.homeText}>
          Upon arriving in a secluded Spanish village, Leon finds his escorts dead and the locals, infected by the Las Plagas parasite, are hostile members of the Los Illuminados cult. The intimidating chief, Bitores Méndez, captures Leon and injects him with a Plaga. Leon escapes and meets Luis Serra.
        </Text>
        <Image source={require('../../assets/img/castle.jpg')} style={styles.FillerImageRight} />
        <Text style={styles.homeText}>
          A scientist who once worked for Umbrella and Los Illuminados, now seeking redemption. Leon rescues Ashley Graham, who is also infected. Relentlessly pursued by Méndez and the villagers, Leon eventually defeats Méndez.
        </Text>
        <Image source={require('../../assets/img/reunion.webp')} style={styles.FillerImageLeft} />
      </View>
      <View style={styles.TextWrapper}>
        <Text style={styles.titleText}>THE ISLAND AND OSMUND SADLER</Text>
        <Text style={styles.homeText}>
          Leon continues his pursuit of Ashley, battling Krauser again and reluctantly killing him. He eventually finds Ashley and brings her to Luis's lab, where they successfully remove the Plaga parasites from their bodies.
          However, the cult leader, Osmund Saddler, the mastermind behind Los Illuminados, confronts them. Saddler intends to use Ashley, still potentially a carrier, to infect the U.S. President upon her return, thereby spreading the Plaga's influence globally.
        </Text>
        <Image source={require('../../assets/img/saddler.jpg')} style={styles.FillerImageRight} />
        <Text style={styles.homeText}>
          A scientist who once worked for Umbrella and Los Illuminados, now seeking redemption. Leon rescues Ashley Graham, who is also infected. Relentlessly pursued by Méndez and the villagers, Leon eventually defeats Méndez.
        </Text>
        <Image source={require('../../assets/img/final.jpeg')} style={styles.FillerImageLeft} />
      </View>
      <View style={styles.platformsWrapper}>
        <Text style={styles.platformsTitle}>AVAILABLE ON</Text>
        <View style={styles.platformsRow}>
          {platforms.map((platform) => (
            <View key={platform.key} style={styles.platformIconWrapper}>
              <TouchableOpacity
                onPress={() => setActivePlatform(platform.key)}
                activeOpacity={0.7}
                style={[
                  styles.platformTouchable,
                  activePlatform === platform.key && styles.platformActive,
                ]}
              >
                <Image source={platform.img} style={styles.platformIcon} />
              </TouchableOpacity>
              <Text style={styles.platformLabel}>{platform.label}</Text>
            </View>
          ))}
        </View>
        <Pressable
          style={({ pressed }) => [
            styles.platformButton,
            pressed && { opacity: 0.7 },
            { marginTop: 18 },
          ]}
          onPress={handleSelectPlatform}
        >
          <Text style={styles.platformButtonText}>Select Platform</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  scrollContent: {
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 80,
  },
  ImageWrapper: {
    marginTop: 20,
    borderRadius: 28,
    overflow: 'hidden',
    marginBottom: 30,
    alignItems: 'center'
  },

  homeImg: {
    width: 380,
    height: 290,
    borderRadius: 20,
    resizeMode: 'cover',
  },
  logoImg: {
    marginTop: 10,
    width: 250,
    height: 100,
  },
  tagLinetext: {
    fontSize: 29,
    fontFamily: 'DancingScript-Bold',
    color: '#fff',
  },
  TextWrapper: {
    paddingHorizontal: 20,
    marginBottom: 25,
  },
  homeText: {
    fontSize: 19.5,
    fontFamily: 'Poppins-Regular',
    color: '#fff',
    textAlign: 'justify',

  },
  titleText: {
    fontSize: 22.2,
    color: 'red',
    fontFamily: 'Montserrat-SemiBold',
  },
  FillerImageLeft: {
    marginTop: 10,
    width: 380,
    height: 290,
    borderTopLeftRadius: 70,
    borderBottomRightRadius: 70,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  FillerImageRight: {
    marginTop: 10,
    width: 380,
    height: 290,
    borderTopRightRadius: 70,
    borderBottomLeftRadius: 70,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  platformsWrapper: {
    marginTop: 30,
    marginBottom: 40,
    alignItems: 'center',
  },
  platformsTitle: {
    fontSize: 22,
    color: '#fff',
    fontFamily: 'Montserrat-SemiBold',
    marginBottom: 12,
    letterSpacing: 1,
  },
  platformsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  platformIconWrapper: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  platformTouchable: {
    borderRadius: 16,
    borderWidth: 2,
    borderColor: 'transparent',
    padding: 6,
    marginBottom: 6,
  },
  platformActive: {
    borderColor: 'red',
    shadowColor: 'red',
    shadowOpacity: 0.5,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  platformIcon: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  platformLabel: {
    color: '#fff',
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
    marginBottom: 6,
  },
  platformButton: {
    backgroundColor: 'rgba(255,0,0,0.9)',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 18,
    marginTop: 2,
  },
  platformButtonText: {
    color: '#fff',
    fontSize: 17,
    fontFamily: 'Poppins-SemiBold',
    letterSpacing: 0.5,
  },
});

export default HomeScreen;