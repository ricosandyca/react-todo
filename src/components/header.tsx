import React from 'react'
import {
  Link,
  withRouter,
  RouteProps
} from 'react-router-dom'
import {
  Typography,
  Box,
  Breadcrumbs,
  makeStyles
} from '@material-ui/core'
import {
  grey
} from '@material-ui/core/colors'

interface ILink {
  path: string
  name: string
  currentPage?: boolean
}

const header: React.FC = (props: RouteProps) => {
  const { pathname } = props.location || {}
  const classes = makeStyles(({
    header: { color: grey[900] },
  }))()

  let links: ILink[] = [
    {
      path: '/',
      name: 'Home'
    },
    {
      path: '/option',
      name: 'Option'
    },
    {
      path: '/about',
      name: 'About'
    }
  ]
  links = links.map(link => (
    link.path === pathname
      ? { ...link, currentPage: true }
      : link
  ))

  return (
    <Box my={4} className='header'>
      <Typography align='center' variant='h5' className={classes.header}>
        <span className='primary-text'>Kegiatan</span>
      </Typography>
      <Box my={3}>
        <div className='breadcrumbs'>
          <Breadcrumbs>
            {
              links.map((link, i) => (
                <Link key={i} to={link.path} className='link'>
                  <Typography color={link.currentPage ? 'secondary' : 'textSecondary'}>
                    {link.name}
                  </Typography>
                </Link>
              ))
            }
          </Breadcrumbs>
        </div>
      </Box>
    </Box>
  )
}

export default withRouter(header)
