import React from 'react'
import { connect } from 'react-redux'
import { FlatList } from 'react-native'

import TodoListItem from './TodoListItem'
import { toggleTodo } from '../redux/action-creators'

const TodoList = ({ todos, toggleTodo }) => (
  <FlatList
    data={todos}
    renderItem={({ item }) => (
      <TodoListItem
        todo={item}
        onPress={() => toggleTodo(item.id)}
      />
    )}
    keyExtractor={item => `${item.id}`}
  />
)

const mapStateToProps = state => {
  const { todos } = state
  return { todos }
}

const mapDispatchToProps = {
  toggleTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
