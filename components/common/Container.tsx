import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';

interface ContainerProps {
  children: ReactNode;
  background?: string;
}

const Container = ({ children, background = '#0e5873' }: ContainerProps) => {
  return <View style={{...styles.container, backgroundColor: background}}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Container;
