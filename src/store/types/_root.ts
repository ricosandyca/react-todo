import {
  TodoActionTypes
} from './todo'
import {
  OptionActionTypes
} from './option'

export type RootActions =
  TodoActionTypes |
  OptionActionTypes
