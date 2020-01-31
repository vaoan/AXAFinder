import { service_workers_events } from 'constants/service_workers'
import listenerWebWorker from 'utils/listenerWebWorker'
import postWebWorker from 'utils/postWebWorker'
import { filterClients } from '.'

listenerWebWorker(self, service_workers_events.FILTER_IN, SERVICE_filterClients)

function SERVICE_filterClients(eventData = {}) {
  const { data } = eventData
  if (!data) return
  const { dataSource, filters: { name, professions } = {} } = data
  const filtered = filterClients(dataSource, { name, professions })
  postWebWorker(self, service_workers_events.FILTER_OUT, filtered)
}
