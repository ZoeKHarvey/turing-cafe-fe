
export const getReservations = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
  .then(response => {
    if(!response.ok) {
      throw Error('Error fetching reservations')
    }
    return response.json()
  })
}
