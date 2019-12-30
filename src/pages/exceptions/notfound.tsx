import React from 'react'
import {
  Link
} from 'react-router-dom'
import {
  Button
} from '@material-ui/core'

const notfound: React.FC = () => {
  const status = 404
  const message = 'Page not found'
  return (
    <div className='exception'>
      <p className='title'>OOPS!</p>
      <p className='subtitle'>{`Error: ${status} ${message}`}</p>
      <Link to='/' className='link'>
        <Button variant='outlined' color='secondary'>
          GO BACK
        </Button>
      </Link>
    </div>
  )
}

export default notfound
