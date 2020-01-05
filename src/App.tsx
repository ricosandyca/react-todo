import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  RouteProps
} from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor } from './store'

import {
  main as MainPage,
  about as AboutPage,
  option as OptionPage
} from './pages'
import { notfound as NotFoundPage } from './pages/exceptions'
import { _root as Root } from './components'

import './assets/sass/styles.sass'

const pages: RouteProps[] = [
  {
    path: '/',
    component: MainPage,
    exact: true
  },
  {
    path: '/about',
    component: AboutPage
  },
  {
    path: '/option',
    component: OptionPage
  }
]

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Root />
        <Router>
            <Switch>
            {
              pages.map((page, i) => (
                <Route
                  key={i}
                  exact={page.exact}
                  path={page.path}
                  component={page.component}
                  />
              ))
            }
            <Route component={NotFoundPage}/>
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  )
}

export default App
