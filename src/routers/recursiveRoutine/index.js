import React from 'react'
import { Route } from 'react-router-dom'

class RecursiveRouter extends React.Component {
  render() {
    const { route } = this.props
    const { children = null, exact = true, path, Component } = route
    return <Route path={path} render={() => <Component routes={children} />} exact={exact} />
  }
}

export default RecursiveRouter
/**
     * const route = {
        path: 'index',
        breadcrumbName: 'home',
        component: loadable(() => import('pages/user/login')),
        exact: true,
        children: [
         {
            path: '/general',
            breadcrumbName: 'General',
            component: loadable(() => import('pages/user/login')),
            exact: true,
         },
         ...
        ]
    },
       * 
       */
