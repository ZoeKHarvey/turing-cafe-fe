import React from 'react';
import { shallow } from 'enzyme';
import ReservationContainer from './ReservationContainer';

describe('Reservation Container', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    let reservations = [{ name: 'Dog', date: '2019/04/04', time: '4:00', number: 4, id: 14 }, 
    { name: 'Cat', date: '2019/03/03', time: '7:00', number: 2, id: 10 }]
    const wrapper = shallow(<ReservationContainer
      reservations={reservations}
      />);
    expect(wrapper).toMatchSnapshot();
  });
});