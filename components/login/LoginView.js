import React from 'react'
import {
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native'

import PropTypes from 'prop-types'
import { Provider, connect } from 'react-redux'
import { reduxStore } from '../../redux/store'

import Message from './message'

const styles = require('./style')

class LoginView extends React.Component {
  // constructor(props) {
  //   super(props)
  //   state = {
  //     email: '',
  //     password: ''
  //   }
  // }

  static get propTypes() {
    return {
      children: PropTypes.any,
      dispatch: PropTypes.any,
      login: PropTypes.object
    }
  }

  state = {
    email: '',
    password: ''
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = async event => {
    event.preventDefault()

    const payload = {
      email: this.state.email,
      password: this.state.password
    }

    this.props.dispatch({
      type: 'LOGIN',
      payload: {
        login: payload
      }
    })
  }

  onClickListener = viewId => {
    Alert.alert('Alert', `Button Pressed ${viewId}`)
  }

  render() {
    return (
      <Provider store={reduxStore}>
        <View style={styles.container}>
          <Text style={styles.textPrompt}>&#62;&#95;</Text>
          <Text style={styles.textBlvck}>BLVCK</Text>

          <View style={styles.inputContainer}>
            {/* email input */}
            <Image
              style={styles.inputIcon}
              source={{
                uri: 'http://grfx.cstv.com/story-nav/icon-mail2.png'
              }}
            />
            <TextInput
              style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid="transparent"
              onChangeText={this.handleChange}
            />
          </View>

          {/* password input */}
          <View style={styles.inputContainer}>
            <Image
              style={styles.inputIcon}
              source={{
                uri: 'http://cdn.onlinewebfonts.com/svg/img_296750.png'
              }}
            />
            <TextInput
              style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid="transparent"
              onChangeText={this.handleChange}
            />
          </View>

          {/* login button */}
          <TouchableHighlight
            style={[styles.buttonContainer, styles.loginButton]}
            onPress={() => this.handleSubmit}
          >
            <Text style={styles.textColor}>Login</Text>
          </TouchableHighlight>

          {/* register text button */}
          <TouchableHighlight
            style={styles.registerTextContainer}
            onPress={() => this.onClickListener('register')}
          >
            <Text style={styles.textColor}>Register</Text>
          </TouchableHighlight>

          {/* forgot password button text */}
          <TouchableHighlight
            style={styles.forgotTextContainer}
            onPress={() => this.onClickListener('forgot password')}
          >
            <Text style={styles.textColor}>Forgot your password?</Text>
          </TouchableHighlight>

          <Message />
        </View>
      </Provider>
    )
  }
}

const mapStateToProps = state => {
  return {
    login: state.user.login
  }
}

export default connect(mapStateToProps)(LoginView)
