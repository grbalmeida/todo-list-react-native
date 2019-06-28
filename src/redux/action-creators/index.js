import { ADD_TODO, TOGGLE_TODO } from '../actions'

export const addTodo = text => ({
  type: ADD_TODO,
  text
})

export const toggleTodo = todoId => ({
  type: TOGGLE_TODO,
  todoId
})
