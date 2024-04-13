/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './src/navigation/RootStack';
import Toast from 'react-native-toast-message';
import { toastConfig } from './src/config/ToastMessage';
import './src/config/GoogleServices';

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
      <Toast config={toastConfig} visibilityTime={3000} />
    </NavigationContainer>
  );
}
