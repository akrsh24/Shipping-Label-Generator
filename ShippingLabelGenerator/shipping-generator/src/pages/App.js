import React, { Component } from 'react';
import { Link } from 'react-router'
import './App.css';
import FirstPage from './FirstPage';
import Receiver from './Receiver';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: []
    }
  }



  render() {
    return (
      <div>
        <span><h1>Shipping Label Generator Exercise </h1></span>
        <Sender name={details.sname} city={details.scity} />
        <Receiver name={details.rname} city={details.rcity} />
        <LastPage />
        <button id="start"><Link to='/firstpage'>Start</Link></button>
      </div>
    );
  }
}

export default App;