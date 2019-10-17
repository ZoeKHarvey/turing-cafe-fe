import React, { Component } from 'react';
import './App.css';
import { getReservations, postReservations, deleteReservations} from '../apiCalls';
import ReservationContainer from '../ReservationContainer/ReservationContainer'

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: [],
      isLoading: true
    }
  }

  componentDidMount() {
    getReservations()
      .then(reservations => this.setState({ reservations, isLoading: false }))
      .catch(error => this.setState({
        isLoading: false,
        error: error.message
      })
    );
  }


  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
        </div>
        <div className='resy-container'>
          <ReservationContainer />
        </div>
      </div>
    )
  }
}

export default App;
