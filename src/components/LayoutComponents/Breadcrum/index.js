import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Breadcrumb } from 'antd'

@withRouter
class BreadcrumGen extends React.Component {
  itemRender = (route, params, routes, paths) => {
    const last = routes.indexOf(route) === routes.length - 1
    return last ? (
      <span>{route.breadcrumbName}</span>
    ) : (
      <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
    )
  }

  render() {
    const { routes: outerRoutes } = this.props
    const { itemRender } = this
    return <Breadcrumb itemRender={itemRender} routes={outerRoutes} />
  }
}

export default BreadcrumGen
