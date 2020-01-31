import React from 'react'
import { Popover, Icon } from 'antd'

const GenericLabel = ({ title, content }) => {
  return (
    <span>
      {title}&nbsp;
      <Popover
        content={
          <div>
            <p>{content}</p>
          </div>
        }
        title={<h3>{title}</h3>}
      >
        <Icon type="question-circle" theme="filled" />
      </Popover>
    </span>
  )
}

export default GenericLabel
