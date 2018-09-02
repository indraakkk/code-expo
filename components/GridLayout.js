import React from 'react'
import { StyleSheet, View } from 'react-native'

class GridLayout extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={[styles.spaceBox, styles.box2]} />
          <View style={[styles.spaceBox, styles.box3]} />
          <View style={[styles.spaceBox, styles.two]} />
        </View>

        <View style={styles.row}>
          <View style={[styles.box, styles.two]} />
          <View style={[styles.box, styles.box2]} />
          <View style={[styles.box, styles.box3]} />
        </View>

        <View style={styles.row}>
          <View style={[styles.box, styles.box2]} />
          <View style={[styles.box, styles.two]} />
          <View style={[styles.box, styles.box3]} />
        </View>

        <View style={styles.row}>
          <View style={[styles.box, styles.box2]} />
          <View style={styles.box} />
          <View style={[styles.box, styles.box3]} />
        </View>

        <View style={styles.row}>
          <View style={[styles.box, styles.box2]} />
          <View style={styles.box} />
        </View>

        <View style={styles.row}>
          <View style={styles.box} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  box: {
    flex: 1,
    height: 100,
    // justifyContent: 'space-between',
    backgroundColor: '#333'
  },
  spaceBox: {
    flex: 1,
    height: 100,
    width: 100,
    backgroundColor: 'red'
  },
  box2: {
    padding: 10,
    backgroundColor: 'green'
  },
  box3: {
    padding: 10,
    backgroundColor: 'orange'
  },
  two: {
    flex: 2
  }
})

export default GridLayout
