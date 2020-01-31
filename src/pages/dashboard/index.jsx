import React, { Component } from 'react'
import { Layout } from 'antd'
import MainSwitcher from 'routers/mainSwitcher'
import Menu from 'components/LayoutComponents/Menu'
import FooterMain from 'components/LayoutComponents/Footer'

const { Header, Content, Sider } = Layout

class Dashboard extends Component {
  state = {
    collapsed: false,
  }

  onCollapse = collapsed => {
    console.log(collapsed)
    this.setState({ collapsed })
  }

  render() {
    const { switcherData } = this.props

    console.log(switcherData)

    const { collapsed } = this.state
    return (
      <>
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
      </>
    )
  }
}

export default Dashboard
