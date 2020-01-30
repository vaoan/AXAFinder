import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import user from './user/reducers'
/* import menu from './menu/reducers'
import settings from './settings/reducers' */

// import challenges from './challenge/reducers'

export default history =>
  combineReducers({
    router: connectRouter(history),
    user,
    /* menu,
    settings,
    cupones,
    stores,
    products,
    commerce,
    segments,
    challenges,*/
  })
