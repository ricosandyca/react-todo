import {
  CREATE_TODO,
  UPDATE_TODO,
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

export function updateTodo (_id: Todo_Id, updateTodo: Todo): TodoActionTypes {
  return {
    type: UPDATE_TODO,
    payload: {
      _id,
      data: updateTodo
    }
  }
}

export function deleteTodo (_id: Todo_Id): TodoActionTypes {
  return {
    type: DELETE_TODO,
    payload: _id
  }
}
