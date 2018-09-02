import React from 'react'
import { StyleSheet, View, StatusBar } from 'react-native'

class HoriontalStackLayout extends React.Component {
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
    flexDirection: 'row'
  },
  box: {
    flex: 1
  },
  box1: {
    flex: 1,
    backgroundColor: '#2196F3'
  },
  box2: {
    flex: 1,
    backgroundColor: '#8BC34A'
  },
  box3: {
    flex: 1,
    backgroundColor: '#e3aa1a'
  }
})

export default HoriontalStackLayout
