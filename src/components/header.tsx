import React from 'react'
import {
  Typography,
  Box,
  makeStyles
} from '@material-ui/core'
import {
  grey
} from '@material-ui/core/colors'

const header: React.FC = () => {
  const classes = makeStyles(({
    header: { color: grey[900] }
  }))()

  return (
    <Box my={4} className='header'>
      <Typography align='center' variant='h5' className={classes.header}>
        <span className='primary-text'>Kegiatan</span>
      </Typography>
    </Box>
  )
}

export default header
