import React from 'react'
import {
  makeStyles,
  Paper,
  Checkbox,
  IconButton,
  Typography,
  Tooltip
} from '@material-ui/core'
import {
  DeleteOutline
} from '@material-ui/icons'
import {
  grey
} from '@material-ui/core/colors'

interface IProps {
  title: string
  done?: boolean
}

const todo: React.FC<IProps> = props => {
  const { title, done = false } = props
  const classes = makeStyles(({
    text: { color: grey[800] }
  }))()

  return (
    <Paper variant='outlined' className={`todo ${done ? 'done' : ''}`}>
      <div className='item'>
        <Tooltip title='Check'>
          <Checkbox />
        </Tooltip>
      </div>
      <div className='item full'>
        <Typography variant='body1' className={classes.text}>
          <span className={`text ${done ? 'done' : ''}`}>{title}</span>
        </Typography>
      </div>
      <div className='item'>
        <Tooltip title='Delete'>
          <IconButton color='secondary'>
            <DeleteOutline />
          </IconButton>
        </Tooltip>
      </div>
    </Paper>
  )
}

export default todo
