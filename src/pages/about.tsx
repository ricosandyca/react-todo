import React from 'react'
import {
  Container,
  Grid,
  Divider,
  Typography,
  Link,
  Box,
  IconButton,
  Tooltip
} from '@material-ui/core'
import {
  Favorite,
  Code,
  GitHub
} from '@material-ui/icons'

import {
  header as Header
} from '../components'

class AboutPage extends React.Component {
  render () {
    return (
      <Container className='about'>
        <Grid container justify='center'>
          <Grid item xs={12} sm={10} md={8} lg={6}>
            <Header />
            <Divider />
            <Box className='github' my={3}>
              <Tooltip title='Fork me!'>
                <Link
                  href='https://github.com/ricosandyca/react-todo'
                  target='_blank'>
                  <IconButton>
                    <GitHub className='button' />
                  </IconButton>
                </Link>
              </Tooltip>
            </Box>
            <Typography variant='subtitle1' color='textPrimary'>
              <span className='footer'>
                <Code fontSize='small' color='inherit' />
                &nbsp;with&nbsp;
                <Favorite fontSize='small' color='secondary' />
                &nbsp;by&nbsp;
                <Link
                  href='https://github.com/ricosandyca'
                  target='_blank'
                  color='secondary'>
                  ricosandyca
                </Link>
              </span>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    )
  }
}

export default AboutPage
