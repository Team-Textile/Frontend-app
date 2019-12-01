import React from 'react'
import {
  View,
  Text
} from 'react-native'

import styles from './Styles'

const WinScreen = () => {
  return (
    <View style={{ ...styles.container, backgroundColor: '#004400' }}>
      <Text>Victory Is YOURS!</Text>
    </View>
  )
}

export default WinScreen