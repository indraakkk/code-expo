import React from 'react'
import { StyleSheet, View, StatusBar } from 'react-native'

class Positioning extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        {/* big orange box_position left */}
        <View style={styles.left}>
          <View style={[styles.box, styles.big_orange_box]} />
        </View>

        {/* big black, red, gray, green & orange box_position middle */}
        <View style={styles.middle}>
          <View style={[styles.box, styles.big_black_box]}>
            <View style={[styles.inner_box, styles.red_box]} />
          </View>
          <View style={[styles.box, styles.big_gray_box]} />

          <View style={[styles.box, styles.big_green_box]}>
            <View style={[styles.inner_box, styles.orange_box]} />
          </View>
        </View>

        {/* right position */}
        <View style={styles.right}>
          <View style={[styles.box, styles.big_lightblue_box]}>
            <View style={[styles.inner_box, styles.black_box]} />
          </View>
          <View style={[styles.inner_box, styles.purple_box]} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  left: {
    flex: 1,
    justifyContent: 'center'
  },
  middle: {
    flex: 5,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  right: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: '#333'
  },
  big_black_box: {
    backgroundColor: 'black'
  },
  big_green_box: {
    backgroundColor: 'green'
  },
  big_orange_box: {
    backgroundColor: 'orange'
  },
  big_lightblue_box: {
    backgroundColor: '#03A9F4'
  },
  big_gray_box: {
    height: 100,
    alignSelf: 'stretch',
    backgroundColor: '#ccc'
  },
  inner_box: {
    width: 20,
    height: 20
  },
  red_box: {
    position: 'relative',
    backgroundColor: 'red',
    top: 10,
    right: 10
  },
  orange_box: {
    position: 'absolute',
    backgroundColor: 'orange',
    top: 10,
    right: 10
  },
  purple_box: {
    position: 'absolute',
    backgroundColor: 'purple',
    bottom: 10,
    right: 10
  },
  black_box: {
    position: 'relative',
    backgroundColor: 'black'
  }
})

export default Positioning
