import React from 'react'
import { withRouter, Redirect } from 'react-router-dom'

@withRouter()
class DefaultRouter extends React.Component {
  render() {
    return <Redirect to="/dashboard" />
  }
}

export default DefaultRouter
