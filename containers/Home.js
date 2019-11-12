import React from 'react'
import styles from './Styles'
import {
  View,
  Text,
  Image,
} from 'react-native'

import { Link } from "react-router-native"

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Werewolf</Text>
        <Image source={require('../images/wolf.png')} style={{ width: 250, height: 250, marginTop: 20 }} />
        <View style={styles.buttonContainer}>
          <Link style={styles.button} to="/identity"><Text style={styles.buttonText}>Host a Game</Text></Link>
          <Link style={styles.button} to="/" ><Text style={styles.buttonText}>Join a Game</Text></Link>
        </View>
      </View>
    )
  }

}

export default Home