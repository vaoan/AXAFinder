import React from 'react'
import { all, takeEvery, put, call } from 'redux-saga/effects'
import { message } from 'antd'
import { loadClients } from 'services/clients'
import T from 'components/SystemComponent/T'
import actions from './actions'

export function* LOAD_ASYNC() {
  const pop = message.loading(<T>Loading data</T>)
  let success
  try {
    success = yield call(loadClients)
  } catch (error) {
    success = null
  }
  if (success) {
    yield put({
      type: actions.LOAD,
      payload: { ...success.data.clients.default },
    })
    pop.then(() => message.success(<T>Load finished</T>))
  } else {
    pop.then(() => message.error(<T>Load failed</T>))
  }
}

export default function* rootSaga() {
  yield all([takeEvery(actions.LOAD_ASYNC, LOAD_ASYNC)])
}
