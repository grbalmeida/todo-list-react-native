import React, { Component } from 'react'
import { View, StyleSheet, Button } from 'react-native'

// import Form from './components/Form'
import Input from './components/Input'

export default class Todo extends Component {
  render () {
    return (
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Input
            onChangeText={() => null}
            value=''
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => console.log('Pressed')}
            title='add'
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  formContainer: {

  },
  inputContainer: {

  },
  buttonContainer: {

  }
})
