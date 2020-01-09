import React from 'react'
import { connect } from 'react-redux'

import { RootState } from '../store/reducers'

const mapStateToProps = ({ option }: RootState) => ({ option })

type TProps =
  ReturnType<typeof mapStateToProps>

const root: React.FC<TProps> = props => {
  const { darkTheme } = props.option
  const metaThemeColor = document.querySelector('meta[name=theme-color]')
  if (darkTheme) {
    document.body.classList.add('dark-theme')
    if (metaThemeColor)
      metaThemeColor.setAttribute('content', '#000000')
  } else {
    document.body.classList.remove('dark-theme')
    if (metaThemeColor)
      metaThemeColor.setAttribute('content', '#ffffff')
  }

  return null
}

export default connect(
  mapStateToProps
)(root)
