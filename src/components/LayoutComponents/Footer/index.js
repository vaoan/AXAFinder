import React, { Component } from 'react'
import { Layout } from 'antd'
import LangChanger from '../LangChanger'

class FooterMain extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <Layout.Footer>
        <LangChanger />
      </Layout.Footer>
    )
  }
}

export default FooterMain
