import { useIsFocused } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';

interface FocusAwareStatusBarProps {
  [x: string]: any;
}

const FocusAwareStatusBar: React.FC<FocusAwareStatusBarProps> = (props) => {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar {...props} style="light" /> : null;
};

export default FocusAwareStatusBar;
