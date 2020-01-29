import endpoints from 'constants/endpoints'
import Axios from 'axios'

// Moved api call into own function (for easy test swapping)
export function login({ email, password }) {
  return Axios({
    method: 'post',
    url: `${endpoints.AUTH.LOGIN}`,
    data: { email, password },
    config: { headers: { 'Content-Type': 'multipart/form-data' } },
  })
}

export default {}
