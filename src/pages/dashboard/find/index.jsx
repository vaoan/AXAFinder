import React from 'react'
import { Layout, Card } from 'antd'
import T from 'components/SystemComponent/T'
import ClientSelector from 'components/CustomComponent/ClientSelector'
import ListDisplayer from 'components/CustomComponent/ListDisplayer'
import ClientCard from './clientCard'
import ClientFilter from './clientFilter'

class DashboardFind extends React.Component {
  state = {
    clients: [],
    filteredClients: [],
  }

  onChangeTown = clients => {
    this.setState({ clients })
  }

  onFilterClients = filteredClients => {
    this.setState({ filteredClients })
  }

  render() {
    const { clients: serverData } = this.props
    const { clients, filteredClients } = this.state

    return (
      <Layout className="container-content">
        <div className="container-content--t">
          <Card title={<T>Select a town</T>}>
            <ClientSelector callback={this.onChangeTown} clients={serverData} />
          </Card>
        </div>
        <div className="container-content--t">
          <Card title={<T>Member filter</T>}>
            <ClientFilter dataSource={clients} callback={this.onFilterClients} />
          </Card>
        </div>
        <div className="container-content--t">
          <Card>
            <ListDisplayer
              grid={{ gutter: 16, xs: 1, sm: 1, md: 2, lg: 3, xl: 3, xxl: 3 }}
              dataSource={filteredClients}
            >
              <ClientCard />
            </ListDisplayer>
          </Card>
        </div>
      </Layout>
    )
  }
}

export default DashboardFind
