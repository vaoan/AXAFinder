import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Status404 from 'pages/status/status404'

class MainSwitcher extends React.Component {
  render() {
    const {
      switcherData: { routes, routeArrayPath = [] },
    } = this.props

    const fatherPath = routeArrayPath.map(r => r.path).join()
    return (
      <Switch>
        {routes.map(route => {
          const { children = null, exact = false, path, Component = undefined } = route
          const fullPath = `${fatherPath}${path}`
          return Component ? (
            <Route
              path={fullPath}
              render={() => (
                <Component
                  switcherData={{
                    fullPath,
                    routes: children,
                    routeArrayPath: [...routeArrayPath, route],
                    route,
                  }}
                />
              )}
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
