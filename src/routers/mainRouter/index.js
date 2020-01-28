import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import Loadable from 'react-loadable'
import Loader from 'components/LayoutComponents/Loader'
import NotFoundPage from 'pages/status/404'
import RecursiveRouter from 'routers/recursiveRouter'
import { Helmet } from 'react-helmet'
import enviroment from 'constants/enviroment'

const loadable = loader =>
  Loadable({
    loader,
    delay: false,
    loading: () => <Loader />,
  })

export const routes = [
  {
    path: '/login',
    breadcrumbName: 'login',
    Component: loadable(() => import('pages/user/login')),
    exact: true,
  },
  {
    path: '/first',
    breadcrumbName: 'first',
    children: [
      {
        path: '/general',
        breadcrumbName: 'General',
      },
      {
        path: '/layout',
        breadcrumbName: 'Layout',
      },
      {
        path: '/navigation',
        breadcrumbName: 'Navigation',
      },
    ],
  },
  {
    path: '/second',
    breadcrumbName: 'second',
  },
]

class Router extends React.Component {
  render() {
    const { history } = this.props
    return (
      <ConnectedRouter history={history}>
        <Helmet titleTemplate={`${enviroment.site_name} | %s`} title="Index" />
        <Switch>
          <Route exact path="/" render={() => <div>Holi</div>} />
          {routes.map(route => (
            <RecursiveRouter route={route} key={route.path} />
          ))}
          <Route component={NotFoundPage} />
        </Switch>
      </ConnectedRouter>
    )
  }
}

export default Router
