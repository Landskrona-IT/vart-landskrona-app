import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import LogoImageText from '../../../assets/logo_image_text.svg';
import LogoText from '../../../assets/logo_text.png';
import { HeaderHeightContext } from 'react-native-screens/native-stack';

interface HeaderProps {
  title?: string;
  logo: 'text' | 'text-image';
  handleClosePress?(): void;
  showClosePress?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title = '', logo = 'text', handleClosePress, showClosePress = true }) => {
  const insets = useSafeAreaInsets();
  const showExitAlert = () => {
    Alert.alert(
      "Är du säker på att du vill avsluta?",
      "Informationen du angett kommer inte sparas.",
      [
        {
          text: "Avbryt",
          style: "cancel"
        },
        {
          text: "OK",
          onPress: handleClosePress,
        }
      ]
    );
  };

  const renderLogo = () => {
    if (logo === 'text') {
      return <Image source={LogoText} style={styles.image} resizeMode="contain" />;
    }
    return <LogoImageText />
  };

  return (
    <HeaderHeightContext.Consumer>
      {(headerHeight) => {
        console.log("headerHeight", headerHeight);
       return (
      <View style={{ ...styles.container, paddingTop: insets.top }}>
        <View style={styles.header}>
          {renderLogo()}
          {showClosePress && (
            <TouchableOpacity onPress={showExitAlert} style={styles.button}>
              <Text style={styles.buttonText}>Avbryt</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
       )
      }}
    </HeaderHeightContext.Consumer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0e5873',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  image: {
    width: 137,
    height: 12,
  },
  button: {
    width: 80,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 18,
    color: 'white',
  },
});

export default Header;
