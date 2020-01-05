import { combineReducers } from 'redux'

import todo from './todo'
import option from './option'

const rootReducers = combineReducers({
  todo, option
})

export type RootState = ReturnType<typeof rootReducers>
export default rootReducers
