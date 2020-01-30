import React, { Component } from 'react'
import Status404 from 'pages/status/status404'

class Dashboard extends Component {
  render() {
    const { routes } = this.props
    return (
      <>
        <Switch>
          {routes.map(route => (
            <RecursiveRouter route={route} key={route.path} />
          ))}
          <Route component={Status404} />
        </Switch>
      </>
    )
  }
}

export default Dashboard
