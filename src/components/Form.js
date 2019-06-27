import React from 'react'
import { View, Button, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import { addTodo } from '../redux/action-creators'
import Input from './Input'

const Form = ({ addTodo }) => (
  <View style={styles.formContainer}>
    <View style={styles.inputContainer}>
      <Input
        onChangeText={() => null}
        value=''
      />
    </View>
    <View style={styles.buttonContainer}>
      <Button
        onPress={() => addTodo('Test')}
        title='add'
      />
    </View>
  </View>
)

const styles = StyleSheet.create({
  formContainer: {
    flexDirection: 'row'
  },
  inputContainer: {
    flex: 4
  },
  buttonContainer: {
    flex: 1
  }
})

const mapDispatchToProps = {
  addTodo
}

export default connect(null, mapDispatchToProps)(Form)
