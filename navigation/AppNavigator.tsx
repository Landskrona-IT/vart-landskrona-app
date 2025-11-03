import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getHeaderTitle } from '@react-navigation/elements';
import { NavigationContainer } from '@react-navigation/native';
import React, { JSX } from 'react';

import Header from '../components/screens/FormScreen/Header';
import { useWebView } from '../components/screens/FormScreen/WebView/WebViewContext';
import Form from '../screens/FormScreen';
import Home from '../screens/HomeScreen';
import { RootStackParamList } from '../types/Types';

const Tab = createBottomTabNavigator<RootStackParamList>();

const AppNavigator = (): JSX.Element => {
  const { reloadWebView, navigatePreviousStep, webViewRef, currentStep, isSubmitted } =
    useWebView();

  return (
    <NavigationContainer>
      <Tab.Navigator
        id={undefined}
        initialRouteName="Home"
        screenOptions={{
          tabBarStyle: { display: 'none' },
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerStyle: {
              backgroundColor: '#0e5873',
            },
            header: () => {
              return <Header logo='text-image' showClosePress={false} />
            }
          }}
        />
        <Tab.Screen
          name="Form"
          component={Form}
          options={{
            title: 'Lämna en felanmälan',
            lazy: true, // Pre loads webview in the background. Currently not working on iOS beacuse of a bug.
            header: ({ navigation, route, options }) => {
              const title = getHeaderTitle(options, route.name);
              return (
                <Header
                  title=''
                  logo='text'
                  handleClosePress={() => {
                    reloadWebView();
                    navigation.navigate('Home');
                  }}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
