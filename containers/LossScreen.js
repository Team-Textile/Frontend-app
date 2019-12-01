import React from 'react'
import {
  View,
  Text
} from 'react-native'

import styles from './Styles'

const LossScreen = () => {
  return (
    <View style={{ ...styles.container, backgroundColor: '#440000' }}>
      <Text>Bitter Defeat</Text>
    </View>
  )
}

export default LossScreen