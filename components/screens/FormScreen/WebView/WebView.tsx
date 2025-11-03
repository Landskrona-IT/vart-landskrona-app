import * as Linking from 'expo-linking';
import React, { useCallback } from 'react';
import { WebView as RNWebView } from 'react-native-webview';

import { useWebView } from './WebViewContext';

interface WebViewProps {
  url: string;
}

const WebView: React.FC<WebViewProps> = ({ url }) => {
  const { viewKey, webViewRef, updateCurrentStep, updateIsSubmitted } = useWebView();

  const injectedJavaScript = `
  (function() {
    let attempts = 0;
    const maxAttempts = 10;

    function tryInit() {
      attempts++;

      if (window.limeForms && typeof window.limeForms.getApi === 'function') {
        try {
          var formsApi = window.limeForms.getApi();
          console.log('[Injected] forms API Found!');

          formsApi.onStepChange((from, to) => {
            const navObject = { from, to };
            window.ReactNativeWebView.postMessage(JSON.stringify(navObject));
          });

          formsApi.onSubmitted(() => {
            const navObject = { submitted: true };
            window.ReactNativeWebView.postMessage(JSON.stringify(navObject));
          });

          console.log('[Injected] limeForms API initialized');
        } catch (err) {
          console.log('[Injected] Error initializing formsApi:', err);
          if (attempts < maxAttempts) {
            setTimeout(tryInit, 500);
          } else {
            console.log('[Injected] Gave up after', attempts, 'attempts');
          }
        }
      } else {
        if (attempts < maxAttempts) {
          console.log('[Injected] limeForms not ready, retrying...', attempts);
          setTimeout(tryInit, 500);
        } else {
          console.log('[Injected] Gave up after', attempts, 'attempts');
        }
      }
    }

    tryInit();
    true;
  })();
`;




  const handleMessage = (event: { nativeEvent: { data: string } }) => {
    const message = event.nativeEvent.data;
    const receivedObject = JSON.parse(message);

    if (typeof receivedObject === 'object') {
      if ('to' in receivedObject) {
        updateCurrentStep(receivedObject.to.index);
      }

      if ('submitted' in receivedObject && receivedObject.submitted === true) {
        updateIsSubmitted(true);
      }
    }
  };
  // Open clickable links in browser
  const handleShouldStartLoadWithRequest = (event: { url: string }) => {
    const { url: linkUrl } = event;

    if (url.startsWith('http') && linkUrl !== url) {
      Linking.openURL(linkUrl);
      return false;
    }

    return true;
  };

  // Inject JavaScript after the web content has loaded
  const onLoadEnd = useCallback(() => {
    if (webViewRef.current) {
      webViewRef.current.injectJavaScript(injectedJavaScript);
    }
  }, [webViewRef, injectedJavaScript]);

  return (
    <RNWebView
      key={viewKey}
      ref={webViewRef}
      originWhitelist={['*']}
      source={{
        uri: url
      }}
      javaScriptEnabled
      domStorageEnabled
      geolocationEnabled
      allowFileAccess
      allowUniversalAccessFromFileURLs
      cacheEnabled={false}
      allowsFullscreenVideo
      useWebView2={true}
      style={{
        flex: 1,
        backgroundColor: '#F4F0E9',
      }}
      onError={(syntheticEvent) => {
        const { nativeEvent } = syntheticEvent;
        console.warn('WebView error: ', nativeEvent);
      }}
      onHttpError={(syntheticEvent) => {
        const { nativeEvent } = syntheticEvent;
        console.warn(
          `HTTP error: ${nativeEvent.statusCode} on ${nativeEvent.url}`
        );
      }}
      onMessage={(event) => handleMessage(event)}
      onLoadEnd={onLoadEnd}
      setSupportMultipleWindows={false}
      onShouldStartLoadWithRequest={(event) => handleShouldStartLoadWithRequest(event)}
    />
  );
};

export default WebView;
