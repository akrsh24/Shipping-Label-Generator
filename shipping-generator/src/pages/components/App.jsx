import React, { Component } from 'react';
import '../css/App.css';
import Sender from './Sender'
import Receiver from './Receiver';
import Transaction from './Transaction';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      sname: " ",
      scity: " ",
      rname: " ",
      rcity: " ",
      quantity: " ",
      price: " "
    }
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.lastNext = this.lastNext.bind(this);
    this.lastPrevious = this.lastPrevious.bind(this);

  }

  next(type, newDetail) {
    if (type === 'sender') {
      this.setState({
        step: this.state.step + 1,
        sname: newDetail.name,
        scity: newDetail.city
      })
    }
    else if (type === 'receiver') {
      this.setState({
        step: this.state.step + 1,
        rname: newDetail.name,
        rcity: newDetail.city
      })
    }
    else if (type === 'transaction') {
      this.setState({
        step: this.state.step + 1,
        quantity: newDetail.quantity,
        price:newDetail.price
      })
    }
  }

  previous(type, newDetail) {
    if (type === 'sender') {
      this.setState({
        step: this.state.step - 1,
        sname: newDetail.name,
        scity: newDetail.city
      })
    }
    else if (type === 'receiver') {
      this.setState({
        step: this.state.step - 1,
        rname: newDetail.name,
        rcity: newDetail.city
      })
    }
    else if (type === 'transaction') {
      this.setState({
        step: this.state.step - 1,
        price:newDetail.price,
        quantity: newDetail.quantity
      })
    }
  }

  lastPrevious() {
    this.setState({
      step: this.state.step - 1
    })
  }

  lastNext() {
    this.setState({
      step: 1
    })
  }

  render() {
    if (this.state.step === 1) {
      return (
        <div>
          <Sender next={this.next} />

        </div>
      );
    }
    else if (this.state.step === 2) {
      return (
        <div>
          <Receiver next={this.next} previous={this.previous} />
        </div>
      );
    }
    else if (this.state.step === 3) {
      return (
        <div>
          <Transaction next={this.next} previous={this.previous} />
        </div>
      );
    }
    else if (this.state.step === 4) {
      return (
        <div>
          <div class="jumbotron">
            <h1 class="display-4">Shipping Label Generator</h1>
            <div id="displays">
              <p>Sender's Name: {this.state.sname}</p>
              <p>Sender's City: {this.state.scity}</p>
              <p>Receiver's Name: {this.state.rname}</p>
              <p>Receiver's City: {this.state.rcity}</p>
              <p>Quantity: {this.state.quantity}</p>
              <p>Price: {this.state.price}</p>
            </div>
            <hr class="my-4" />
            <p><button className="btn btn-primary" onClick={this.lastPrevious}>Previous</button>
            <button className="btn btn-danger" onClick={this.lastNext}>Next</button></p>
          </div>
        </div>
      );
    }
  }
}

export default App;