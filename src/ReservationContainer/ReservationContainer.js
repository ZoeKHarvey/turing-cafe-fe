import React from 'react';
import ReservationCards from '../ReservationCards/ReservationCards'

const ReservationContainer= ({reservations}) => {
  console.log('res', reservations)
  // const favoriteClass = isFavorite ? 'favorite' : 'card'
  const reservationCards = reservations.map(res => {
    return <ReservationCards
      id={res.id}
      name={res.name}
      date={res.date}
      time={res.time}
      numGuests={res.number}
      key={res.id}
    />
  })
  return (
    <section>
     {reservationCards}
    </section>
  )


}

export default ReservationContainer;


