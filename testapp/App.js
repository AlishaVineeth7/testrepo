/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import MainStackNavigator from './app/components/AuthLoading';

function App() {

  return (
  <MainStackNavigator/>
  );
}

export default App;
