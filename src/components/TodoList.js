import React from 'react'
import { connect } from 'react-redux'
import { FlatList } from 'react-native'

import TodoListItem from './TodoListItem'

const TodoList = ({ todos }) => (
  <FlatList
    data={todos}
    renderItem={({ item }) => (
      <TodoListItem text={item.text} />
    )}
    keyExtractor={item => `${item.id}`}
  />
)

const mapStateToProps = state => {
  const { todos } = state
  return { todos }
}

export default connect(mapStateToProps)(TodoList)
