export type OptionState = {
  darkTheme: boolean
}

export const TOGGLE_THEME = 'TOGGLE_THEME'

interface ToggleThemeAction {
  type: typeof TOGGLE_THEME
}

export type OptionActionTypes =
  ToggleThemeAction
