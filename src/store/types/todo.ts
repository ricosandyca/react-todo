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
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const DELETE_TODO = 'DELETE_TODO'

interface CreateTodoAction {
  type: typeof CREATE_TODO
  payload: Todo
}

interface ToggleTodoAction {
  type: typeof TOGGLE_TODO
  payload: Todo_Id
}

interface DeleteTodoAction {
  type: typeof DELETE_TODO
  payload: Todo_Id
}

export type TodoActionTypes =
  CreateTodoAction |
  ToggleTodoAction |
  DeleteTodoAction
