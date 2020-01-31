import React, { Component } from 'react'
import { Layout } from 'antd'
import MainSwitcher from 'routers/mainSwitcher'
import Menu from 'components/LayoutComponents/Menu'
import FooterMain from 'components/LayoutComponents/Footer'
import Authorize from 'components/LayoutComponents/Authorize'

const { Header, Content, Sider } = Layout

class Dashboard extends Component {
  state = {
    collapsed: false,
  }

  onCollapse = collapsed => {
    this.setState({ collapsed })
  }

  render() {
    const { switcherData } = this.props

    const { collapsed } = this.state
    return (
      <>
        <Authorize>
          <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
              <div className="logo" />
              <Menu />
            </Sider>
            <Layout>
              <Header />
              <Content>
                <MainSwitcher switcherData={{ ...switcherData }} />
              </Content>
              <FooterMain />
            </Layout>
          </Layout>
        </Authorize>
      </>
    )
  }
}

export default Dashboard
