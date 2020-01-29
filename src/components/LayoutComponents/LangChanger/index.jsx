import React from 'react'
import { useTranslation, Trans } from 'react-i18next'
import { Button } from 'antd'

const LangChanger = () => {
  const { i18n } = useTranslation()

  const changeLanguage = lng => {
    i18n.changeLanguage(lng)
  }
  return (
    <Button.Group style={{ width: '100%' }}>
      <Button style={{ width: '50%' }} onClick={() => changeLanguage('en')}>
        <Trans>English</Trans>
      </Button>
      <Button style={{ width: '50%' }} onClick={() => changeLanguage('es')}>
        <Trans>Spanish</Trans>
      </Button>
    </Button.Group>
  )
}

export default LangChanger
