import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/ReceiverForm.css'

class Transaction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 3,
            quantity: props.quantity || '',
            price:  props.price || '',
        };
        this.handleQuantity = this.handleQuantity.bind(this);
        this.handlePrice = this.handlePrice.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handlePrevious = this.handlePrevious.bind(this);
    }

    handlePrice(e) {
        this.setState({
            price: e.target.value
        });
    }

    handleQuantity(e) {
        this.setState({
            quantity: e.target.value
        });
    }

    handleNext(e) {
        e.preventDefault();
        var newDetails = {
            quantity: this.state.quantity,
            price: this.state.price
        }
        console.log("New details submitted", this.state);
        alert('Transaction Detail is added');
        this.props.addDetails('transaction', newDetails);
        this.props.history.push('/display');
    }

    handlePrevious(e) {
        e.preventDefault();
        var newDetails = {
            quantity: this.state.quantity,
            price: this.state.price
        }
        console.log("New details submitted", newDetails);
        this.props.addDetails('transaction', newDetails);
        this.props.history.push('/receiver');
    }

    render() {
        const style = {
            width: '80%'
        };
        return (
            <div>
                <h1 className="heading">Transaction's Details</h1>
                <div className="row">
                    <div className="col-sm-8 col-md-8">
                        <div className="card" >
                            <div className="card-header"></div>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Price</label>
                                        <input value={this.state.price} className="form-control" onChange={this.handlePrice} />
                                    </div>
                                    <div className="form-group">
                                        <label>Quantity</label>
                                        <input value={this.state.quantity} className="form-control" onChange={this.handleQuantity} />
                                    </div>
                                    <div className="btn-group btn-group-sm" id="button-1">
                                        <button className="btn btn-default" onClick={this.handlePrevious}>Previous</button>
                                        <button className="btn btn-primary" onClick={this.handleNext}>Next</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div class="progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={style}>4</div>
                </div>
            </div>
        );
    }
}

export default Transaction;