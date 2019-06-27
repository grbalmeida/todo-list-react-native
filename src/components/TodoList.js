import React from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'

const TodoList = ({ todos }) => {
  console.log(todos)
  return (
    <View>
      {todos.map(todo => <Text key={todo.id}>{todo.text}</Text>)}
    </View>
  )
}

const mapStateToProps = state => {
  const { todos } = state
  return { todos }
}

export default connect(mapStateToProps)(TodoList)
