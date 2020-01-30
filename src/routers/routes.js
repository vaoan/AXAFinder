import React from 'react'
import Loadable from 'react-loadable'
import Loader from 'components/LayoutComponents/Loader'

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
    path: '/dashboard',
    breadcrumbName: 'Dashboard',
    children: [
      {
        path: '/find',
        breadcrumbName: 'Find',
      },
    ],
  },
  {
    path: '/second',
    breadcrumbName: 'second',
  },
]

export default {
  routes,
}
