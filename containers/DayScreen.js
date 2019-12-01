import React from 'react'
import openSocket from "socket.io-client"
import styles from './Styles'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native'

import { Redirect } from "react-router-native"


import env from "../env"


class NightScreen extends React.Component {
  constructor(props) {
    super(props)
    const { lobbyId, username } = this.props.match.params
    this.state = {
      lobbyId,
      username,
      identity: '',
      redirect: false,
      players: [],
      dead: false,
      win: false,
      loss: false,
    }
  }

  componentDidMount() {
    const { lobbyId, username } = this.state
    this.socket = openSocket(env.BACKEND_CONNECTION)
    this.socket.emit("check identity", lobbyId, username)
    this.handleIdentity()
    this.handlePlayers()
    this.handleTimeshift()
    this.handleWin()
  }

  handleWin() {
    this.socket.on("wolves win", (identity) => {
      console.log("w", identity)
      if (identity === "wolf") {
        this.setState({win: true})
      }
      else {
        this.setState({loss: true})
      }
    })

    this.socket.on("villagers win", (identity) => {
      console.log("v", identity)
      if (identity === "wolf") {
        this.setState({loss: true})
      }
      else {
        this.setState({win: true})
      }
    })
  }

  

  handleIdentity() {
    const { lobbyId, username } = this.state
    this.socket.on("give identity", player => {
      if(!player.alive) {
        this.setState({dead: true})
      }
      this.socket.emit("get players", this.state.lobbyId)
      this.setState({ identity: player.roll })
      this.socket.emit("check win", lobbyId, username)
    })
  }

  handlePlayers() {
    this.socket.on('give players', (players) => {
      this.setState({ players })
    })
  }

  handleTimeshift() {
    this.socket.on("update time", (time) => {
      if (time === "night") {
        this.setState({ redirect: true })
      }
    })
  }

  renderPlayer(username) {
    return (
      <View key={username} style={styles.voteContainer}>
        <Text style={styles.voteText}>{username}</Text>
        <TouchableOpacity onPress={() => this.vote(username)} style={styles.voteButton}>
          <Text style={styles.voteText}>Vote</Text>
        </TouchableOpacity>
      </View>
    )
  }

  vote(username) {
    this.socket.emit("vote", this.state.lobbyId, this.state.username, username)
  }

  render() {
    return (
      <View style={{ ...styles.container, backgroundColor: '#6599FE' }}>
        {this.state.redirect && <Redirect to={`/night/${this.state.lobbyId}/${this.state.username}`} />}
        {this.state.dead && <Redirect to={`/eaten`} />}
        {this.state.win && <Redirect to={`/win`} />}
        {this.state.loss && <Redirect to={`/loss`} />}
        <Image source={require('../images/sun.png')} style={{ width: 250, height: 250, marginTop: 20 }} />
        <View style={styles.voteButtonContainer}>
          {this.state.players.filter(player => player.username !== this.state.username).map(player => this.renderPlayer(player.username))}
        </View>
      </View>
    )
  }


}

export default NightScreen