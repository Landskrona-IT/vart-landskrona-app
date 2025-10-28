import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../../common/buttons/Button';

const MainSection = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.card}>
        <Text style={styles.title}>Välkommen till Vårt Landskrona</Text>
        <Text style={styles.subtitle}>Lämna en felanmälan eller synpunkt om stadsmiljön</Text>
        <Text style={styles.description}>Hjälp oss att hålla staden hel och ren.</Text>
        <Button onPress={() => navigation.navigate('Form')} label="Skapa ett ärende" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#D9F0F4',
  },

  card: {
    width: '80%',
    maxWidth: 900,
  },

  title: {
    fontFamily: 'MonaSans-Bold',
    fontSize: 20,
    color: '#0e5873',
    textAlign: 'left',
    marginBottom: 10,
    letterSpacing: -0.7,
  },

  subtitle: {
    fontFamily: 'MonaSans-Bold',
    fontSize: 16,
    color: '#0e5873',
    marginBottom: 10,
    letterSpacing: -0.7,
  },

  description: {
    fontFamily: 'MonaSans-Regular',
    fontSize: 16,
    color: '#0e5873',
    textAlign: 'left',
    marginBottom: 30,
    letterSpacing: -0.7,
  },
});

export default MainSection;
