import { all, takeEvery, put, call } from 'redux-saga/effects'
import { login } from 'services/user'
import actions from './actions'

export function* LOGIN({ payload: { email, password } }) {
  console.log({ email, password })
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
      payload: { ...success },
    })
  } else {
    yield put({
      type: actions.SET_STATE,
    })
  }
}

export function* LOAD_CURRENT_ACCOUNT({ token, ...data }) {
  console.log(data)
  yield put({
    type: actions.SET_STATE,
    payload: {
      loading: true,
    },
  })

  if (token) {
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
    yield put({ type: actions.LOAD_MENU })
  }

  yield put({
    type: actions.SET_STATE,
    payload: {
      loading: false,
    },
  })
}

export function* LOGOUT() {
  // yield call(logout)
  localStorage.clear()
  yield put({
    type: actions.SET_STATE,
  })
}

export default function* rootSaga() {
  const dataUser = {
    payload: {},
  }
  const userLS = localStorage.getItem('user')
  if (userLS) {
    dataUser.payload = JSON.parse(userLS)
  }

  yield all([
    takeEvery(actions.LOGIN, LOGIN),
    takeEvery(actions.LOAD_CURRENT_ACCOUNT, LOAD_CURRENT_ACCOUNT),
    takeEvery(actions.LOGOUT, LOGOUT),
    LOAD_CURRENT_ACCOUNT(dataUser), // run once on app load to check user auth
  ])
}
