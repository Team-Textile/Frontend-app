import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route } from "react-router-native";

import Home from './containers/Home'
import IdentityScreen from './containers/IdentityScreen'
import NightScreen from './containers/NightScreen'
import CreateGame from './containers/CreateGame';
import JoinGame from './containers/JoinGame';
import IdleLobby from './containers/IdleLobby'




export default function App() {
  const [username, updateUsername] = useState('')
  // const [lobbyId, updateLobbyId] = useState('')
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Route exact path='/' render={() => <Home updateUsername={updateUsername} />} />
        <Route exact path='/idle/:lobbyId/:username' component={IdleLobby} />
        <Route exact path='/identity' component={IdentityScreen} />
        <Route exact path='/create' render={() => <CreateGame username={username}  /> } />
        <Route exact path='/join' render={() => <JoinGame username={username}  /> } />
        <Route exact path='/Night' component={NightScreen} />
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
