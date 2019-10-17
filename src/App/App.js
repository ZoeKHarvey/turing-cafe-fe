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


// render() {
//   const { ideas, isLoading, error } = this.state;
//   return (
//     <main className="App">
//       <h1>IdeaBox</h1>
//       <Form addIdea={this.addIdea} />
//       {isLoading && <img
//         src={'https://www.gearbubble.com/assets/loader_large.gif'}
//         alt={''}
//       />
//       }
//       {error && <h2>{error}</h2>}
//       <Ideas
//         ideas={ideas}
//         removeIdea={this.removeIdea}
//       />
//     </main>
//   )
// }
