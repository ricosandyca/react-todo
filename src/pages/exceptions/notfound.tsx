import React from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  makeStyles
} from '@material-ui/core'
import { grey } from '@material-ui/core/colors'

const notfound: React.FC = () => {
  const status = 404
  const message = 'Page not found'
  const classes = makeStyles(({
    title: { color: grey[800] },
    subtitle: { color: grey[700] }
  }))()

  return (
    <div className='exception'>
      <p className={`title ${classes.title}`}>
        OOPS!
      </p>
      <p className={`subtitle ${classes.subtitle}`}>
        {`Error: ${status} ${message}`}
      </p>
      <Link to='/' className='link'>
        <Button variant='outlined' color='secondary'>
          GO BACK
        </Button>
      </Link>
    </div>
  )
}

export default notfound
