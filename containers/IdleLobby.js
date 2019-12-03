import openSocket from "socket.io-client"
import React, { Component } from 'react'
import styles from './Styles'

import env from "../env"

import { View, Text, FlatList, Button } from 'react-native'

import { Redirect } from 'react-router-native'

class IdleLobby extends Component {
  constructor(props) {
    super(props)
    const { lobbyId, username } = this.props.match.params
    this.state = {
      lobbyId,
      username,
      players: [],
      owner: false,
      redirect: false,
    }
  }

  componentDidMount() {
    const { username, lobbyId } = this.state
    this.socket = openSocket(env.BACKEND_CONNECTION)
    this.socket.emit("join lobby", lobbyId, username)
    this.handleJoin()
    this.handleIdentity()
  }

  handleJoin() {
    this.socket.on("update players", (players) => {
      owner = players.reduce((reducer, player) => player.username === this.state.username ? player.owner : reducer, false)
      this.setState({ players, owner })
    })
  }

  handleIdentity() {
    this.socket.on("show identity", () => {
      this.setState({ redirect: true })
    })
  }

  startGame() {
    const { lobbyId, } = this.state
    this.socket.emit("start game", (lobbyId))
  }

  drawUser({ item }) {
    return (
      <View style={styles.playerContainer}>
        <Text style={styles.playerText}>{item.username} {item.owner? "| Owner" : "| Villager?"}</Text>
      </View>
    )
  }

  render() {
    const { username, lobbyId, redirect } = this.state

    return (
      <View style={styles.container}>
        {redirect && <Redirect to={`/identity/${lobbyId}/${username}`} />}
        <Text style={styles.header}>Players!</Text>
        <FlatList
          contentContainerStyle={{alignItems: "center"}}
          data={this.state.players}
          renderItem={this.drawUser}
          keyExtractor={item => `${item.username}-${item.roll}`}
        />
        {this.state.owner && <Button title="Start!" onPress={() => this.startGame()} />}
      </View>
    )
  }
}

export default IdleLobby