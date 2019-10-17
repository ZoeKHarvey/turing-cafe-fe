
export const getReservations = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
  .then(response => {
    if(!response.ok) {
      throw Error('Error fetching reservations')
    }
    return response.json()
  })
}

// export const getIdeas = () => {
//   return fetch('http://localhost:3001/api/v1/ideas')
//   .then(response => {
//     if(!response.ok) {
//       throw Error('Error fetching ideas. Try again later.')
//     }
//     return response.json()
//   })
// };