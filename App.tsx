import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback } from 'react';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { WebViewProvider } from './components/screens/FormScreen/WebView/WebViewContext';
import AppNavigator from './navigation/AppNavigator';

SplashScreen.preventAutoHideAsync();

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({

    'Arial-Bold': require('./assets/fonts/arial/Arial Bold.ttf'),
    'Arial-Medium': require('./assets/fonts/arial/Arial Medium.ttf'),
    'Arial-Regular': require('./assets/fonts/arial/Arial Regular.ttf'),
    'Arial-Light': require('./assets/fonts/arial/Arial Light.ttf'),

    'Roboto-Light': require('./assets/fonts/roboto/Roboto-Light.ttf'),
    'Roboto-Regular': require('./assets/fonts/roboto/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/roboto/Roboto-Medium.ttf'),
    'Roboto-Bold': require('./assets/fonts/roboto/Roboto-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <WebViewProvider>
        <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
          <AppNavigator />
        </View>
      </WebViewProvider>
    </SafeAreaProvider>
  );
};

export default App;
