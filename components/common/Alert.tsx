import Ionicons from '@expo/vector-icons/Ionicons';
import React, { ReactNode } from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface AlertProps {
  children: ReactNode;
  title: string;
}

const Alert = ({ title, children }: AlertProps) => {
  return (
    <View style={styles.alertContainer}>
      <View style={styles.headerContainer}>
        <Ionicons name="information-circle" size={32} color="#FE9900" />
        <View style={styles.titleTextContainer}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
      </View>
      <View style={styles.contentContainer}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  alertContainer: {
    borderRadius: 10,
    backgroundColor: '#FFECCF',
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 12,
    gap: 10,
  },
  titleTextContainer: {
    flexShrink: 1,
  },
  titleText: {
    fontFamily: 'Ciutadella-Medium',
    fontSize: 18,
  },
  contentContainer: {
    flexShrink: 1,
    fontFamily: 'Roboto-Regular',
  },
});

export default Alert;
