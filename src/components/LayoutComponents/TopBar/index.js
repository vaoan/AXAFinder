import React from 'react'
import { Button } from 'antd'
import { FormattedMessage } from 'react-intl'
import HomeMenu from './HomeMenu'
import ProjectManagement from './ProjectManagement'
import IssuesHistory from './IssuesHistory'
import LiveSearch from './LiveSearch'
import BitcoinPrice from './BitcoinPrice'
import ProfileMenu from './ProfileMenu'
import LanguageSelector from './LanguageSelector'
import styles from './style.module.scss'

class TopBar extends React.Component {
  render() {
    return (
      <div
        className={styles.topbar}
        style={{
          flexDirection: 'row-reverse',
        }}
      >
        <div>
          <ProfileMenu />
        </div>
        <div className="mr-4" style={{ display: 'none' }}>
          <IssuesHistory />
        </div>
        <div className="mr-4" style={{ display: 'none' }}>
          <ProjectManagement />
        </div>
        <div className="mr-auto" style={{ display: 'none' }}>
          <LiveSearch />
        </div>
        <a
          href="https://themeforest.net/item/clean-ui-react-admin-template/21938700"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4 d-none d-sm-inline"
          style={{ display: 'none' }}
        >
          <Button type="danger" style={{ display: 'none' }}>
            <FormattedMessage id="topBar.buyNow" />
          </Button>
        </a>
        <div className="mr-4" style={{ display: 'none' }}>
          <BitcoinPrice />
        </div>
        <div className="mr-4" style={{ display: 'none' }}>
          <LanguageSelector />
        </div>
        <div className="mr-4" style={{ display: 'none' }}>
          <HomeMenu />
        </div>
      </div>
    )
  }
}

export default TopBar
