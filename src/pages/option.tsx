import React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import {
  Container,
  Grid,
  Divider,
  Box,
  Switch,
  Typography
} from '@material-ui/core'

import { RootState } from '../store/reducers'
import { RootActions } from '../store/types/_root'
import { toggleTheme } from '../store/actions/option'

import { header as Header } from '../components'

const mapStateToProps = ({ option }: RootState) => ({ option })
const mapDispatchToProps = (dispatch: Dispatch<RootActions>) => ({
  toggleTheme: () => dispatch(toggleTheme())
})

type TProps =
  ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>

class OptionPage extends React.Component<TProps> {
  render () {
    const {
      option: { darkTheme },
      toggleTheme
    } = this.props

    return (
      <Container className='option'>
        <Grid container justify='center'>
          <Grid item xs={12} sm={10} md={8} lg={6}>
            <Header />
            <Divider />
            <Box className='switch' my={2}>
              <Typography>
                <Typography variant='body1' color='textPrimary'>
                  Dark theme
                </Typography>
                <Typography variant='caption' color='textSecondary'>
                  Enable to activate dark mode
                </Typography>
              </Typography>
              <Switch
                checked={darkTheme}
                onChange={toggleTheme}/>
            </Box>
          </Grid>
        </Grid>
      </Container>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OptionPage)
