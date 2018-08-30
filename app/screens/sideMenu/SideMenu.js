import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Linking } from 'react-native';
import { DrawerActions } from 'react-navigation';
import * as theme from '../../utils/Theme';

export default class SideMenu extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Transaction History</Text>
        <Text style={styles.text} onPress={() => Linking.openURL('whatsapp://send?phone=2348141224609')}>Chat with a staff</Text>
        <Text style={styles.text}>Terms and Conditions</Text>
        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}>
          <Text style={styles.button}>Close</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
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
    fontSize: 16,
  },
};
