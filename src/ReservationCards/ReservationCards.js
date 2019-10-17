import React from 'react';

const ReservationCards= ({ name, date, time, numGuests,}) => {
  // const favoriteClass = isFavorite ? 'favorite' : 'card'
  return (
    <section>
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{time}</p>
      <p>{numGuests}</p>
      <button>🗑</button>
    </section>
  )
}

export default ReservationCards;