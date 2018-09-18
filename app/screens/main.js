import React, { Component } from "react";
import { Text, View, AsyncStorage, ActivityIndicator } from "react-native";
import { AppLoading } from "expo";
import axios from "axios";
import DropdownAlert from "react-native-dropdownalert";
import { connect } from "react-redux";
import get from "lodash/get";
import { login, resetFailureAction, createAccount } from "@actions/UserActions";
import { BASE_URL } from "@constants/BaseUrl";
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
    console.log(checkForToken);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.auth.authError !== prevState.authError) {
      return { authError: nextProps.auth.authError };
    }
    return null;
  }

  async componentDidUpdate(prevProps, prevState) {
    if (
      get(prevProps.auth, "token.data") !== get(this.props.auth, "token.data")
    ) {
      setTimeout(
        () => this.setState({ isLoggedIn: true, isLoading: false }),
        1000
      );
      await AsyncStorage.setItem("token", get(this.props.auth, "token.data"));
      return setTimeout(() => this.props.navigation.navigate("Home"), 2300);
    } else if (prevProps.auth.authError !== this.props.auth.authError) {
      this._onError(this.props.auth.authError);
      this.setState({ isLoading: false });
    }
  }

  _onError = error => {
    if (error) {
      this.dropdown.alertWithType("error", "Error", error);
    }
  };

  _simulateLogin = (phoneNumber, password) => {
    this.setState({ isLoading: true });
    this.props.onLogin({ phoneNumber, password });
  };

  _simulateSignup = (phoneNumber, password, confirmPassword) => {
    this.setState({ isLoading: true });
    this.props.onSignUp({ phoneNumber, password, confirmPassword})
  };

  onClose(data) {
    this.props.resetFailureAction();
  }

  getTokenValidity = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      const response = await axios.get(`${BASE_URL}/verifyUser`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      console.log(response);
      return this.setState({
        tokenValidity: response.status
      });
    } catch (e) {
      console.log(e);
    }
  };

  routeToRightView(data) {
    if (this.state.tokenValidity === 200) {
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
              onClose={data => this.onClose(data)}
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
  onSignUp: data => dispatch(createAccount(data)),
  resetFailureAction: () => dispatch(resetFailureAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
