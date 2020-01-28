import React, { Component } from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

@Form.create()
@connect(({ user }) => ({ user }))
class Login extends Component {
  onSubmit = event => {
    event.preventDefault()
    const { form, dispatch } = this.props
    form.validateFields((error, values) => {
      if (!error) {
        dispatch({
          type: 'user/LOGIN',
          payload: values,
        })
      }
    })
  }

  render() {
    const {
      form,
      user: { loading },
    } = this.props
    return (
      <div>
        <Helmet title="Login" />
        <div className="login">
          <Form layout="vertical" className="mb-3" hideRequiredMark onSubmit={this.onSubmit}>
            <Form.Item label="Correo electrónico">
              {form.getFieldDecorator('email', {
                // initialValue: 'admin@mediatec.org',
                rules: [{ required: true, message: 'Porfavor ingrese su correo electrónico' }],
              })(<Input size="default" />)}
            </Form.Item>
            <Form.Item label="Contraseña">
              {form.getFieldDecorator('password', {
                // initialValue: 'cleanui',
                rules: [{ required: true, message: 'Porfavor ingrese su contraseña' }],
              })(<Input.Password placeholder="Porfavor ingrese su contraseña" />)}
            </Form.Item>
            <Form.Item>
              {form.getFieldDecorator('remember', {
                valuePropName: 'checked',
                // initialValue: true,
              })(<Checkbox>Recordarme</Checkbox>)}
              <Link to="/user/forgot" className="utils__link--underlined pull-right">
                ¿Olvidó su contraseña?
              </Link>
            </Form.Item>
            <Button type="primary" className="width-150 mr-4" htmlType="submit" loading={loading}>
              Ingresar
            </Button>
          </Form>
        </div>
      </div>
    )
  }
}

export default Login
