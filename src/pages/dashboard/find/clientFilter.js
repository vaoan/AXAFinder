import React from 'react'
import { Form, Input, Select } from 'antd'
import GenericLabel from 'components/CustomComponent/GenericLabel'
import { withTranslation } from 'react-i18next'
import T from 'components/SystemComponent/T'
import { getAllProfessions, filterClients } from 'factories/clients'

const onChange = (props, { name = '', professions = [] } = {}) => {
  const { callback, dataSource } = props
  if (callback) {
    const filtered = filterClients(dataSource, { name, professions })
    callback(filtered)
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
    this.setProfessions()
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
                  console.log(option.props.children)
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
