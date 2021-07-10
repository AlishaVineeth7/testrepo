
import * as React from 'react';
import {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/homeScreen/HomeScreen';
import DetailScreen from '../screens/detailScreen/DetailScreen';
import { NavigationContainer } from '@react-navigation/native';
import NetInfo from "@react-native-community/netinfo";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

function HomeStackNavigator() {
    return (
      <Stack.Navigator initialRouteName="HomeScreen" headerMode="none">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
      </Stack.Navigator>
    );
  }
  
 function MainStackNavigator({navigation}){

      return(
          <NavigationContainer>
          <HomeStackNavigator/>
          </NavigationContainer>
      )
  }

  export default MainStackNavigator;