import React from 'react'
import { StyleSheet, View, Dimensions, StatusBar } from 'react-native'

var { height } = Dimensions.get('window')

var box_count = 3
var box_height = height / box_count - 20

class JustifyContent extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <View style={[styles.box, styles.box1]} />
        <View style={[styles.box, styles.box2]} />
        <View style={[styles.box, styles.box3]} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between', //flex-end, center, space-around, space-between
    backgroundColor: 'black'
  },
  box: {
    height: box_height
  },
  box1: {
    backgroundColor: '#2196F3'
  },
  box2: {
    backgroundColor: '#8BC34A'
  },
  box3: {
    backgroundColor: '#e3aa1a'
  }
})

export default JustifyContent
