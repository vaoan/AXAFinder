import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

// import challenges from './challenge/reducers'

export default history =>
  combineReducers({
    router: connectRouter(history),
    /* user,
    menu,
    settings,
    cupones,
    stores,
    products,
    commerce,
    segments,
    challenges,*/
  })
