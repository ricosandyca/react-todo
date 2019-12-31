import { combineReducers } from 'redux'

import todo from './todo'

const rootReducers = combineReducers({
  todo
})

export type RootState = ReturnType<typeof rootReducers>
export default rootReducers
