import React, { Component } from 'react'
import openSocket from "socket.io-client"

import env from "../.env"

import { View, Text, Button, TextInput } from 'react-native'
import styles from './Styles'

import { Redirect } from 'react-router-native'

class CreateGame extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      redirected: false,
    }
  }

  handleSubmit() {
    this.socket.emit("create lobby", this.state.title, this.props.username)
    // this.props.updateLobbyId(this.state.title)
    this.setState({redirected: true})
  }

  componentDidMount() {
    this.socket = openSocket(env.BACKEND_CONNECTION)
  }


  render() {
    const { title, redirected } = this.state
    return (
     <View style={styles.container}>
       {redirected && <Redirect to={`/idle/${title}/${this.props.username}`} />}
       <Text style={styles.header}>Create Game!</Text>
       <TextInput style={styles.input} placeholder="Game Title!" value={title} onChangeText={title => this.setState({title})} />
       <Button title="Create Lobby!" onPress={() => this.handleSubmit()}/>
     </View>
    )
  }
}

export default CreateGame