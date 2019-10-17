import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';

describe('Form', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Form addReservation={jest.fn()} />)
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state when handleChange is called', () => {
    const mockEvent = { target: 
      { name: 'name', 
      value: 'DOG' } };
    const expected = 'DOG';

    wrapper.instance().handleChange(mockEvent);

    expect(wrapper.state('name')).toEqual(expected);
  });

  it('should reset state when resetInputs is called', () => {
    const expected = { name: '', date: '', time: '', number: null };

    wrapper.instance().setState({ 
      name: 'doggo', date: '2020/05/02', time: '8:00', number: 3
    });
    
    wrapper.instance().resetInputs();

    expect(wrapper.state()).toEqual(expected);
  });

  it('should call resetInputs when submitNewReservation is called', () => {
    wrapper.instance().resetInputs = jest.fn();
    wrapper.instance().submitNewReservation({ preventDefault: jest.fn() });

    expect(wrapper.instance().resetInputs).toHaveBeenCalled();
  });

  it('should run submitReservation when the button is clicked', () => {
    wrapper.instance().submitNewReservation = jest.fn();
    wrapper.instance().forceUpdate();
    const mockEvent = { preventDefault: jest.fn() };

    wrapper.find('button').simulate('click', mockEvent);

    expect(wrapper.instance().submitNewReservation).toHaveBeenCalled();
  });
});