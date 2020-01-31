/*eslint no-unused-vars: 0*/

import React from 'react'
import Img from 'react-image'
import { Card, Row, Col, Empty, Tag } from 'antd'
import T from 'components/SystemComponent/T'
import _ from 'lodash'
import Loader from 'components/LayoutComponents/Loader'

const ClientCard = ({ dataSource: { thumbnail, id, friends, professions, ...data } }) => {
  const datakeys = Object.keys(data)
  return (
    <Card>
      <div className="img__container">
        <Img
          src={[thumbnail]}
          unloader={<Empty />}
          className="img__element"
          decode
          loader={<Loader />}
        />
      </div>
      <br />
      <Row gutter={[16, 16]}>
        {datakeys.map(info => (
          <React.Fragment key={`${info}${id}`}>
            <Col xs={8}>
              <strong>
                <T>{info}</T>
              </strong>
            </Col>
            <Col xs={16} style={{ textAlign: 'right' }}>
              {_.isArray(data[info]) || _.isObject(data[info])
                ? JSON.stringify(data[info], null, 2)
                : data[info]}
            </Col>
          </React.Fragment>
        ))}
        <Col xs={8}>
          <strong>
            <T>professions</T>
          </strong>
        </Col>
        <Col xs={16} style={{ textAlign: 'center', minHeight: '110px' }}>
          {professions.map(p => (
            <React.Fragment key={`${id}${p}`}>
              <Tag>
                <T>{p.trim().toLowerCase()}</T>
              </Tag>
            </React.Fragment>
          ))}
        </Col>
      </Row>
    </Card>
  )
}

export default ClientCard
