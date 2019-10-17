import React from 'react';
import ReservationCards from '../ReservationCards/ReservationCards';
import './ReservationContainer.css'

const ReservationContainer= ({reservations, removeReservation}) => {
  
  const reservationCards = reservations.map(res => {
    return <ReservationCards
      id={res.id}
      name={res.name}
      date={res.date}
      time={res.time}
      numGuests={res.number}
      removeReservation={removeReservation}
      key={res.id}
    />
  })
  return (
    <section className='container'>
     {reservationCards}
    </section>
  )


}

export default ReservationContainer;


