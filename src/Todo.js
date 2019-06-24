import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

// import Form from './components/Form'
import Input from './components/Input'

export default class Todo extends Component {
  render () {
    return (
      <View style={styles.container}>
        <View>
          <Input
            onChangeText={() => null}
            value=''
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30
  }
})
