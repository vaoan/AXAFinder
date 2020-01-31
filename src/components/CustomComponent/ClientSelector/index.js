import React, { Component } from 'react'
import { Select } from 'antd'
import { withTranslation } from 'react-i18next'

@withTranslation()
class ClientSelector extends Component {
  onChange = value => {
    const { callback, clients } = this.props
    callback(clients[value] || [])
  }
  render() {
    const { t, clients } = this.props
    const towns = Object.keys(clients)

    return (
      <Select
        showSearch
        className="w-100"
        onChange={this.onChange}
        placeholder={`${t('Select a town')}`}
        optionFilterProp="children"
        filterOption={(input, option) => {
          return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }}
      >
        {towns.map(town => (
          <Select.Option value={town} key={town}>
            {town}
          </Select.Option>
        ))}
      </Select>
    )
  }
}

export default ClientSelector
