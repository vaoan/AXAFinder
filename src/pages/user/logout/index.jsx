import React, { Component } from 'react'
import { Layout } from 'antd'
import { Redirect, withRouter } from 'react-router'
import { ACTION_Logout } from 'models/redux/user/actions'
import { connect } from 'react-redux'

const dispatchToProps = dispatch => ({
  logout: () => {
    dispatch(ACTION_Logout())
    return <Redirect to="/" />
  },
})

@withRouter
@connect(null, dispatchToProps)
class Logout extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { logout } = this.props
    return (
      <Layout className="login">
        <Layout.Content className="full-centering container-content">{logout()}</Layout.Content>
      </Layout>
    )
  }
}

export default Logout
