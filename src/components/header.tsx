import React from 'react'
import {
  Typography,
  Box
} from '@material-ui/core'

const header: React.FC = () => {
  return (
    <Box my={5}>
      <Typography align='center' variant='h5'>
        <b>Kegiatan</b>
      </Typography>
    </Box>
  )
}

export default header
