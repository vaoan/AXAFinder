import React, { Component } from 'react'
import { Form, Input, Button, Card, Row, Col } from 'antd'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import T from 'components/SystemComponent/T'
import LangChanger from 'components/LayoutComponents/LangChanger'
import { loginAction } from 'models/redux/user/actions'
import Logo from '../../../assets/images/logo.png'

@Form.create()
@connect(({ user }) => ({ user }))
class Login extends Component {
  onSubmit = event => {
    event.preventDefault()
    const { form, dispatch } = this.props
    form.validateFields((error, values) => {
      const { email, password } = values
      if (!error) {
        dispatch(loginAction({ email, password }))
      }
    })
  }

  render() {
    const {
      form,
      user: { loading },
    } = this.props
    return (
      <>
        <Helmet title="Login" />

        <Row type="flex" justify="center" className="w-100" style={{ maxWidth: '800px' }}>
          <Col xs={14}>
            <Card className="full-centering h-100" bodyStyle={{ width: '100%' }}>
              <div className="full-centering">
                <img
                  src={Logo}
                  className="img-fluid"
                  style={{
                    width: '70%',
                  }}
                  alt="DaviPay"
                />
              </div>

              <Form layout="vertical" hideRequiredMark>
                <Form.Item label={<T>Email</T>}>
                  {form.getFieldDecorator('email', {
                    // initialValue: 'admin@mediatec.org',
                    rules: [{ required: true, message: 'Porfavor ingrese su correo electrónico' }],
                  })(<Input size="default" />)}
                </Form.Item>
                <Form.Item label={<T>Password</T>}>
                  {form.getFieldDecorator('password', {
                    // initialValue: 'cleanui',
                    rules: [{ required: true, message: 'Porfavor ingrese su contraseña' }],
                  })(<Input.Password placeholder="Porfavor ingrese su contraseña" />)}
                </Form.Item>
              </Form>
              <Row type="flex" align="middle">
                <Col xs={12}>
                  <Button
                    type="primary"
                    className="width-150 mr-4"
                    htmlType="submit"
                    loading={loading}
                    onClick={this.onSubmit}
                  >
                    <T>Login</T>
                  </Button>
                </Col>
                <Col xs={12}>
                  <Link to="/user/forgot" className="utils__link--underlined pull-right">
                    <T>Did you forget your password</T>
                  </Link>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col xs={10}>
            <Card className="bg-primary-color h-100" bodyStyle={{ width: '100%', height: '100%' }}>
              <div className="h-100 equal-distribution ">
                <div>
                  <strong className="text-left" style={{ fontSize: '1.35rem' }}>
                    <T>Welcome to de admin</T>
                  </strong>
                </div>
                <div>
                  <div className="mb-4 ludwig ludwig--info ludwig--quote">
                    <T>Cover message 1</T>
                  </div>
                  <br />
                  <div className="mb-4 ludwig ludwig--info ludwig--quote">
                    <T>Cover message 2</T>
                  </div>
                </div>
                <LangChanger />
              </div>
            </Card>
          </Col>
        </Row>
      </>
    )
  }
}

export default Login
