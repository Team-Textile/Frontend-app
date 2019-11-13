import React, { Component } from 'react'
import openSocket from "socket.io-client"

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
    console.log("PING")
    // this.setState({redirected: true})
    this.socket.emit("do stuff")
  }

  componentDidMount() {
    this.socket = openSocket("http://10.0.0.100:4000/")
    this.handlePing()
  }

  handlePing() {
    this.socket.on("do it", (data) => {
      console.log("PONG!", data)
    })
  }

  render() {
    const { title, redirected } = this.state
    return (
     <View style={styles.container}>
       {redirected && <Redirect to="/identity" />}
       <TextInput style={styles.input} placeholder="Game Title!" value={title} onChangeText={title => this.setState({title})} />
       <Button title="Create Lobby!" onPress={() => this.handleSubmit()}/>
     </View>
    )
  }
}

export default CreateGame