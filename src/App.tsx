import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  RouteProps
} from 'react-router-dom'
import {
  createMuiTheme,
  ThemeProvider
} from '@material-ui/core'
import { cyan } from '@material-ui/core/colors'

import {
  main as MainPage,
  about as AboutPage
} from './pages'
import { notFound as NotFoundPage } from './pages/exceptions'

import './assets/sass/styles.sass'

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: cyan
  }
})

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
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  )
}

export default App
