import React from 'react';
import { ImageBackground, View, StyleSheet } from 'react-native';

import DisturbanceAlert from './DisturbanceAlert';

import Background  from '../../../assets/images/home_screen_bg.webp';

const HeaderSection: React.FC = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={Background} resizeMode="cover" style={styles.imageBackground}>
        <View style={styles.wrapper}>
          <View style={styles.content}>
            <DisturbanceAlert />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
  },
  imageBackground: {
    width: '100%',
    height: '100%',
  },
  wrapper: {
    flexDirection: 'row',
    height: '100%',
  },
  content: {
    flex: 1,
    height: '100%',
    paddingTop: 28,
    paddingBottom: 50,
    paddingHorizontal: 32,
  },
  heading: {
    fontFamily: 'MonaSans-Bold',
    color: '#0e5873',
    textAlign: 'left',
    fontSize: 42,
    marginBottom: 'auto',
  },
});

export default HeaderSection;
