import { ADD_TODO } from '../actions/index'

let nextId = 1

const todoListReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      const todo = {
        id: nextId++,
        text: action.text,
        done: false
      }

      return [...state, todo]
    default:
      return state
  }
}

export default todoListReducer
