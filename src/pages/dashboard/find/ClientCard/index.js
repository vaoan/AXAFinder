/*eslint no-unused-vars: 0*/

import React from 'react'
import Img from 'react-image'
import { Card, Row, Col, Empty, Tag, Button } from 'antd'
import T from 'components/SystemComponent/T'
import _ from 'lodash'
import Loader from 'components/LayoutComponents/Loader'

const ClientCard = ({
  selectFriendCallback,
  dataSource: { thumbnail, id, friends, professions, ...data },
}) => {
  const onSelectFriend = friend => {
    if (selectFriendCallback) {
      selectFriendCallback(friend)
    }
  }

  const datakeys = Object.keys(data)
  return (
    <Card style={{ minHeight: '700px' }}>
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

        {!_.isEmpty(friends) ? (
          <>
            <Col xs={8}>
              <strong>
                <T>friends</T>
              </strong>
            </Col>
            <Col xs={16} style={{ textAlign: 'right' }}>
              {friends.map(p => (
                <React.Fragment key={`${id}${p}`}>
                  <Button type="link" onClick={() => onSelectFriend(p)}>
                    <T>{p.trim().toLowerCase()}</T>
                  </Button>
                </React.Fragment>
              ))}
            </Col>
          </>
        ) : null}
        {!_.isEmpty(professions) ? (
          <>
            <Col xs={8}>
              <strong>
                <T>professions</T>
              </strong>
            </Col>
            <Col xs={16} style={{ textAlign: 'right' }}>
              {professions.map(p => (
                <React.Fragment key={`${id}${p}`}>
                  <Tag>
                    <T>{p.trim().toLowerCase()}</T>
                  </Tag>
                </React.Fragment>
              ))}
            </Col>
          </>
        ) : null}
      </Row>
    </Card>
  )
}

export default ClientCard
