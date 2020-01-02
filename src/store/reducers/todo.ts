import {
  CREATE_TODO,
  TOGGLE_TODO,
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

    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => (
          todo._id === action.payload
            ? { ...todo, done: !todo.done }
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
