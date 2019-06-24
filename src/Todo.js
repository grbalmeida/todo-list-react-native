import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import Form from './components/Form'

export default class Todo extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Form />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30
  }
})
