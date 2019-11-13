import React from 'react'
import styles from './Styles'
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
} from 'react-native'

import { Link } from "react-router-native"

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: "",
      usernameConfirmed: false,
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Werewolf</Text>
        <Image source={require('../images/wolf.png')} style={{ width: 250, height: 250, marginTop: 20 }} />
        <View style={styles.buttonContainer}>
          {this.state.usernameConfirmed ?<>
            <Link style={styles.button} to="/create"><Text style={styles.buttonText}>Host a Game</Text></Link>
            <Link style={styles.button} to="/" ><Text style={styles.buttonText}>Join a Game</Text></Link>
              </>:<>
            <TextInput placeholder="Username" style={styles.input} value={this.state.username} onChangeText={username => this.setState({ username })} />
            <Button onPress={() => this.setState({ usernameConfirmed: true })} title="Confirm Username" />
              </>}
        </View>
      </View>

    )
  }

}

export default Home