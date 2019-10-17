import React from 'react';
import { shallow } from 'enzyme';
import ReservationCards from './ReservationCards';

describe('ReservationCards', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<ReservationCards
      name='Doggan'
      date='2020/09/02'
      time='3:00'
      number={4}
      key={10}
    />);

    expect(wrapper).toMatchSnapshot()
  })
})