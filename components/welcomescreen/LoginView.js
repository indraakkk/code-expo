import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native'

class LoginView extends React.Component {
  constructor(props) {
    super(props)
    state = {
      email: '',
      password: ''
    }
  }

  onClickListener = viewId => {
    Alert.alert('Alert', `Button Pressed ${viewId}`)
  }

  render() {
    return (
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
            onChangeText={email => this.setState({ email })}
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
            onChangeText={password => this.setState({ password })}
          />
        </View>

        {/* login button */}
        <TouchableHighlight
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => this.onClickListener('login')}
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
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1
  },
  inputIcon: {
    width: 20,
    height: 20,
    marginLeft: 15,
    justifyContent: 'center'
  },
  buttonContainer: {
    position: 'absolute',
    top: 430,
    width: 250,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 30
  },
  loginButton: {
    backgroundColor: '#1640AA'
  },
  textColor: {
    color: 'white'
  },
  registerTextContainer: {
    position: 'absolute',
    top: 490,
    width: 250,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  forgotTextContainer: {
    position: 'absolute',
    top: 550,
    width: 250,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textPrompt: {
    position: 'absolute',
    width: 62,
    height: 75,
    left: 81,
    top: 44,

    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 64,

    color: '#FFFFFF',
    opacity: 0.8
  },
  textBlvck: {
    position: 'absolute',
    width: 195,
    height: 75,
    left: 82,
    top: 111,

    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 64,

    color: '#FFFFFF',
    opacity: 0.8
  }
})
export default LoginView
