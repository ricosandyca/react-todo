import { createStore, compose } from 'redux'

import reducer from './reducers'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: typeof compose
  }
}

export default createStore(
  reducer,
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
    : undefined
)
