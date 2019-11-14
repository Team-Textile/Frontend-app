import openSocket from "socket.io-client"
import React from 'react'
import styles from './Styles'
import {
  View,
  Text,
  Image,
} from 'react-native'

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
    this.socket = openSocket("http://10.0.0.100:4000/")
    this.socket.emit("check identity", lobbyId, username)
    this.handleIdentity()
  }

  handleIdentity() {
    this.socket.on("give identity", identity => {
      this.setState({ identity })
    })
  }

  render() {
    return (
      <View style={{ ...styles.container, backgroundColor: '#ADE2FF' }}>
        <View>
          <Text style={styles.header}>You are a</Text>
          <Text style={styles.role}>{this.state.identity}</Text>
        </View>
        <Image source={require('../images/wolf.png')} style={{ width: 250, height: 250, marginTop: 20 }} />
        <View style={styles.buttonContainer}>
          <Text style={styles.plaintext}>Try to survive the Werewolf attacks.</Text>
        </View>
        <Link to='/night' ><Text>TEMP</Text></Link>
      </View>
    )
  }

}

export default IdentityScreen