import endpoints from 'constants/endpoints'
import Axios from 'axios'

/*eslint no-constant-condition: 0*/

// Moved api call into own function (for easy test swapping)
export function login({ email, password }) {
  let q
  if (true)
    q = new Promise((resolve, reject) => {
      setTimeout(() => {
        const random = Math.floor(Math.random() * 100)
        if (random > 5) {
          resolve({
            // `data` is the response that was provided by the server
            data: {
              token:
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRldkBwYXltZW50ZXouY29tIiwiZXhwIjoxNTc5OTg3NDcxLCJuYW1lIjoiRGV2IFVzZXIiLCJvcmlnX2lhdCI6MTU3OTk4Mzg3MSwicm9sZXMiOjJ9.c7XCFznz52xN3b7OIEAMIdRk2LOKMtRw-A4RjYUzozg',
            },
            // `status` is the HTTP status code from the server response
            status: 200,
            // `statusText` is the HTTP status message from the server response
            statusText: 'OK',
            // `headers` the headers that the server responded with
            // All header names are lower cased
            headers: {},
            // `config` is the config that was provided to `axios` for the request
            config: {},
            // `request` is the request that generated this response
            // It is the last ClientRequest instance in node.js (in redirects)
            // and an XMLHttpRequest instance in the browser
            request: {},
          })
        } else {
          reject(new Error('Emulate error'))
        }
      }, 250)
    })
  else
    q = Axios({
      method: 'post',
      url: `${endpoints.AUTH.LOGIN}`,
      data: { email, password },
      config: { headers: { 'Content-Type': 'multipart/form-data' } },
    })

  return q
}

export function verifyAccount({ token, ...data }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.floor(Math.random() * 100)
      if (random > 4) {
        resolve({
          data: {
            token,
            ...data,
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

export default {}
