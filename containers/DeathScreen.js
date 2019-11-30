import React from 'react'
import {
  Text,
  View,
  Image
} from 'react-native'

import styles from './Styles'

const DeathScreen = (props) => {
  return (
    <View style={{ ...styles.container, backgroundColor: '#B20000' }}>
      <Image source={props.type==="hung" ? require('../images/noose.png') : require('../images/wolf.png')} style={{ width: 250, height: 250, marginTop: 20 }} />
      <Text>{props.type==="hung" ? "The villagers Decided to Hang You" : "A wolf mercilessly tore into you" }</Text>
    </View>
  )
}

export default DeathScreen