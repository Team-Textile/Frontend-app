import React from 'react'
import {
  View,
  Text
} from 'react-native'

import styles from './Styles'

const LossScreen = () => {
  return (
    <View style={{ ...styles.container, backgroundColor: '#FFAAAA' , justifyContent: "center"}}>
      <Text style={styles.plaintext}>Bitter Defeat</Text>
    </View>
  )
}

export default LossScreen