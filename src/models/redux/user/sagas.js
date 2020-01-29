import { all, takeEvery, put, call } from 'redux-saga/effects'
import { notification } from 'antd'
import { login, currentAccount, logout } from 'services/user'
import actions from './actions'

export function* LOGIN({ payload }) {
  const { email, password } = payload
  yield put({
    type: 'user/SET_STATE',
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
    notification.success({
      message: 'Sesion iniciada',
      description: 'Ha ingresado correctamente a DaviPay',
    })
    success.email = email
    yield put({
      type: 'user/LOAD_CURRENT_ACCOUNT',
      payload: { ...success },
    })
  } else {
    notification.warn({
      message: 'Sesion fallida',
      description:
        'La combinacion de usuario y contraseña es incorrecta. Porfavor verifique e intente nuevamente',
    })
    yield put({
      type: 'user/SET_STATE',
      payload: {
        loading: false,
      },
    })
  }
}

export function* LOAD_CURRENT_ACCOUNT(data) {
  const { payload } = data
  yield put({
    type: 'user/SET_STATE',
    payload: {
      loading: true,
    },
  })
  const response = yield call(currentAccount, payload)
  if (response.decoded) {
    const { uid: id, photoURL: avatar, name, email, roles } = response.decoded
    yield put({
      type: 'user/SET_STATE',
      payload: {
        id,
        name,
        email,
        avatar,
        role: roles,
        token: response,
        authorized: true,
      },
    })
    yield put({ type: actions.LOAD_MENU })
  }

  yield put({
    type: 'user/SET_STATE',
    payload: {
      loading: false,
    },
  })
}

export function* LOGOUT() {
  yield call(logout)
  localStorage.clear()
  yield put({
    type: 'user/SET_STATE',
    payload: {
      id: '',
      name: '',
      role: '',
      email: '',
      avatar: '',
      token: null,
      authorized: false,
      loading: false,
    },
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
