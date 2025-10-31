import React from 'react';
import { ImageBackground, View, StyleSheet } from 'react-native';

import Background  from '../../../assets/images/home_screen_bg.webp';

const HeaderSection: React.FC = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={Background} resizeMode="cover" style={styles.imageBackground} />
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
});

export default HeaderSection;
