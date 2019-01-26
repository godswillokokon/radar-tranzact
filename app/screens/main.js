import React, { Component } from "react";
import { Text, View, AsyncStorage, ActivityIndicator } from "react-native";
import { AppLoading } from "expo";
import Axios from "@utils/Axios";
import jwt_decode from "jwt-decode";
import DropdownAlert from "react-native-dropdownalert";
import { connect } from "react-redux";
import get from "lodash/get";
import Session from "@utils/Session"
import {
  login,
  resetFailureAction,
  createAccount,
  refreshAuthentication,
  GetUserData,
  logout
} from "@actions/UserActions";
import Home from "./home";
import AuthScreen from "./auth";

class Main extends Component {
  state = {
    isLoggedIn: false,
    isLoading: false,
    isAppReady: false,
    authError: null,
    authReady: false,
    tokenValidity: null
  };

  async componentDidMount() {
    const checkForToken = await AsyncStorage.getItem("token");
    this.loadAsync().then(token => {
      // this.setState({ isLoggedIn: true, isLoading: false })
      if (token) {
        // Decode token and get user info and exp
        const decoded = jwt_decode(token);
        const currentTime = Date.now() / 1000; // to get in milliseconds
        if (decoded.exp < currentTime) {
          // Logout user
          this.logout();
          return;
        }

        this.props.refreshAuthentication(token);
      }
    });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.auth.authError !== prevState.authError) {
      return { authError: nextProps.auth.authError };
    }
    return null;
  }

  async componentDidUpdate(prevProps, prevState) {
    if (get(prevProps.auth, "token") !== get(this.props.auth, "token")) {
      return this.props.navigation.navigate("Home");
    } else if (prevProps.auth.authError !== this.props.auth.authError) {
      this._onError(this.props.auth.authError);
      this.setState({ isLoading: false });
    }
  }

  loadAsync = async () => {
    //load all required info
    //user info, auth state..etc
    const getToken = await Session.getData("token");
    if (getToken) {
      await this.props.getUser(getToken);
    }
    return getToken;
  };


  logout = async () => {
    this.props.refreshAuthentication(null);
    this.props.onLogout()
    await AsyncStorage.multiRemove(['token'])
    this.props.navigation.navigate('Main')
  };

  _onError = error => {
    if (error) {
      this.dropdown.alertWithType("error", "Error", error);
    }
  };

  _simulateLogin = (mobile, password) => {
    this.setState({ isLoading: true });
    this.props.onLogin({ mobile, password });
  };

  _simulateSignup = (mobile, password, confirmPassword) => {
    this.setState({ isLoading: true });
    this.props.onSignUp({ mobile, password, confirmPassword });
  };

  onAlertClose(data) {
    this.props.resetFailureAction();
  }

  getTokenValidity = async () => {
    try {
      const multiGetKeys = await AsyncStorage.multiGet(["token", "user"]);
      const user = multiGetKeys[1][1] ? parse(multiGetKeys[1][1]) : null
      const response = await Axios.get(
        `/users/${user.id}/verifyUser`
      );
      return this.setState({
        tokenValidity: response.status
      });
    } catch (e) {
      // console.log(e, e.response);
    }
  };

  routeToRightView(data) {
    if (this.state.tokenValidity === 200 || this.state.tokenValidity === 201) {
      this.props.navigation.navigate("Home");
    } else {
      this.setState({ authReady: true });
    }
  }

  render() {
    if (this.state.authReady) {
      if (this.state.isAppReady) {
        return (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <AppLoading />
            <ActivityIndicator size={"large"} />
          </View>
        );
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
              onClose={data => this.onAlertClose(data)}
            />
          </View>
        );
      }
    } else {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <AppLoading
            startAsync={() => this.getTokenValidity()}
            onFinish={() => this.routeToRightView()}
            onError={console.warn}
          />
          <ActivityIndicator size={"large"} />
        </View>
      );
    }
  }
}

const mapStateToProps = ({ user }) => ({
  auth: user
});

const mapDispatchToProps = dispatch => ({
  onLogin: data => dispatch(login(data)),
  onLogout: () => dispatch(logout()),
  onSignUp: data => dispatch(createAccount(data)),
  resetFailureAction: () => dispatch(resetFailureAction()),
  getUser: token => dispatch(GetUserData(token)),
  refreshAuthentication: token => dispatch(refreshAuthentication(token))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
