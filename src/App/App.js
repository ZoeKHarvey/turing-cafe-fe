import React, { Component } from 'react';
import './App.css';
import { getReservations, postReservation, deleteReservation} from '../apiCalls';
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

  addReservation = newReservation => {
    postReservation(newReservation)
      .then(res => this.setState({
        reservations: [...this.state.reservations, res]
      }))
      .catch(error => this.setState({ error: error.message }))
  }

  render() {
    {console.log(this.state)}
    const { reservations, isLoading } = this.state;
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
        </div>
        <div className='resy-container'>
          <ReservationContainer reservations={reservations}/>
        </div>
      </div>
    )
  }
}

export default App;

