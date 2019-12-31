import React from 'react'
import {
  Container,
  Grid,
  TextField,
  Box
} from '@material-ui/core'

import {
  header as Header,
  todo as Todo
} from '../components'

interface IState {
  input: {
    [name: string]: string
  }
}

export default class extends React.Component<any, IState> {
  state = {
    input: {
      todo: ''
    }
  }

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    this.setState({
      input: {
        ...this.state.input,
        [name]: value
      }
    })
  }

  handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault()
    alert(this.state.input.todo)
  }

  render () {
    const { input } = this.state
    const todos = [
      {
        title: 'Hello world',
        done: true,
        createdAt: new Date()
      },
      {
        title: 'Foo bar',
        done: false,
        createdAt: new Date()
      },
      {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
        done: false,
        createdAt: new Date()
      }
    ]

    return (
      <Container>
        <Grid container justify='center'>
          <Grid item xs={12} md={8} lg={6}>
            <Header/>
            <form onSubmit={this.handleSubmitForm}>
              <TextField
                fullWidth
                name='todo'
                value={input.todo}
                variant='outlined'
                color='secondary'
                label='What needs to be done?'
                onChange={this.handleInputChange}/>
            </form>
            <Box my={3}>
              {
                todos.map((todo, i) => (
                  <Todo
                    key={i}
                    title={todo.title}
                    done={todo.done}/>
                ))
              }
            </Box>
          </Grid>
        </Grid>
      </Container>
    )
  }
}
