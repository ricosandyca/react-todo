import { createStore, compose } from 'redux'
import {
  persistStore,
  persistReducer,
  PersistConfig
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import reducer, { RootState } from './reducers'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: typeof compose
  }
}

const persistConfig: PersistConfig<RootState> = {
  key: 'root',
  storage,
  whitelist: ['todo']
}
const persistedReducer = persistReducer(persistConfig, reducer)

export const store = createStore<any,any,any,any>(
  persistedReducer,
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
    : undefined
)

export const persistor = persistStore(store)
