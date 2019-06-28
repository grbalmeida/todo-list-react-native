import { SET_TODO_TEXT, ADD_TODO, TOGGLE_TODO } from '../actions'

export const setTodoText = text => ({
  type: SET_TODO_TEXT,
  text
})

export const addTodo = text => ({
  type: ADD_TODO,
  text
})

export const toggleTodo = todoId => ({
  type: TOGGLE_TODO,
  todoId
})
