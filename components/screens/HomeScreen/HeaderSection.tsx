import React from 'react';
import { ImageBackground, View, StyleSheet } from 'react-native';
import Background from '../../../assets/images/home_screen_bg.webp';

const HeaderSection: React.FC = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={Background} resizeMode="cover" style={styles.imageBackground} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexShrink: 1,
    flexGrow: 1,
  },
  imageBackground: {
    width: '100%',
    height: '100%',
  },
});

export default HeaderSection;
