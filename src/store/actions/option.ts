import {
  TOGGLE_THEME,
  OptionActionTypes
} from '../types/option'

export function toggleTheme (): OptionActionTypes {
  return {
    type: TOGGLE_THEME
  }
}
