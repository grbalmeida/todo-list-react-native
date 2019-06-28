import React from 'react'
import { View, Button, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import { addTodo, setTodoText, updateTodo } from '../redux/action-creators'
import Input from './Input'

const Form = ({ todo, addTodo, setTodoText, updateTodo }) => {
  const { id, text } = todo

  return (
    <View style={styles.formContainer}>
      <View style={styles.inputContainer}>
        <Input
          onChangeText={text => setTodoText(text)}
          value={text}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => {
            if (id) {
              return updateTodo(todo)
            }

            addTodo(text)
          }}
          title={id ? 'save' : 'add'}
        />
      </View>
    </View>
  )
}

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

const mapStateToProps = state => ({
  todo: state.editingTodo
})

const mapDispatchToProps = {
  addTodo,
  setTodoText,
  updateTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)
