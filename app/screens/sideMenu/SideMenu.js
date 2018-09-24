import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  Linking,
  AsyncStorage
} from 'react-native'
import { DrawerActions } from 'react-navigation'
import { connect } from 'react-redux'
import { logout } from '@actions/UserActions'
import * as theme from '../../utils/Theme'

class SideMenu extends Component {
  onLogout = async () => {
    this.props.onLogout()
    await AsyncStorage.multiRemove(['token'])
    this.props.navigation.navigate('Main')
  }
  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <Text
          style={styles.text}
          onPress={() => this.props.navigation.navigate('Home')}
        >
          Home
        </Text>
        <Text
          style={styles.text}
          onPress={() => this.props.navigation.navigate('TransactionHistory')}
        >
          Transaction History
        </Text>
        <Text
          style={styles.text}
          onPress={() => Linking.openURL('whatsapp://send?phone=2348141224609')}
        >
          Chat with customer care
        </Text>
        <Text style={styles.text} onPress={() => this.onLogout()}>
          Logout
        </Text>
        <Text style={[styles.text, styles.bottomAlign]}>
          Terms and Conditions
        </Text>
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}
        >
          <Text style={styles.button}>Close</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onLogout: () => dispatch(logout())
})

export default connect(
  null,
  mapDispatchToProps
)(SideMenu)

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    fontFamily: 'Baskerville',
    alignSelf: 'flex-start',
    padding: 10
  },
  button: {
    margin: 16,
    color: theme.colors.orange,
    fontSize: 16
  },
  bottomAlign: { position: 'absolute', bottom: 0, alignSelf: 'center' }
}
