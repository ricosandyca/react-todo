import {
  TOGGLE_THEME,
  OptionActionTypes
} from '../types/option'

const initialState = {
  darkTheme: false
}

export default function (state = initialState, action: OptionActionTypes) {
  switch (action.type) {

    case TOGGLE_THEME:
      return {
        ...state,
        darkTheme: !state.darkTheme
      }

    default:
      return state

  }
}
