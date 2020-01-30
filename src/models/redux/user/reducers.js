import actions from './actions'

const initialState = {
  id: '',
  name: '',
  role: '',
  email: '',
  avatar: '',
  token: null,
  authorized: false,
  loading: false,
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_STATE: {
      const { payload = {} } = action
      return { ...initialState, ...payload }
    }
    case actions.RETRIEVING: {
      const { payload = {} } = action
      return { ...state, ...payload }
    }
    default:
      return state
  }
}
