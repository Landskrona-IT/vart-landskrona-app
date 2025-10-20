import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

interface ButtonProps {
  onPress: () => void;
  label: string;
  description?: string;
  icon?: React.ReactNode;
}

const IconButton: React.FC<ButtonProps> = ({ onPress, label, description = '', icon }) => {
  return (
    <TouchableHighlight onPress={onPress} underlayColor="#fccfda" style={styles.button}>
      <View style={styles.wrapper}>
        {icon && <View style={styles.icon}>{icon}</View>}
        <View style={styles.textWrapper}>
          {label && <Text style={styles.label}>{label}</Text>}
          {description && <Text style={styles.description}>{description}</Text>}
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    backgroundColor: '#FDDDE5',
    padding: 24,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  textWrapper: {
    gap: 10,
    flexShrink: 1,
  },
  icon: { marginRight: 12 },
  label: {
    flexWrap: 'wrap',
    fontFamily: 'Arial-Medium',
    fontSize: 19,
    letterSpacing: 0.25,
    color: '#000',
  },
  description: {
    flexShrink: 1,
    fontFamily: 'Roboto-Regular',
    fontSize: 15,
    color: '#000',
  },
});

export default IconButton;
