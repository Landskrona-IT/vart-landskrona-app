import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../../common/buttons/Button';

const MainSection = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.card}>
        <Text style={styles.title}>Välkommen till Vårt Landskrona</Text>
        <Text style={styles.subtitle}>Lämna en felanmälan eller synpunkt</Text>
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
    padding: 26,
    backgroundColor: '#D9F0F4',
  },

  card: {
    width: '80%',
    maxWidth: 900,
  },

  title: {
    fontFamily: 'Ciutadella-SemiBold',
    fontSize: 23,
    color: '#0e5873',
    textAlign: 'left',
    marginBottom: 20,
  },

  subtitle: {
    fontFamily: 'Ciutadella-SemiBold',
    fontSize: 18,
    color: '#0e5873',
    marginBottom: 20,
  },

  description: {
    fontFamily: 'Ciutadella-Regular',
    fontSize: 18,
    color: '#0e5873',
    textAlign: 'left',
    marginBottom: 44,
  },
});

export default MainSection;
