import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { validateRole } from 'factories/user'
import Status404 from 'pages/status/status404'

@connect(({ user }) => ({ user }))
class Authorize extends React.Component {
  render() {
    const { children, redirect = false, to = '/404', roles = [] } = this.props

    const authorized = validateRole(roles)
    const AuthorizedChildren = () => {
      // if user not equal needed role and if component is a page - make redirect to needed route
      if (!authorized && redirect) {
        return <Redirect to={to} />
      }
      // if user not authorized return null to component
      if (!authorized) {
        return <Status404 />
      }
      // if access is successful render children
      return children
    }
    return AuthorizedChildren()
  }
}

export default Authorize
