import _ from 'lodash'

//client.professions.some(r => p.includes(r.trim().toLowerCase())) //array compare if contains some values of another array
//client.professions.every(r => p.includes(r.trim().toLowerCase())) //array compare if contains all values of another array

export const filterClients = (clients = [], { professions = [], name = '' } = {}) => {
  if (_.isEmpty(professions) && _.isEmpty(name)) {
    return clients
  }
  const verify = ({ name: cn, professions: cp }, { professions: p, name: n }) => {
    return (
      (_.isEmpty(n) || (!_.isEmpty(n) && cn.toLowerCase().includes(n.toLowerCase()))) &&
      (_.isEmpty(p) || (!_.isEmpty(p) && p.every(r => cp.find(c => r === c.trim().toLowerCase()))))
    )
  }
  return clients.filter(client => verify(client, { professions, name }))
}

export const getAllProfessions = (clients = []) => {
  const professions = {}
  clients.forEach(client => {
    if (_.isArray(client.professions)) {
      client.professions.forEach(profession => {
        professions[profession.trim().toLowerCase()] = true
      })
    }
  })
  return Object.keys(professions)
}

export default {
  filterClients,
  getAllProfessions,
}
