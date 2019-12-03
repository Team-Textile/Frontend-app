import React from 'react'
import styles from './Styles'
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity
} from 'react-native'

import { Link, Redirect } from "react-router-native"

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: props.username,
      usernameConfirmed: !!props.username,
    }
    
  }

  

  handlePress() {
    this.props.updateUsername(this.state.username)
    this.setState({usernameConfirmed: true})
  }

  changeUsername() {
    this.setState({usernameConfirmed: false})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Werewolf</Text>
    {this.state.usernameConfirmed && <Text style={styles.plaintext}>Welcome, {this.state.username}</Text>}
        <Image source={require('../images/wolf.png')} style={{ width: 200, height: 200, marginTop: 20 }} />
        <View style={styles.buttonContainer}>
          {this.state.usernameConfirmed ?<>
            <Link style={styles.button} to="/create"><Text style={styles.buttonText}>Host a Game</Text></Link>
            <Link style={styles.button} to="/join" ><Text style={styles.buttonText}>Join a Game</Text></Link>
            <TouchableOpacity style={{...styles.button, width:"85%"}} onPress={this.changeUsername.bind(this)}><Text style={styles.buttonText}>Change Name</Text></TouchableOpacity>
              </>:<>
            <TextInput placeholder="Username" style={styles.input} value={this.state.username} onChangeText={username => this.setState({ username })} />
            <Button onPress={() => this.handlePress()} title="Confirm Username" />
              </>}
        </View>
      </View>

    )
  }

}

export default Home