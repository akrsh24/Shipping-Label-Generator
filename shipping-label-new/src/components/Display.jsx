import React, { Component } from 'react';
import '../css/Display.css'

class Display extends Component {

    constructor(props) {
        super(props);
        this.state = {
            details: props.displayInfo
        }
        this.handleNext = this.handleNext.bind(this);
        this.handlePrevious = this.handlePrevious.bind(this);
        console.log(props.displayInfo);
    }
    handleNext(e) {
         e.preventDefault();
        this.props.handleLast('home');
        this.props.history.push('/');
    }
    handlePrevious(e) {
        e.preventDefault();
        this.props.history.push('/receiver');
    }

    render() {
        const style = {
            width: '100%'
        };
        console.log(this.state.details);
        return (
            <div>
                    <div className="jumbotron" id="start">
                        <h1 className="display-4" id="heading">Shipping Label Generator</h1>
                        <div id="displays">
                            <div>
                                <p><strong>Sender's Name: {this.state.details.sender.name}</strong></p>
                                <p><strong>Sender's City: {this.state.details.sender.city}</strong></p>
                                <p><strong>Receiver's Name: {this.state.details.receiver.name}</strong></p>
                                <p><strong>Receiver's City: {this.state.details.receiver.city}</strong></p>
                                <p><strong>Price: {this.state.details.transaction.price}</strong></p>
                                <p><strong>Quantity: {this.state.details.transaction.quantity}</strong></p>
                            </div >
                        </div>
                        <div className="btn-group btn-group-sm" id="btn-2">
                            <button className="btn btn-primary" onClick={this.handlePrevious}>Previous</button>
                            <button className="btn btn-default" onClick={this.handleNext}>Next</button>
                        </div>
                        <hr className="my-4" />
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={style} >5</div>
                        </div>
                    </div>
            </div>
        );
    }
}

export default Display;