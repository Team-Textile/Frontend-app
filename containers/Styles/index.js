import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  applicationView: {
    flex: 1
  },
  container: {
    flex: 1,
    paddingTop: 50,
    paddingBottom: 100,
    backgroundColor: '#EBEBEB',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  voteButtonContainer: {
    justifyContent: 'space-around',
    height: '35%'
  },
  voteContainer: {
    backgroundColor: '#DDDDDD',
    padding: 5,
    flexDirection: 'row',
    width: '75%',
    justifyContent: 'space-around',
    borderRadius: 5
  },
  voteButton: {
    borderRadius: 5,
    backgroundColor: '#C4C4C4'
  },
  voteText: {
    fontSize: 25
  },
  header:{
    fontSize: 50,
    alignItems: 'center'
  },
  role: {
    color: '#002BC5',
    alignSelf: 'center',
    fontSize: 55,
    fontWeight: 'bold'
  },
  plaintext: {
    fontSize: 25
  },
  buttonContainer: {
    width: '80%',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#4E97ED',
    height: 60,
    width: '85%',
    borderRadius: 20, 
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 30,
  },
  input: {
    height: 30,
    width: '85%',
    borderWidth: 2,
    borderColor: '#DDDDDD',
    borderRadius: 5,
    margin: 20,
  }
})

export default styles
