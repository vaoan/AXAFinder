export default (worker, type, data = undefined) => {
  worker.postMessage({
    SERVICEWORKER_type: type,
    data,
  })
}
