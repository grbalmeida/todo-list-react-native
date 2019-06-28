import {
  SET_TODO_TEXT,
  ADD_TODO,
  TOGGLE_TODO,
  SET_EDITING_TODO,
  UPDATE_TODO
} from '../actions'

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

export const setEditingTodo = todo => ({
  type: SET_EDITING_TODO,
  todo
})

export const updateTodo = todo => ({
  type: UPDATE_TODO,
  todo
})
