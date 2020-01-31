export default (worker, type, callback) => {
  worker.addEventListener('message', e => {
    console.log(e)
    if (!e) return
    const {
      data: { SERVICEWORKER_type },
      data,
    } = e
    if (SERVICEWORKER_type === type) {
      if (callback) {
        callback({ ...data })
      }
    }
  })
}
