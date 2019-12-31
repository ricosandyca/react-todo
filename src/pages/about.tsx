import React from 'react'
import {
  Container,
  Grid
} from '@material-ui/core'

import {
  header as Header
} from '../components'

class AboutPage extends React.Component {
  render () {
    return (
      <Container>
        <Grid container justify='center'>
          <Grid item xs={12} md={8} lg={6}>
            <Header />
          </Grid>
        </Grid>
      </Container>
    )
  }
}

export default AboutPage
