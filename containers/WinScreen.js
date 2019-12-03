import React from 'react'
import {
  View,
  Text
} from 'react-native'

import styles from './Styles'

const WinScreen = () => {
  return (
    <View style={{ ...styles.container, backgroundColor: '#CCFFAA' , justifyContent: "center"}}>
      <Text style={styles.plaintext}>Victory Is YOURS!</Text>
    </View>
  )
}

export default WinScreen