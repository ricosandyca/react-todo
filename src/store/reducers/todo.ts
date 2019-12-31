import {
  CREATE_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  TodoState,
  TodoActionTypes
} from '../types/todo'

const initialState: TodoState = {
  todos: []
}

export default function (state = initialState, action: TodoActionTypes): TodoState {
  switch (action.type) {

    case CREATE_TODO:
      return {
        ...state,
        todos: [
          action.payload,
          ...state.todos
        ]
      }

    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => (
          todo._id === action.payload._id
            ? action.payload.data
            : todo
        ))
      }

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(({ _id }) => _id !== action.payload)
      }

    default:
      return state

  }
}
