import React from 'react';
import { ImageBackground, View, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import DisturbanceAlert from './DisturbanceAlert';

import Background  from '../../../assets/images/home_screen_bg.webp';

const HeaderSection: React.FC = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={Background} resizeMode="cover" style={styles.imageBackground}>
        <View style={styles.wrapper}>
          <View style={styles.banner} />
          <View style={styles.content}>
            <DisturbanceAlert />
            <Text style={styles.heading}>Vårt {'\n'}Landskrona</Text>
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
  banner: {
    width: 60,
    height: '100%',
    backgroundColor: '#6398AA',
  },
  heading: {
    fontFamily: 'Ciutadella-SemiBold',
    color: '#0e5873',
    textAlign: 'left',
    fontSize: 42,
    marginBottom: 'auto',
  },
});

export default HeaderSection;
