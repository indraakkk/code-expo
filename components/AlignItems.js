import React from 'react'
import { StyleSheet, View, StatusBar } from 'react-native'

class AlignItems extends React.Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <StatusBar hidden={true} />

        <View style={styles.container}>
          <View style={[styles.box, styles.box1]} />
          <View style={[styles.box, styles.box2]} />
          <View style={[styles.box, styles.box3]} />
        </View>

        <View style={styles.container2}>
          <View style={[styles.box, styles.box1]} />
          <View style={[styles.box, styles.box2]} />
          <View style={[styles.box, styles.box3]} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'center', //flex-end, center
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#000'
  },
  container2: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center' //flex-end, center
  },
  box: {
    width: 100,
    height: 100
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

export default AlignItems
