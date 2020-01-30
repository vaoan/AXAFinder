import React, { Component } from 'react'
import { Layout } from 'antd'

class Cover extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Layout>
        <Layout.Content className="full-centering container-content">
          Home
        </Layout.Content>
      </Layout>
    )
  }
}

export default Cover
