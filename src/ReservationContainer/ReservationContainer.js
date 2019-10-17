import React from 'react';
import ReservationCards from '../ReservationCards/ReservationCards'

const ReservationContainer= ({ name, date, time, numGuests,}) => {
  console.log('firing')
  // const favoriteClass = isFavorite ? 'favorite' : 'card'
  return (
    <section>
      <ReservationCards />
    </section>
  )
}

export default ReservationContainer;