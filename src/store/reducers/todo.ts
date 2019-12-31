import {
  CREATE_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  TodoState,
  TodoActionTypes
} from '../types/todo'

const initialState: TodoState = {
  todos: [
    {
      _id: 1,
      title: 'Hello world',
      done: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      _id: 2,
      title: 'Foo bar',
      done: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      _id: 3,
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
      done: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]
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
