import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route } from "react-router-native";

import Home from './containers/Home'
import IdentityScreen from './containers/IdentityScreen'

export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Route exact path='/' component={Home} />
        <Route exact path='/identity' component={IdentityScreen} />
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
