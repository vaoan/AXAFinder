import React, { Component } from 'react'
import { Form, Input, Button, Card, Row, Col } from 'antd'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Trans, withTranslation } from 'react-i18next'
import LangChanger from 'components/LayoutComponents/LangChanger'
import Logo from '../../../assets/images/logo.png'

@withTranslation()
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

              <Form layout="vertical" hideRequiredMark onSubmit={this.onSubmit}>
                <Form.Item label={<Trans>Email</Trans>}>
                  {form.getFieldDecorator('email', {
                    // initialValue: 'admin@mediatec.org',
                    rules: [{ required: true, message: 'Porfavor ingrese su correo electrónico' }],
                  })(<Input size="default" />)}
                </Form.Item>
                <Form.Item label={<Trans>Password</Trans>}>
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
                  >
                    <Trans>Login</Trans>
                  </Button>
                </Col>
                <Col xs={12}>
                  <Link to="/user/forgot" className="utils__link--underlined pull-right">
                    <Trans>Did you forget your password</Trans>
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
                    <Trans>Welcome to de admin</Trans>
                  </strong>
                </div>
                <div>
                  <div className="mb-4 ludwig ludwig--info ludwig--quote">
                    <Trans>Cover message 1</Trans>
                  </div>
                  <br />
                  <div className="mb-4 ludwig ludwig--info ludwig--quote">
                    <Trans>Cover message 2</Trans>
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
