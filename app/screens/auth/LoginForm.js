import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { Text, View } from 'react-native-animatable'

import CustomButton from '@components/auth/CustomButton'
import CustomTextInput from '@components/auth/CustomTextInput'
import Styles from './AuthStyle';

export default class LoginForm extends Component {
  // static propTypes = {
  //   isLoading: PropTypes.bool.isRequired,
  //   onLoginPress: PropTypes.func.isRequired,
  //   onSignupLinkPress: PropTypes.func.isRequired
  // }

  state = {
    phoneNumber: '',
    password: ''
  }

  hideForm = async () => {
    if (this.buttonRef && this.formRef && this.linkRef) {
      await Promise.all([
        this.buttonRef.zoomOut(200),
        this.formRef.fadeOut(300),
        this.linkRef.fadeOut(300)
      ])
    }
  }

  render () {
    const { phoneNumber, password } = this.state
    const { isLoading, onSignupLinkPress, onLoginPress } = this.props
    const isValid = phoneNumber !== '' && password !== ''
    return (
      <View style={Styles.InputFormContainer}>
        <View style={Styles.InputFormForm} ref={(ref) => { this.formRef = ref }}>
          <CustomTextInput
            name={'phoneNumber'}
            ref={(ref) => this.mobileInputRef = ref}
            placeholder={'Mobile Number'}
            keyboardType={'numeric'}
            editable={!isLoading}
            returnKeyType={'next'}
            blurOnSubmit={false}
            withRef={true}
            onSubmitEditing={() => this.passwordInputRef.focus()}
            onChangeText={(value) => this.setState({ phoneNumber: value })}
            isEnabled={!isLoading}
          />
          <CustomTextInput
            name={'password'}
            ref={(ref) => this.passwordInputRef = ref}
            placeholder={'Password'}
            editable={!isLoading}
            returnKeyType={'done'}
            secureTextEntry={true}
            withRef={true}
            onChangeText={(value) => this.setState({ password: value })}
            isEnabled={!isLoading}
          />
        </View>
        <View style={Styles.InputFormFooter}>
          <View ref={(ref) => this.buttonRef = ref} animation={'bounceIn'} duration={600} delay={400}>
            <CustomButton
              onPress={() => onLoginPress(phoneNumber, password)}
              isEnabled={isValid}
              isLoading={isLoading}
              buttonStyle={Styles.InputFormAccoutButton}
              textStyle={Styles.InputFormAccountButtonText}
              text={'Log In'}
            />
          </View>
          <Text
            ref={(ref) => this.linkRef = ref}
            style={Styles.InputFormAccountLink}
            onPress={onSignupLinkPress}
            animation={'fadeIn'}
            duration={600}
            delay={400}
          >
            {'Not registered yet?'}
          </Text>
        </View>
      </View>
    )
  }
}
