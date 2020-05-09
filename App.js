import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './Screens/Navigation/Navigation';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux'
import store from './Screens/store';

export default function App() {
  return (
    <Provider store ={store}>
        <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
