import React, { Fragment } from 'react'
import { View, Button, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import { addTodo } from '../redux/action-creators'
import Input from './Input'

const Form = ({ addTodo }) => (
  <Fragment>
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
  </Fragment>
)

const styles = StyleSheet.create({
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
