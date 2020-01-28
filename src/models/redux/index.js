import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import userReducer from './user/reducers'

// import challenges from './challenge/reducers'

export default history =>
  combineReducers({
    router: connectRouter(history),
    user: userReducer,
    /* menu,
    settings,
    cupones,
    stores,
    products,
    commerce,
    segments,
    challenges,*/
  })
