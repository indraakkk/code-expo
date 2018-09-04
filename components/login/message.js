import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import { View, Text } from 'react-native'

class Message extends React.Component {
  static get propTypes() {
    return {
      children: PropTypes.any,
      dispatch: PropTypes.any
    }
  }

  render() {
    return (
      <View>
        <Text>{JSON.stringify(this.props)}</Text>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    state
  }
}

export default connect(mapStateToProps)(Message)
