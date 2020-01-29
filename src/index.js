import React from 'react'
import ReactDOM from 'react-dom'
import Router from 'routers/mainRouter'
import './locales'
import { Provider } from 'react-redux'
import store, { history } from './models/store'
import * as serviceWorker from './serviceWorker'

import './assets/styles/index.less'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} />
  </Provider>,
  document.getElementById('root'),
)

serviceWorker.unregister()
