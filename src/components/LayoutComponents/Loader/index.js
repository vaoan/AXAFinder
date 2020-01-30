import React from 'react'
import classNames from 'classnames'
import styles from '../../../assets/styles/components/loading.less'

const Loader = ({ spinning = true, fullScreen }) => (
  <div
    className={classNames(styles.loader, {
      [styles.hidden]: !spinning,
      [styles.fullScreen]: fullScreen,
    })}
  />
)

export default Loader
