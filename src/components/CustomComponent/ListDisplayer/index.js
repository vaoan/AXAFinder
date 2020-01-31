import React from 'react'
import { List } from 'antd'

const gridDefault = {
  gutter: 16,
  xs: 1,
  sm: 1,
  md: 2,
  lg: 4,
  xl: 4,
  xxl: 4,
}

const ListDisplayer = ({
  dataSource = [],
  grid = gridDefault,
  pagination = {
    defaultPageSize: 12,
    pageSizeOptions: ['10', '20', '30'],
    showSizeChanger: true,
    hideOnSinglePage: true,
  },
  children = null,
  ...rest
}) => {
  return (
    <List
      grid={grid}
      pagination={pagination}
      dataSource={dataSource}
      renderItem={data => (
        <List.Item>
          {children ? React.cloneElement(children, { dataSource: data, ...rest }) : null}
        </List.Item>
      )}
    />
  )
}

export default ListDisplayer
