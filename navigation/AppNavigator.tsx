import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React, { JSX } from 'react';

import LogoImageText from '../assets/logo_image_text.png';
import LogoText from '../assets/logo_text.png';
import { useWebView } from '../components/screens/FormScreen/WebView/WebViewContext';
import Form from '../screens/FormScreen';
import Home from '../screens/HomeScreen';
import { RootStackParamList } from '../types/Types';
import { Alert, StyleSheet, TouchableOpacity, Image, Text, View } from 'react-native';

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
            headerLeftContainerStyle: {
              paddingLeft: 0,
              marginLeft: 0,
              },
            headerTitle: "",
            headerLeft: () => (
              <View style={styles.imageContainer}>
                <Image
                  source={LogoImageText}
                  style={styles.logoImageText}
                  resizeMode="contain"
                />
              </View>
            )
          }}
        />
        <Tab.Screen
          name="Form"
          component={Form}
          options={({ navigation }) => ({
            headerTitle: '',
            lazy: true, // Pre loads webview in the background. Currently not working on iOS beacuse of a bug.
            headerStyle: {
              backgroundColor: "#0e5873",
            },
            headerLeft: () => (
              <View style={styles.imageContainer}>
                <Image
                  source={LogoText}
                  style={styles.logoImage}
                  resizeMode="contain"
                />
              </View>
            ),
            headerRight: () => (
              <TouchableOpacity
                style={{ paddingHorizontal: 16 }}
                onPress={() => {
                  Alert.alert(
                    "Är du säker på att du vill avsluta?",
                    "Informationen du angett kommer inte sparas.",
                    [
                      { text: "Avbryt", style: "cancel" },
                      {
                        text: "OK",
                        onPress: () => {
                          reloadWebView();
                          navigation.navigate("Home");
                        },
                      },
                    ]
                  );
                }}
              >
                <Text style={styles.buttonText}>Avbryt</Text>
              </TouchableOpacity>
            ),
            headerBackVisible: false, // hide back arrow if needed
          })}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    paddingHorizontal: 16,
    height: "100%",
    justifyContent: "center",
  },
  logoImageText: {
    marginLeft: 0,
    maxHeight: '100%',
    width: 137,
    paddingVertical: 3,
    marginBottom: 8
  },
  logoImage: {
    width: 137,
    height: 12,
    maxHeight: '100%',
  },
  button: {
    width: 80,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 18,
    color: 'white',
  },
});

export default AppNavigator;
