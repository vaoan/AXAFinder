import React from 'react'
import { Layout, Card } from 'antd'
import T from 'components/SystemComponent/T'
import ClientSelector from 'pages/dashboard/find/ClientSelector'
import ListDisplayer from 'components/CustomComponent/ListDisplayer'
import ClientFilter from './ClientFilter'
import ClientCard from './ClientCard'

class DashboardFind extends React.Component {
  state = {
    clients: [],
    filteredClients: [],
    friend: '',
  }

  onChangeTown = clients => {
    this.setState({ clients })
  }

  onFilterClients = filteredClients => {
    this.setState({ filteredClients })
  }

  onSelectFriend = friend => {
    this.setState({ friend })
  }

  render() {
    const { clients: serverData } = this.props
    const { clients, filteredClients, friend } = this.state

    return (
      <Layout className="container-content">
        <div className="container-content--t">
          <Card title={<T>Select a town</T>}>
            <ClientSelector callback={this.onChangeTown} clients={serverData} />
          </Card>
        </div>
        <div className="container-content--t">
          <Card title={<T>Member filter</T>}>
            <ClientFilter
              schemaSource={{ name: friend }}
              dataSource={clients}
              callback={this.onFilterClients}
            />
          </Card>
        </div>
        <div className="container-content--t">
          <Card>
            <ListDisplayer
              grid={{ gutter: 16, xs: 1, sm: 1, md: 1, lg: 2, xl: 2, xxl: 2 }}
              dataSource={filteredClients}
            >
              <ClientCard selectFriendCallback={this.onSelectFriend} />
            </ListDisplayer>
          </Card>
        </div>
      </Layout>
    )
  }
}

export default DashboardFind
