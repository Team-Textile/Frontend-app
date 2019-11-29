import React from 'react'
import openSocket from "socket.io-client"
import styles from './Styles'
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native'

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
    }
  }

  componentDidMount() {
    const { lobbyId, username } = this.state
    this.socket = openSocket(env.BACKEND_CONNECTION)
    this.socket.emit("check identity", lobbyId, username)
    this.handleIdentity()
    this.handlePlayers()
  }

  handleIdentity() {
    this.socket.on("give identity", identity => {
      if (identity === "wolf") {
        this.socket.emit("get players", this.state.lobbyId)
      }
      this.setState({ identity })
    })
  }

  handlePlayers() {
    this.socket.on('give players', (players) => {
      console.log(players)
      this.setState({ players })
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
    this.setState({players: []})
  }

  render() {
    return (
      <View style={{ ...styles.container, backgroundColor: '#434EB1' }}>
        <Image source={require('../images/moon.png')} style={{ width: 250, height: 250, marginTop: 20 }} />
        <View style={styles.voteButtonContainer}>
          {this.state.players.filter(player => !(player.username===this.state.username || player.roll=="wolf")).map(player => this.renderPlayer(player.username))}
        </View>
      </View>
    )
  }


}

export default NightScreen