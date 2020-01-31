import React from 'react'
import { all, takeEvery, put, call } from 'redux-saga/effects'
import { notification } from 'antd'
import store from 'store'
import { login, verifyAccount } from 'services/user'
import T from 'components/SystemComponent/T'
import { LOCALSTORAGE_SESSION_ATTRIBUTE } from 'constants/base'
import actions from './actions'

export function* LOGIN({ payload: { email, password } }) {
  yield put({
    type: actions.SET_STATE,
    payload: {
      loading: true,
    },
  })
  let success
  try {
    success = yield call(login, email, password)
  } catch (error) {
    success = null
  }
  if (success) {
    yield put({
      type: actions.LOAD_CURRENT_ACCOUNT,
      payload: { ...success.data },
    })
  } else {
    yield put({
      type: actions.SET_STATE,
    })
    notification.warning({
      message: <T>Login error</T>,
      description: <T>Login error description</T>,
    })
  }
}

export function* LOAD_CURRENT_ACCOUNT({ payload: { token, ...data } }, auto = false) {
  // console.log(data, token)
  yield put({
    type: actions.RETRIEVING,
    payload: {
      loading: true,
    },
  })
  let response
  try {
    response = yield call(verifyAccount, { token, ...data })
  } catch (e) {
    response = null
  }

  if (response) {
    const { uid: id, photoURL: avatar, name, email, roles } = data
    yield put({
      type: actions.SET_STATE,
      payload: {
        id,
        name,
        email,
        avatar,
        role: roles,
        token,
        authorized: true,
      },
    })
    if (!auto) {
      notification.success({
        message: <T>Login success</T>,
        description: <T>Login success description</T>,
      })
    }
    store.set(LOCALSTORAGE_SESSION_ATTRIBUTE, { token, ...data })
    // yield put({ type: actions.LOAD_MENU })
  } else {
    console.log('Login token error')
    if (!auto)
      notification.info({
        message: <T>Login token error</T>,
        description: <T>Login token error description</T>,
      })
    yield put({
      type: actions.SET_STATE,
    })
    store.clearAll()
  }

  yield put({
    type: actions.RETRIEVING,
    payload: {
      loading: false,
    },
  })
}

export function* LOGOUT() {
  // yield call(logout)
  store.clearAll()
  yield put({
    type: actions.SET_STATE,
  })
}

export default function* rootSaga() {
  const dataUser = {
    payload: {},
  }
  const userLS = store.get(LOCALSTORAGE_SESSION_ATTRIBUTE)

  if (userLS && typeof userLS === 'string') {
    try {
      dataUser.payload = JSON.parse(userLS)
    } catch (e) {
      dataUser.payload = {}
    }
  }

  yield all([
    takeEvery(actions.LOGIN, LOGIN),
    takeEvery(actions.LOAD_CURRENT_ACCOUNT, LOAD_CURRENT_ACCOUNT),
    takeEvery(actions.LOGOUT, LOGOUT),
    LOAD_CURRENT_ACCOUNT(dataUser, true), // run once on app load to check user auth
  ])
}
