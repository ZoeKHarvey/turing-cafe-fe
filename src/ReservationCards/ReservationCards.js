import React from 'react';
import './ReservationCards.css'

const ReservationCards= ({ id, name, date, time, numGuests, removeReservation}) => {
  return (
    <section className="cards">
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{time}</p>
      <p>Number of Guests: {numGuests}</p>
      <button className="cancel__btn" onClick={() => removeReservation(id)}>Cancel</button>
    </section>
  )
}

export default ReservationCards;