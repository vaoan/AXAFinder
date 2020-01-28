import React, { Component } from 'react'
import { Spin, Button, Popconfirm, Tabs, Modal } from 'antd'
import { withRouter } from 'react-router-dom'
import TabTitle from 'components/CustomComponents/tabTitle'

@withRouter
class SimpleWizzard extends Component {
  state = {
    key: 'tab0',
    wizzardData: {},
    isLoading: false,
    isViewOnly: false,
    //isEditing: false,
  }

  onTabChangeManual = (key, type, actualTab) => {
    const { isViewOnly } = this.state
    if (key < actualTab && !isViewOnly) {
      this.setState({ [type]: key })
    }
  }

  onSubmitDefault = () => {
    Modal.warning({
      title: 'No existe accion para continuar',
      content: 'Agregue una funcion onSubmit al componente SimpleWizzard en sus props',
    })
  }

  onTabChange = (key, type) => {
    this.setState({ [type]: key })
  }

  nextPage = (actualTab, tabList) => {
    tabList.forEach((element, key) => {
      if (element.key === actualTab) {
        const next = key + 1
        if (next > tabList.length) console.log('end')
        else this.onTabChange(tabList[next].key, `key`)
      }
    })
  }

  tabCheck = (tab, tabList) => {
    const { key } = this.state
    let indexKey = -1
    let tabKey = -1
    tabList.forEach((element, index) => {
      if (element.key === key) indexKey = index
      if (element.key === tab) tabKey = index
    })
    return tabKey < indexKey
  }

  updateWizzardData = data => {
    this.setState(prevState => ({
      wizzardData: {
        ...prevState.wizzardData,
        ...data,
      },
    }))
  }

  render() {
    const preFix = 'tab'
    const { props, onSubmitDefault } = this
    const { isLoading, key, wizzardData } = this.state
    const {
      renderList,
      schemaSource = {},
      dataSource = {},
      noFreeMovement = true,
      onSubmit = onSubmitDefault,
      destroyInactiveTabPane = true,
    } = props

    const finalData = {
      ...dataSource,
      ...wizzardData,
    }

    let tabList = renderList.map((element, i) => {
      const newKey = i
      const keyName = `${preFix}${newKey}`
      return {
        title: <TabTitle title={element.title} />,
        key: keyName,
        content: React.cloneElement(element.content, {
          dataSource: finalData,
          schemaSource,
        }),
      }
    })

    tabList = tabList.map(element => ({
      ...element,
      title: React.cloneElement(element.title, {
        check: this.tabCheck(element.key, tabList),
      }),
    }))

    return (
      <>
        <Spin spinning={!!(isLoading || props.isLoading)} tip="Cargando...">
          <Tabs
            destroyInactiveTabPane={destroyInactiveTabPane}
            activeKey={key}
            onChange={tab => {
              if (noFreeMovement) {
                this.onTabChangeManual(tab, 'key', key)
              } else {
                this.onTabChange(tab, 'key')
              }
            }}
          >
            {tabList.map(pane => (
              <Tabs.TabPane tab={pane.title} key={pane.key}>
                {React.cloneElement(pane.content, {
                  onSubmit: response => {
                    this.updateWizzardData(response)
                    if (key >= `${preFix}${tabList.length - 1}`) {
                      // console.log('finish')
                      onSubmit(finalData)
                    } else {
                      this.nextPage(key, tabList)
                    }
                  },
                })}
              </Tabs.TabPane>
            ))}
          </Tabs>
        </Spin>
      </>
    )
  }
}

@withRouter
export class ViewButtonWizzardHandler extends Component {
  render() {
    const {
      urlBack = '/',
      history,
      onSubmit,
      strNext = 'Continuar',
      strCancel = 'Descartar',
    } = this.props
    return (
      <>
        <hr />
        <div className="text-right">
          <Button.Group size="big">
            <Popconfirm
              title="¿Esta seguro de descartar?"
              onConfirm={() => history.push(urlBack)}
              okText="Si"
              cancelText="No"
            >
              <Button type="link" className="gray mr-3">
                <u>{strCancel}</u>
              </Button>
            </Popconfirm>
            <Button type="primary" onClick={onSubmit}>
              {strNext}
            </Button>
          </Button.Group>
        </div>
      </>
    )
  }
}

export default SimpleWizzard
