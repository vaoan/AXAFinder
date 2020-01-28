import React from 'react'
import { Row, Col, Input, Button } from 'antd'

class ColorInput extends React.Component {
  state = { vars: { '@primary-color': '#dddddd' } }

  onChange = e => {
    const color = e.target.value
    if (color.match(/^#[a-f0-9]{3,6}$/i)) {
      const { vars } = this.state
      vars['@primary-color'] = color
      this.setState({ vars })
    }
  }

  updateVars = () => {
    const { modifyVars } = window.less
    const { vars } = this.state
    modifyVars(vars).then(() => {
      console.log('Theme updated successfully')
    })
  }

  render() {
    return (
      <Row>
        <Col xs={16}>
          Primary Color: <Input onChange={this.onChange} />
        </Col>
        <Col xs={24}>
          <Button type="primary" onClick={this.updateVars}>
            Update Vars
          </Button>
        </Col>
      </Row>
    )
  }
}
export default ColorInput
