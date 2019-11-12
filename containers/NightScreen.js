import React from 'react'
import styles from './Styles'
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native'

class NightScreen extends React.Component {
  render() {
    return (
      <View style={{...styles.container, backgroundColor: '#434EB1'}}>
        <Image source={require('../images/moon.png')} style={{ width: 250, height: 250, marginTop: 20 }} />
        <View style={styles.voteButtonContainer}>
          <View style={styles.voteContainer}>
            <Text style={styles.voteText}>UserName</Text>
            <TouchableOpacity style={styles.voteButton}>
              <Text style={styles.voteText}>Vote</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.voteContainer}>
            <Text style={styles.voteText}>UserName</Text>
            <TouchableOpacity style={styles.voteButton}>
              <Text style={styles.voteText}>Vote</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.voteContainer}>
            <Text style={styles.voteText}>UserName</Text>
            <TouchableOpacity style={styles.voteButton}>
              <Text style={styles.voteText}>Vote</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }


}

export default NightScreen