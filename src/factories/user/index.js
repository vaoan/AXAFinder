import store from 'models/store'
import _ from 'lodash'

export const validateRole = () => {
  const {
    user: { token },
  } = store.getState()
  return !_.isEmpty(token)
}

export default {
  validateRole,
}
