import React, { Component } from 'react';
import '../css/Sender.css';
import 'bootstrap/dist/css/bootstrap.css';

class Transaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: '',
      price: ''
    }
    this.handleQuantity = this.handleQuantity.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
  }

  handleQuantity(e) {
    this.setState({
      quantity: e.target.value
    });
  }

  handlePrice(e) {
    this.setState({
      price: e.target.value
    });
  }

  handleNext(e) {
    e.preventDefault();
    var newDetails = {
      quantity: this.state.quantity,
      price: this.state.price
    }
    console.log("Next button");
    console.log(this.props.addUser);
    this.props.next('transaction', newDetails);
  }

  handlePrevious(e) {
    e.preventDefault();
    var newDetails = {
        quantity: this.state.quantity,
        price: this.state.price
    }
    console.log("Previous button");
    console.log(this.props.addUser);
    this.props.previous('transaction', newDetails);
  }

  render() {

    return (
      <div>
        <h1>Transaction's Details</h1>
        <div className="row">
          <div className="col-sm-8 col-md-8">
            <div className="card" >
              <div className="card-header"></div>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>Quantity</label>
                    <input value={this.state.quantity} className="form-control" onChange={this.handleQuantity} />
                  </div>
                  <div className="form-group">
                    <label>Price</label>
                    <input value={this.state.price} className="form-control" onChange={this.handlePrice} />
                  </div>
                  <div>
                    <button className="btn btn-primary" onClick={this.handlePrevious}>Previous</button>
                    <button className="btn btn-primary" onClick={this.handleNext}>Next</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Transaction;