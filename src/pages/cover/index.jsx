import React, { Component } from 'react'
import Login from 'pages/user/login'
import { Layout } from 'antd'

class Cover extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Layout className="login">
        <Layout.Content className="full-centering container-content">
          <Login />
        </Layout.Content>
      </Layout>
    )
  }
}

export default Cover
