import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

interface ButtonProps {
  onPress: () => void;
  label: string;
  extraStyles?: Object;
}

const Button: React.FC<ButtonProps> = ({ onPress, label, extraStyles = null }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null, extraStyles]}>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 16,
    backgroundColor: '#0e5873',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonPressed: {
    backgroundColor: '#63a0b7',
  },
  label: {
    fontFamily: 'MonaSans-Medium',
    fontSize: 18,
    color: '#fff',
  },
});

export default Button;
