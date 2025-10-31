import React from 'react';

import Container from '../components/common/Container';
import FocusAwareStatusBar from '../components/common/StatusBar';
import FormNavigation from '../components/screens/FormScreen/FormNavigation';
import WebView from '../components/screens/FormScreen/WebView/WebView';
import { HomeScreenNavigationProps } from '../types/Types';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const FormScreen: React.FC<HomeScreenNavigationProps> = ({ navigation }) => {
  return (
    <Container background={"#F4F0E9"}>
      <WebView url={process.env.EXPO_PUBLIC_WEBVIEW_URL} />
      <FormNavigation navigation={navigation} />
      <FocusAwareStatusBar style="dark" backgroundColor="transparent" />
    </Container>
  );
};

export default FormScreen;
