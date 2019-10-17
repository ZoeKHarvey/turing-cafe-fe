import React, { Component } from 'react';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      number: null,
      id: null,
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value})
    console.log('handle change firing', this.state)
  }

  submitNewReservation = e => {
    e.preventDefault();
    const { addReservation } = this.props;
    const newReservation = { ...this.state, id: Date.now()};
    addReservation(newReservation);
    this.resetInputs();
  }

  resetInputs = () => {
    this.setState({ 
      name: '',
      date: '',
      time: '',
      number: null,
      id: null,
    })
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Name'
          value={this.state.name}
          name='name'
          onChange={this.handleChange}
        />
        <input
          type='date'
          placeholder='Date'
          value={this.state.date}
          name='date'
          onChange={this.handleChange}
        />
        <input
          type='time'
          placeholder='Time'
          value={this.state.time}
          name='time'
          onChange={this.handleChange}
        />
        <input
          type='number'
          placeholder='Number of Guests'
          value={this.state.number}
          name='number'
          onChange={this.handleChange}
        />
        <button 
          onClick={this.submitNewReservation}
        >
          Submit!
        </button>
      </form>
    )
  }
}
