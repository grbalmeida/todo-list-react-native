import React from 'react'
import { connect } from 'react-redux'
import { FlatList } from 'react-native'

import TodoListItem from './TodoListItem'
import { toggleTodo, setEditingTodo } from '../redux/action-creators'

const TodoList = ({ todos, toggleTodo, setEditingTodo }) => (
  <FlatList
    data={todos}
    renderItem={({ item }) => (
      <TodoListItem
        todo={item}
        onPress={() => toggleTodo(item.id)}
        onLongPress={() => setEditingTodo(item)}
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
  toggleTodo,
  setEditingTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
