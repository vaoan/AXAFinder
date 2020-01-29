import React, { Component } from 'react'
import { Trans, withTranslation } from 'react-i18next'

@withTranslation()
export class T extends Component {
  render() {
    const { children } = this.props
    return <Trans>{children}</Trans>
  }
}

export default T
