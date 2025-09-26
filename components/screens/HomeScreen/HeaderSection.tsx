import React from 'react';
import { ImageBackground, View, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import DisturbanceAlert from './DisturbanceAlert';

const image = require('../../../assets/images/home_screen_bg.webp');

const HeaderSection: React.FC = () => {
  const insets = useSafeAreaInsets();

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.imageBackground}>
      <View style={{ paddingTop: insets.top }} />
      <DisturbanceAlert />
      <Text style={styles.heading}>Välkommen till {'\n'}Ett bättre Helsingborg</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 3,
    paddingBottom: 50,
    paddingHorizontal: 16,
  },
  heading: {
    fontFamily: 'Helsingborg-Sans-Bold',
    color: '#fff',
    textAlign: 'center',
    fontSize: 34,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 3 },
    textShadowRadius: 6,
    letterSpacing: 0.5,
    marginTop: 'auto',
  },
});

export default HeaderSection;
