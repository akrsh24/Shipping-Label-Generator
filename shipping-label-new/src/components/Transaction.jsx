import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/ReceiverForm.css'

class Transaction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transaction: {
                quantity: props.transaction.quantity ,
                price: props.transaction.price ,
            }
        };
        this.handleQuantity = this.handleQuantity.bind(this);
        this.handlePrice = this.handlePrice.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handlePrevious = this.handlePrevious.bind(this);
        this.clear=this.clear(this);
    }

    handlePrice(e) {
        this.setState({
            transaction: {
                ...this.state.transaction,
                price: e.target.value
            }
        });
    }

    handleQuantity(e) {
        this.setState({
            transaction: {
                ...this.state.transaction,
                quantity: e.target.value
            }
        });
    }

    handleNext(e) {
        e.preventDefault();
        var transactionDetails = this.state.transaction
        console.log("New details submitted", transactionDetails);
        this.props.addDetails('transaction', transactionDetails);
        this.props.history.push('/display');
    }
    clear(e){
        this.setState({
            transaction: {
                price: '',
                quantity: '' 
            }
        })
    }

    handlePrevious(e) {
        e.preventDefault();
        var transactionDetails = this.state.transaction
        console.log("New details submitted", transactionDetails);
        this.props.addDetails('transaction', transactionDetails);
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
                                        <input value={this.state.transaction.price} className="form-control" onChange={this.handlePrice} />
                                    </div>
                                    <div className="form-group">
                                        <label>Quantity</label>
                                        <input value={this.state.transaction.quantity} className="form-control" onChange={this.handleQuantity} />
                                    </div>
                                    <div className="btn-group btn-group-sm" id="button-1">
                                        <button className="btn btn-default" onClick={this.handlePrevious}>Previous</button>
                                        <button className="btn btn-primary" onClick={this.handleNext}>Next</button>
                                        <button className="btn btn-danger" onClick={this.clear}>Clear</button>
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