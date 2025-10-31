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

    'MonaSans-Bold': require('./assets/fonts/mona_sans/MonaSans-Bold.ttf'),
    'MonaSans-Medium': require('./assets/fonts/mona_sans/MonaSans-Medium.ttf'),
    'MonaSans-Regular': require('./assets/fonts/mona_sans/MonaSans-Regular.ttf'),
    'MonaSans-Light': require('./assets/fonts/mona_sans/MonaSans-Light.ttf'),

    'Roboto-Regular': require('./assets/fonts/roboto/Roboto-Regular.ttf'),
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
