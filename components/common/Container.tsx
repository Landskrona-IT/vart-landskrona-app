import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

interface ContainerProps {
  children: ReactNode;
  background?: string;
}

const Container = ({ children, background = '#D9F0F4' }: ContainerProps) => {
  const insets = useSafeAreaInsets();
  return <View style={{...styles.container, backgroundColor: background, paddingBottom: insets.bottom}}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9F0F4',
  },
});

export default Container;
