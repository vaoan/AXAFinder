import React from 'react'
import { ConnectedRouter } from 'connected-react-router'
import { Helmet } from 'react-helmet'
import { SITE_NAME } from 'constants/base'
import { routes } from 'routers/routes'
import MainSwitcher from 'routers/mainSwitcher'

class Router extends React.Component {
  render() {
    const { history } = this.props
    return (
      <ConnectedRouter history={history}>
        <Helmet titleTemplate={`${SITE_NAME} | %s`} title="Index" />
        <MainSwitcher routes={routes} />
      </ConnectedRouter>
    )
  }
}

export default Router
