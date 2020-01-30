import React from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import Loader from 'components/LayoutComponents/Loader'
import { connect } from 'react-redux'

/*eslint no-constant-condition: "ignore"*/

@withRouter
@connect(({ user }) => ({ user }))
class DefaultRouter extends React.Component {
  render() {
    const {
      children,
      location: { pathname },
      user,
    } = this.props
    // Layout Rendering
    const getLayout = () => {
      if (pathname === '/') {
        return 'public'
      }
      if (/^\/login(?=\/|$)/i.test(pathname)) {
        return 'login'
      }
      return 'main'
    }

    console.log(pathname)

    const isUserAuthorized = user.token
    const isUserLoading = user.loading
    const isLoginLayout = getLayout() === 'login'

    console.log(isLoginLayout)

    const BootstrappedLayout = () => {
      // show loader when user in check authorization process, not authorized yet and not on login pages
      if (isUserLoading && !isUserAuthorized && !isLoginLayout) {
        return <Loader />
      }
      // redirect to login page if current is not login page and user not authorized
      if (!isLoginLayout && !isUserAuthorized && false) {
        return <Redirect to="/login" />
      }
      // redirect to main dashboard when user on login page and authorized
      if (isLoginLayout && isUserAuthorized) {
        return <Redirect to="/dashboard" />
      }
      // in other case render previously set layout
      return children
    }

    return BootstrappedLayout()
  }
}

export default DefaultRouter
