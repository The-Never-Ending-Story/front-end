export function getAllWorldsData () {
  return fetch('https://7bf33ed3-7948-40dc-a8ab-0be48d89e61c.mock.pstmn.io/worlds')
  .then(response => {
    if(!response.ok) {
      throw new Error(response.status)
    } else {
      return response.json()
    }
  })
}

export function getSingleWorldData (id) {
  return fetch(`https://7bf33ed3-7948-40dc-a8ab-0be48d89e61c.mock.pstmn.io/world/${id}`)
  .then(response => {
    if(!response.ok) {
      throw new Error(response.status)
    } else {
      return response.json()
    }
  })
}