export function getAllWorldsData () {
  return fetch('https://hyperloom-d209dae18b26.herokuapp.com/worlds?format=json')
  .then(response => {
    if(!response.ok) {
      throw new Error(response.status)
    } else {
      return response.json()
    }
  })
}

export function getSingleWorldData (id) {
  return fetch(`https://hyperloom-d209dae18b26.herokuapp.com/worlds/${id}?format=json`)
  .then(response => {
    if(!response.ok) {
      throw new Error(response.status)
    } else {
      return response.json()
    }
  })
}