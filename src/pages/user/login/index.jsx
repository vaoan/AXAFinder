import React, { Component } from 'react'
import { Layout } from 'antd'
import LoginForm from './loginForm'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Layout className="login">
        <Layout.Content className="full-centering container-content">
          <LoginForm />
        </Layout.Content>
      </Layout>
    )
  }
}

export default Login
