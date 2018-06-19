import React, { Component } from 'react';
import { Link } from 'react-router'
import './App.css'; 
import FirstPage from './FirstPage';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      details:[]
    }
  }
  render() {
    return (
      <div>
         <span><h1>Shipping Label Generator Exercise </h1></span>
         <FirstPage/>
         <SecondPage/>
         <LastPage/>
        <button id="start"><Link to='/firstpage'>Start</Link></button>
      </div>
    );
  }
}

export default App;