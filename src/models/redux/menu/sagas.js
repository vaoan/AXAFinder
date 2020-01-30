import { all, put, call, takeEvery } from 'redux-saga/effects'
import { getTopMenuData } from 'services/menu'
import { describeUsuario } from 'factories/user'
import actions from './actions'

export function* GET_DATA() {
  const { MENU } = describeUsuario()
  const menuLeftData = yield call(MENU)
  const menuTopData = yield call(getTopMenuData)
  yield put({
    type: actions.SET_STATE,
    payload: {
      menuLeftData,
      menuTopData,
    },
  })
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.GET_DATA, GET_DATA),
    //GET_DATA(), // run once on app load to fetch menu data
  ])
}
