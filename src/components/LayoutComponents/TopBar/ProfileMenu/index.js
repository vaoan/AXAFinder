/* eslint-disable no-constant-condition */
import React from 'react'
import { connect } from 'react-redux'
import { Menu, Dropdown, Avatar, Badge } from 'antd'
import { roleUsuario } from 'factories/user'
import styles from './style.module.scss'

@connect(({ user }) => ({ user }))
class ProfileMenu extends React.Component {
  state = {
    count: 0,
  }

  logout = () => {
    const { dispatch } = this.props
    dispatch({
      type: 'user/LOGOUT',
    })
  }

  addCount = () => {
    /* 
    let { count } = this.state
    count += 1
    this.setState({
      count,
    })
    */
  }

  render() {
    const { user } = this.props
    const { count } = this.state
    const menu = (
      <Menu selectable={false}>
        <Menu.Item>
          <strong>Hola: </strong>
          {user.name || 'Anonymous'}
          <br />
          <strong>Rol: </strong>
          {roleUsuario()}
          <br />
          <strong>Email: </strong>
          {user.email}
        </Menu.Item>
        {/* <Menu.Divider />
         <Menu.Item>
          <a href="#">
            <i className={`${styles.menuIcon} icmn-lock`} />
            Cambiar contraseña
          </a>
        </Menu.Item> */}
        <Menu.Divider />
        <Menu.Item>
          <a href="#" onClick={this.logout}>
            <i className={`${styles.menuIcon} icmn-exit`} />
            Cerrar sesión
          </a>
        </Menu.Item>
      </Menu>
    )
    return (
      <Dropdown overlay={menu} trigger={['click']} onVisibleChange={this.addCount}>
        <div className={styles.dropdown}>
          {false ? (
            <Badge count={count}>
              <Avatar className={styles.avatar} shape="square" size="large" icon="user" />
            </Badge>
          ) : null}
          <div style={{ lineHeight: '1rem' }}>
            <strong>{user.name}</strong>
            <br />
            <small style={{ color: '#BABCBE' }}>({roleUsuario()})</small>
          </div>
        </div>
      </Dropdown>
    )
  }
}

export default ProfileMenu
