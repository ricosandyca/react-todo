import {
  CREATE_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  Todo,
  Todo_Id,
  TodoActionTypes
} from '../types/todo'

export function createTodo (newTodo: Todo): TodoActionTypes {
  return {
    type: CREATE_TODO,
    payload: newTodo
  }
}

export function toggleTodo (_id: Todo_Id): TodoActionTypes {
  return {
    type: TOGGLE_TODO,
    payload: _id
  }
}

export function deleteTodo (_id: Todo_Id): TodoActionTypes {
  return {
    type: DELETE_TODO,
    payload: _id
  }
}
