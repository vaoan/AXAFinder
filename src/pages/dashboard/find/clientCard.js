/*eslint no-unused-vars: 0*/

import React from 'react'
import { Card, Avatar, Row, Col } from 'antd'
import T from 'components/SystemComponent/T'
import _ from 'lodash'

const ClientCard = ({ dataSource: { thumbnail, id, friends, professions, ...data } }) => {
  const datakeys = Object.keys(data)
  return (
    <Card>
      <Avatar shape="square" size="large%" src={thumbnail} icon="user" />
      <Row gutter={[16, 16]}>
        {datakeys.map(info => (
          <React.Fragment key={`${info}${id}`}>
            <Col xs={12}>
              <T>{info}</T>
            </Col>
            <Col xs={12}>
              {_.isArray(data[info]) || _.isObject(data[info])
                ? JSON.stringify(data[info], null, 2)
                : data[info]}
            </Col>
          </React.Fragment>
        ))}
      </Row>
    </Card>
  )
}

export default ClientCard
