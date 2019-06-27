import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

const TodoList = ({ todos }) => (
  <View>
    {todos.map(todo => <Text key={todo.id}>{todo.text}</Text>)}
  </View>
)

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
}

export default TodoList
