import React from 'react'
import {
  Container,
  Grid,
  TextField
} from '@material-ui/core'

import {
  header as Header
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
          </Grid>
        </Grid>
      </Container>
    )
  }
}
