import { all } from 'redux-saga/effects'
import user from './user/sagas'
/* import menu from './menu/sagas'
import settings from './settings/sagas'
import cupones from './cupones/sagas'
import stores from './stores/sagas'
import segments from './segments/sagas'
import commerce from './commerce/sagas'
import products from './products/sagas'
import challenges from './challenge/sagas'*/

export default function* rootSaga() {
  yield all([
    user(),
    /* menu(),
    settings(),
    cupones(),
    commerce(),
    stores(),
    segments(),
    products(),
    challenges(),*/
  ])
}
