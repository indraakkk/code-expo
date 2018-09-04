'use strict'

import { StyleSheet } from 'react-native'

module.exports = StyleSheet.create({
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
