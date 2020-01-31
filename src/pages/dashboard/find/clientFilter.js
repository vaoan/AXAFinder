import React from 'react'
import { Form, Input, Select } from 'antd'
import GenericLabel from 'components/CustomComponent/GenericLabel'
import { withTranslation } from 'react-i18next'
import T from 'components/SystemComponent/T'
import { getAllProfessions } from 'factories/clients'
import { service_workers_events } from 'constants/service_workers'
import ClientsWorker from 'factories/clients/index.worker'
import postWebWorker from 'utils/postWebWorker'
import listenerWebWorker from 'utils/listenerWebWorker'

let worker = {}

const onChange = (props, { name = '', professions = [] } = {}) => {
  const { callback, dataSource } = props
  if (callback && worker) {
    postWebWorker(worker, service_workers_events.FILTER_IN, {
      dataSource,
      filters: { name, professions },
    })
  }
}

@withTranslation()
@Form.create({
  onFieldsChange(props, changedFields, allValues) {
    const {
      name: { value: name },
      professions: { value: professions },
    } = allValues
    onChange(props, { name, professions })
  },
})
class ClientFilter extends React.Component {
  state = {
    professions: [],
  }

  componentDidMount() {
    worker = new ClientsWorker()
    this.setProfessions()
    listenerWebWorker(worker, service_workers_events.FILTER_OUT, eventData => {
      const { data: filtered } = eventData
      const { callback } = this.props
      if (callback) {
        callback(filtered)
      }
    })
  }

  componentDidUpdate(prevProps) {
    const { dataSource } = this.props
    if (dataSource !== prevProps.dataSource) {
      this.setProfessions()
    }
  }

  setProfessions = () => {
    const {
      props,
      props: { dataSource },
    } = this
    onChange(props)
    this.setState({ professions: getAllProfessions(dataSource) })
  }

  render() {
    const { form, t } = this.props
    const { professions } = this.state
    return (
      <>
        <Form layout="vertical" className="mb-3">
          <Form.Item
            label={
              <GenericLabel
                title={<T>name</T>}
                content={<T>You can look for members by filtering with their name</T>}
              />
            }
          >
            {form.getFieldDecorator('name')(
              <Input placeholder={`${t('please type a name')}`} size="default" />,
            )}
          </Form.Item>
          <Form.Item
            label={
              <GenericLabel
                title={<T>professions</T>}
                content={<T>You can look for members by filtering with their profession</T>}
              />
            }
          >
            {form.getFieldDecorator('professions')(
              <Select
                showSearch
                mode="multiple"
                placeholder={`${t('please select the professions you are looking for')}`}
                optionFilterProp="children"
                filterOption={(input, option) => {
                  return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }}
              >
                {professions.map(profession => (
                  <Select.Option key={profession} value={profession}>
                    {t(profession)}
                  </Select.Option>
                ))}
              </Select>,
            )}
          </Form.Item>
        </Form>
      </>
    )
  }
}

export default ClientFilter
