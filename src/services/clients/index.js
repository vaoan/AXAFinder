import store from 'models/store'
import * as data from '../../assets/resources/clients.json'

export function loadClients() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const {
        user: { token },
      } = store.getState()
      console.log('Auth Token', token)
      const random = Math.floor(Math.random() * 100)
      if (random > 4) {
        resolve({
          data: {
            token,
            clients: data,
          },
          status: 200,
          statusText: 'OK',
          headers: {},
          config: {},
          request: {},
        })
      } else {
        reject(new Error('Emulate token error'))
      }
    })
  })
}

export default {
  loadClients,
}
