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
        price: newDetail.price
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
        price: newDetail.price,
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
      const style={
        width: '100%'
      };
      return (
       
        <div>
          <div className="jumbotron">
            <h1 className="display-3">Shipping Label Generator</h1>
            <div id="displays">
              <p><strong>Sender's Name: {this.state.sname}</strong></p>
              <p><strong>Sender's City: {this.state.scity}</strong></p>
              <p><strong>Receiver's Name: {this.state.rname}</strong></p>
              <p><strong>Receiver's City: {this.state.rcity}</strong></p>
              <p><strong>Quantity: {this.state.quantity}</strong></p>
              <p><strong>Price: {this.state.price}</strong></p>
            </div>
            <div className="btn-group btn-group-sm" id="btn-2">
              <button className="btn btn-primary" onClick={this.lastPrevious}>Previous</button>
              <button className="btn btn-default" onClick={this.lastNext}>Next</button>
            </div>
            <hr className="my-4" />
            <div class="progress">
              <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={style} >4</div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default App;