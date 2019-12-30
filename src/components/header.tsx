import React from 'react'
import {
  Typography,
  Box
} from '@material-ui/core'

const header: React.FC = () => {
  return (
    <Box my={5}>
      <Typography align='center' variant='h5'>
        <b>react-todo-app</b>
      </Typography>
    </Box>
  )
}

export default header
