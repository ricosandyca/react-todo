export type Todo_Id = string | number

export interface Todo {
  _id: Todo_Id
  title: string
  done?: boolean
  createdAt?: Date
  updatedAt?: Date
}

export interface TodoState {
  todos: Todo[]
}

export const CREATE_TODO = 'CREATE_TODO'
export const UPDATE_TODO = 'UPDATE_TODO'
export const DELETE_TODO = 'DELETE_TODO'

interface CreateTodoAction {
  type: typeof CREATE_TODO
  payload: Todo
}

interface UpdateTodoAction {
  type: typeof UPDATE_TODO
  payload: {
    _id: Todo_Id
    data: Todo
  }
}

interface DeleteTodoAction {
  type: typeof DELETE_TODO
  payload: Todo_Id
}

export type TodoActionTypes =
  CreateTodoAction |
  UpdateTodoAction |
  DeleteTodoAction
