import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import { getReservations } from '../apiCalls';
jest.mock('../apiCalls.js')

describe('App', () => {
  beforeEach(() => {
    getReservations.mockImplementation(() => {
      return Promise.resolve([{ id:1, name: 'name', date: '2020/02/02', time: '2:00', number: 2}])
    })
  })

  it('should match the snapshot', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should retrieve reservations after mounting', () => {
    shallow(<App />);
    expect(getReservations).toHaveBeenCalled()
  })

  it('should update state when addReservation is called', async () => {
    const wrapper = shallow(<App />);
    const mockReservation = { name: 'a name', date: '2020/02/02', time: '4:00', number: 4 };
    const mockReservations= [{name: 'another name', date: '2020/03/03', time: '5:00', number: 5}]
    const expected = [...mockReservations, mockReservation];

    expect(wrapper.state('reservations')).toEqual([]);

    await wrapper.instance().addReservation(mockReservation);

    expect(wrapper.state('reservations')).toEqual(expected);
  });
})