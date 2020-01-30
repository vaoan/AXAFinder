import React from 'react'
import { Layout } from 'antd'
import BreadcrumGen from 'components/LayoutComponents/Breadcrum'

class DashboardFind extends React.Component {
  render() {
    const {
      switcherData: { routeArrayPath },
    } = this.props
    return (
      <Layout className="container-content">
        <BreadcrumGen routes={routeArrayPath} />
        <div>Test!</div>
      </Layout>
    )
  }
}

export default DashboardFind
