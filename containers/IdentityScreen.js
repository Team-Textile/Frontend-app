import openSocket from "socket.io-client"
import React from 'react'
import styles from './Styles'
import {
  View,
  Text,
  Image,
} from 'react-native'

import env from "../env"


import { Link } from "react-router-native"

class IdentityScreen extends React.Component {
  constructor(props) {
    super(props)
    const { lobbyId, username } = this.props.match.params
    this.state = {
      lobbyId,
      username,
      identity: '',
      redirect: false,
    }
  }

  componentDidMount() {
    const {lobbyId, username} = this.state
    this.socket = openSocket(env.BACKEND_CONNECTION)
    this.socket.emit("check identity", lobbyId, username)
    this.handleIdentity()
  }

  handleIdentity() {
    this.socket.on("give identity", user => {
      this.setState({ identity: user.roll })
    })
  }

  render() {
    return (
      <View style={{ ...styles.container, backgroundColor: this.state.identity==='wolf'? "#FEBEBE": '#ADE2FF' }}>
        <View>
          <Text style={styles.header}>You are a</Text>
          <Text style={{...styles.role, color: this.state.identity==='wolf'? "#B20000": '#002BC5'}}>{this.state.identity === "wolf"? "WereWolf" : "Villager"}</Text>
        </View>
        <Image source={require('../images/wolf.png')} style={{ width: 250, height: 250, marginTop: 20 }} />
        <View style={styles.buttonContainer}>
          <Text style={styles.plaintext}>{this.state.identity === "wolf"? "Try to Kill All the Villagers": "Try to survive the Werewolf attacks."}</Text>
        </View>
        <Link to={`/night/${this.state.lobbyId}/${this.state.username}`} ><Text>Continue</Text></Link>
      </View>
    )
  }

}

export default IdentityScreen