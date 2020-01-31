import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import user from './user/reducers'
import clients from './clients/reducers'

export default history =>
  combineReducers({
    router: connectRouter(history),
    user,
    clients,
  })
