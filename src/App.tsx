import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  RouteProps
} from 'react-router-dom'

import {
  main as MainPage,
  about as AboutPage
} from './pages'
import { notfound as NotFoundPage } from './pages/exceptions'

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
  }
]

const App: React.FC = () => {
  return (
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
  )
}

export default App
