import { filterClients, getAllProfessions } from '.'

describe('Factories::clients::filterClients - The search must exclude all cases', () => {
  it(`1. Should return without any filters If no search params`, () => {
    expect(filterClients(data)).toEqual(expected1)
  })
  it(`2. Should return data filtered if params. Name and professions should be case insensitive`, () => {
    expect(filterClients(data, { name: 'tobus QUICK' })).toEqual(expected2)
  })
})

describe('Factories::clients::getAllProfessions', () => {
  it(`1. Should return the professions (all lowercased and unique) available in the given list of clients`, () => {
    expect(getAllProfessions(data)).toEqual(expected3)
  })
  it(`2. Should return an empty array if there are no clients or the client array is empty`, () => {
    expect(filterClients()).toEqual(expected4)
  })
})

const data = [
  {
    id: 0,
    name: 'Tobus Quickwhistle',
    thumbnail:
      'http://www.publicdomainpictures.net/pictures/10000/nahled/thinking-monkey-11282237747K8xB.jpg',
    age: 306,
    weight: 39.065952,
    height: 107.75835,
    hair_color: 'Pink',
    professions: ['Metalworker', 'Woodcarver', 'Stonecarver', ' Tinker', 'Tailor', 'Potter'],
    friends: ['Cogwitz Chillwidget', 'Tinadette Chillbuster'],
  },
  {
    id: 1,
    name: 'Fizkin Voidbuster',
    thumbnail: 'http://www.publicdomainpictures.net/pictures/120000/nahled/white-hen.jpg',
    age: 288,
    weight: 35.279167,
    height: 110.43628,
    hair_color: 'Green',
    professions: ['Brewer', 'Medic', 'Prospector', 'Gemcutter', 'Mason', 'Tailor'],
    friends: [],
  },
  {
    id: 117,
    name: 'Tobus Quickpiston',
    thumbnail:
      'http://www.publicdomainpictures.net/pictures/20000/nahled/squirrel-in-winter-11298746828jAB.jpg',
    age: 235,
    weight: 42.93495,
    height: 119.82319,
    hair_color: 'Green',
    professions: ['Cook', 'Tailor'],
    friends: ['Emmadette Voidrocket'],
  },
  {
    id: 729,
    name: 'Tobus Quickrocket',
    thumbnail: 'http://www.publicdomainpictures.net/pictures/10000/velka/1-1248158051Ix2h.jpg',
    age: 88,
    weight: 41.496223,
    height: 116.17772,
    hair_color: 'Green',
    friends: ['Ecki Felslicer', 'Cogwitz Chillwidget'],
  },
]

const expected1 = data
const expected2 = [data[0], data[2], data[3]]
const expected3 = [
  'metalworker',
  'woodcarver',
  'stonecarver',
  'tinker',
  'tailor',
  'potter',
  'brewer',
  'medic',
  'prospector',
  'gemcutter',
  'mason',
  'cook',
]
const expected4 = []
