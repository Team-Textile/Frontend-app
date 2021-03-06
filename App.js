import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, BackButton, } from "react-router-native";

import Home from './containers/Home'
import IdentityScreen from './containers/IdentityScreen'
import NightScreen from './containers/NightScreen'
import DayScreen from './containers/DayScreen'
import CreateGame from './containers/CreateGame';
import JoinGame from './containers/JoinGame';
import IdleLobby from './containers/IdleLobby'
import DeathScreen from './containers/DeathScreen'
import WinScreen from './containers/WinScreen'
import LossScreen from './containers/LossScreen';



export default function App() {
  const [username, updateUsername] = useState('')
  // const [lobbyId, updateLobbyId] = useState('')
  return (
    <NativeRouter>
      <View style={styles.container}>
        <BackButton />
        <Route exact path='/' render={() => <Home updateUsername={updateUsername} username={username} />} />
        <Route exact path='/idle/:lobbyId/:username' component={IdleLobby} />
        <Route exact path='/identity/:lobbyId/:username' component={IdentityScreen} />
        <Route exact path='/create' render={() => <CreateGame username={username}  /> } />
        <Route exact path='/join' render={() => <JoinGame username={username}  /> } />
        <Route exact path='/night/:lobbyId/:username' component={NightScreen} />
        <Route exact path='/day/:lobbyId/:username' component={DayScreen} />
        <Route exact path='/hung' render={() => <DeathScreen type="hung"/>} />
        <Route exact path='/eaten' render={() => <DeathScreen type="eaten"/>} />
        <Route exact path='/win' component={WinScreen} />
        <Route exact path='/loss' component={LossScreen} />
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
