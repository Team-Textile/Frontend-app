import openSocket from "socket.io-client"
import React, { Component } from 'react'
import styles from './Styles'

import { View, Text, FlatList, Button } from 'react-native'

class IdleLobby extends Component {
  constructor(props) {
    super(props)
    const { lobbyId, username } = this.props.match.params
    this.state = {
      lobbyId,
      username,
      players: [],
      owner: false
    }
  }

  componentDidMount() {
    const {username, lobbyId} = this.state
    this.socket = openSocket("http://10.0.0.100:4000/")
    this.socket.emit("join lobby", lobbyId, username)
    this.handleJoin()
  }

  handleJoin() {
    this.socket.on("update players", (players) => {
      owner = players.reduce((reducer, player) => player.username === this.state.username? player.owner : reducer, false)
      this.setState({ players, owner })
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Players!</Text>
        <FlatList 
        data={this.state.players}
        renderItem={({item}) => <Text>{item.username}</Text>}
        keyExtractor={item => `${item.username}-${item.roll}`}
        />
      {this.state.owner && <Button title="Start!" onPress={console.log("Woo")}/>}
      </View>
    )
  }
}

export default IdleLobby