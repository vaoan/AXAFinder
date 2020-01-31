import React from 'react'
import { Layout, Card } from 'antd'
import { connect } from 'react-redux'
import { ACTION_LoadClients } from 'models/redux/clients/actions'
import T from 'components/SystemComponent/T'
import ClientSelector from 'components/CustomComponent/ClientSelector'
import ListDisplayer from 'components/CustomComponent/ListDisplayer'
import ClientCard from './clientCard'

const mapStateToProps = state => ({
  clients: state.clients,
})

const dispatchToProps = dispatch => ({
  loadClients: () => {
    dispatch(ACTION_LoadClients())
  },
})

@connect(mapStateToProps, dispatchToProps)
class DashboardFind extends React.Component {
  state = {
    clients: [],
  }

  componentDidMount() {
    const { loadClients } = this.props
    loadClients()
  }

  onChangeTown = clients => {
    this.setState({ clients })
  }

  render() {
    const { clients: serverData } = this.props
    const { clients } = this.state

    return (
      <Layout className="container-content">
        <div className="container-content--y">
          <Card title={<T>Select a town</T>}>
            <ClientSelector callback={this.onChangeTown} clients={serverData} />
          </Card>
        </div>
        <Card>
          <ListDisplayer
            grid={{ gutter: 16, xs: 1, sm: 1, md: 2, lg: 3, xl: 3, xxl: 3 }}
            dataSource={clients}
          >
            <ClientCard />
          </ListDisplayer>
        </Card>
      </Layout>
    )
  }
}

export default DashboardFind
