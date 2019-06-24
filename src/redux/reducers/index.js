import { ADD_TODO } from '../../actions'

const todoListReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      const todo = {
        text: action.text,
        done: false
      }

      return [...state, todo]
    default:
      return state
  }
}

export default todoListReducer
