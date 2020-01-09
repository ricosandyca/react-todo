import React from 'react'
import { connect } from 'react-redux'

import { RootState } from '../store/reducers'

const mapStateToProps = ({ option }: RootState) => ({ option })

type TProps =
  ReturnType<typeof mapStateToProps>

const root: React.FC<TProps> = props => {
  const { darkTheme } = props.option
  if (darkTheme) {
    document.body.classList.add('dark-theme')
  } else {
    document.body.classList.remove('dark-theme')
  }

  return null
}

export default connect(
  mapStateToProps
)(root)
