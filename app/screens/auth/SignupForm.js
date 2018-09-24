import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { Text, View } from 'react-native-animatable'

import CustomButton from '@components/auth/CustomButton'
import CustomTextInput from '@components/auth/CustomTextInput'
import Styles from './AuthStyle';


export default class SignupForm extends Component {
  // static propTypes = {
  //   isLoading: PropTypes.bool.isRequired,
  //   onSignupPress: PropTypes.func.isRequired,
  //   onLoginLinkPress: PropTypes.func.isRequired
  // }

  state = {
    mobile: '',
    password: '',
    confirmPassword: ''
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
    const { mobile, password, confirmPassword } = this.state
    const { isLoading, onLoginLinkPress, onSignupPress } = this.props
    const isValid = mobile !== '' && password !== '' && confirmPassword !== ''
    return (
      <View style={Styles.InputFormContainer}>
        <View style={Styles.InputFormForm} ref={(ref) => this.formRef = ref}>
          <CustomTextInput
            ref={(ref) => this.mobileInputRef = ref}
            placeholder={'Mobile Number'}
            keyboardType={'numeric'}
            editable={!isLoading}
            returnKeyType={'next'}
            blurOnSubmit={false}
            withRef={true}
            onSubmitEditing={() => this.passwordInputRef.focus()}
            onChangeText={(value) => this.setState({ mobile: value })}
            isEnabled={!isLoading}
          />
          <CustomTextInput
            ref={(ref) => this.passwordInputRef = ref}
            placeholder={'Password'}
            editable={!isLoading}
            returnKeyType={'next'}
            secureTextEntry={true}
            withRef={true}
            onSubmitEditing={() => this.confirmPasswordInputRef.focus()}
            onChangeText={(value) => this.setState({ password: value })}
            isEnabled={!isLoading}
          />

          <CustomTextInput
            ref={(ref) => this.confirmPasswordInputRef = ref}
            placeholder={'Confirm Password'}
            editable={!isLoading}
            returnKeyType={'done'}
            secureTextEntry={true}
            withRef={true}
            onChangeText={(value) => this.setState({ confirmPassword: value })}
            isEnabled={!isLoading}
          />
        </View>
        <View style={Styles.InputFormFooter}>
          <View ref={(ref) => this.buttonRef = ref} animation={'bounceIn'} duration={600} delay={400}>
            <CustomButton
              onPress={() => onSignupPress(mobile, password, confirmPassword)}
              isEnabled={isValid}
              isLoading={isLoading}
              buttonStyle={Styles.InputFormAccoutButton}
              textStyle={Styles.InputFormAccountButtonText}
              text={'Create Account'}
            />
          </View>
          <Text
            ref={(ref) => this.linkRef = ref}
            style={Styles.InputFormAccountLink}
            onPress={onLoginLinkPress}
            animation={'fadeIn'}
            duration={600}
            delay={400}
          >
            {'Already have an account?'}
          </Text>
        </View>
      </View>
    )
  }
}
