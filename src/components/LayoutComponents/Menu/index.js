import React, { Component } from 'react'
import { Menu, Icon } from 'antd'
import T from 'components/SystemComponent/T'
import { Link, withRouter } from 'react-router-dom'

@withRouter
class MenuLeft extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <Menu theme="dark" mode="inline">
        <Menu.Item key="2">
          <Link to="/dashboard/find">
            <Icon type="desktop" />
            <span>
              <T>Find people</T>
            </span>
          </Link>
        </Menu.Item>
        <Menu.Item key="1">
          <Link to="/logout">
            <Icon type="user" />
            <span>
              <T>Logout</T>
            </span>
          </Link>
        </Menu.Item>
      </Menu>
    )
  }
}

export default MenuLeft
