import { ADD_TODO, TOGGLE_TODO } from '../actions/index'

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
    case TOGGLE_TODO:
      return state.map(todo => {
        if(todo.id === action.todoId) {
          return {
            ...todo,
            done: !todo.done
          }
        }

        return todo
      })
    default:
      return state
  }
}

export default todoListReducer
