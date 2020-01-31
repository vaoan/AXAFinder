import React, { Component } from 'react'
import { Layout } from 'antd'
import { Redirect, withRouter } from 'react-router-dom'

@withRouter
class Cover extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Layout className="login">
        <Layout.Content className="full-centering container-content">
          <Redirect to="/login" />
        </Layout.Content>
      </Layout>
    )
  }
}

export default Cover
