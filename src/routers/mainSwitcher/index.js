import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Status404 from 'pages/status/status404'

class MainSwitcher extends React.Component {
  render() {
    const { routes, fatherPath = '' } = this.props
    return (
      <Switch>
        {routes.map(route => {
          const { children = null, exact = false, path, Component = undefined } = route
          return Component ? (
            <Route
              path={`${fatherPath}${path}`}
              render={() => <Component routes={children} route={route} />}
              exact={exact}
              key={`${fatherPath}${path}`}
            />
          ) : null
        })}
        <Route component={Status404} />
      </Switch>
    )
  }
}

export default MainSwitcher
