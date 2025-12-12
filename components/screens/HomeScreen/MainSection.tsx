import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Button from '../../common/buttons/Button';

const MainSection = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.title}>Välkommen till Vårt Landskrona</Text>
        <Text style={styles.subtitle}>Lämna en felanmälan eller synpunkt om stadsmiljön</Text>
        <Text style={styles.description}>Hjälp oss att hålla staden hel och ren.</Text>
        <Button onPress={() => navigation.navigate('Form')} label="Skapa ett ärende" />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexShrink: 0,
    paddingVertical: 30,
    paddingHorizontal: 26,
    backgroundColor: '#D9F0F4',
    alignItems: 'center',
  },
  scroll: {
    width: '100%',
  },
  title: {
    fontFamily: 'MonaSans-Bold',
    fontSize: 19,
    color: '#0e5873',
    textAlign: 'left',
    marginBottom: 10,
    letterSpacing: -0.7,
  },
  subtitle: {
    fontFamily: 'MonaSans-Medium',
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
