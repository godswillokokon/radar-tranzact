import React, { Component } from 'react'
import { Text, View, AsyncStorage, ActivityIndicator } from 'react-native'
import { AppLoading } from 'expo'
import Axios from '@utils/Axios'
import DropdownAlert from 'react-native-dropdownalert'
import { connect } from 'react-redux'
import get from 'lodash/get'
import { login, resetFailureAction, createAccount } from '@actions/UserActions'
import { BASE_URL } from '@constants/BaseUrl'
import Home from './home'
import AuthScreen from './auth'

class Main extends Component {
  state = {
    isLoggedIn: false,
    isLoading: false,
    isAppReady: false,
    authError: null,
    authReady: false,
    tokenValidity: null
  }

  async componentDidMount() {
    const checkForToken = await AsyncStorage.getItem('token')
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.auth.authError !== prevState.authError) {
      return { authError: nextProps.auth.authError }
    }
    return null
  }

  async componentDidUpdate(prevProps, prevState) {
    if (get(prevProps.auth, 'token') !== get(this.props.auth, 'token')) {
      console.log(this.props.auth)
      setTimeout(
        () => this.setState({ isLoggedIn: true, isLoading: false }),
        1000
      )
      await AsyncStorage.multiSet([
        ['token', get(this.props.auth, 'token.token.accessToken')],
        ['user',
        get(this.props.auth, 'token.user.id')]]
      )
      return setTimeout(() => this.props.navigation.navigate('Home'), 2300)
    } else if (prevProps.auth.authError !== this.props.auth.authError) {
      this._onError(this.props.auth.authError)
      this.setState({ isLoading: false })
    }
  }

  _onError = error => {
    if (error) {
      this.dropdown.alertWithType('error', 'Error', error)
    }
  }

  _simulateLogin = (mobile, password) => {
    this.setState({ isLoading: true })
    this.props.onLogin({ mobile, password })
  }

  _simulateSignup = (mobile, password, confirmPassword) => {
    this.setState({ isLoading: true })
    this.props.onSignUp({ mobile, password, confirmPassword })
  }

  onClose(data) {
    this.props.resetFailureAction()
  }

  getTokenValidity = async () => {
    try {
      const multiGetKeys = await AsyncStorage.multiGet(['token', 'user']);
      const response = await Axios.get(`/users/${multiGetKeys[1][1]}/verifyUser`)
      return this.setState({
        tokenValidity: response.status
      })
    } catch (e) {
      // console.log(e, e.response);
    }
  }

  routeToRightView(data) {
    if (this.state.tokenValidity === 200 || this.state.tokenValidity === 201) {
      this.props.navigation.navigate('Home')
    } else {
      this.setState({ authReady: true })
    }
  }

  render() {
    if (this.state.authReady) {
      if (this.state.isAppReady) {
        return (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <AppLoading />
            <ActivityIndicator size={'large'} />
          </View>
        )
      } else {
        return (
          <View style={{ flex: 1 }}>
            <AuthScreen
              login={this._simulateLogin}
              signup={this._simulateSignup}
              isLoggedIn={this.state.isLoggedIn}
              isLoading={this.state.isLoading}
              onLoginAnimationCompleted={() =>
                this.setState({ isAppReady: true })
              }
            />
            <DropdownAlert
              ref={ref => (this.dropdown = ref)}
              onClose={data => this.onClose(data)}
            />
          </View>
        )
      }
    } else {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <AppLoading
            startAsync={() => this.getTokenValidity()}
            onFinish={() => this.routeToRightView()}
            onError={console.warn}
          />
          <ActivityIndicator size={'large'} />
        </View>
      )
    }
  }
}

const mapStateToProps = ({ user }) => ({
  auth: user
})

const mapDispatchToProps = dispatch => ({
  onLogin: data => dispatch(login(data)),
  onSignUp: data => dispatch(createAccount(data)),
  resetFailureAction: () => dispatch(resetFailureAction())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
