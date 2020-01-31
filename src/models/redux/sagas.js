import { all } from 'redux-saga/effects'
import user from './user/sagas'
import clients from './clients/sagas'

export default function* rootSaga() {
  yield all([user(), clients()])
}
