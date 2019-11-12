import React from 'react'
import styles from './Styles'
import {
  View,
  Text,
  Image,
} from 'react-native'

import { Link } from "react-router-native"

class IdentityScreen extends React.Component{
  render() {
    return (
      <View style={{...styles.container, backgroundColor: '#ADE2FF'}}>
        <View>
          <Text style={styles.header}>You are a</Text>
          <Text style={styles.role}>Villager</Text>
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