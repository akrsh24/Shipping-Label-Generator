import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/ReceiverForm.css'

class ReceiverForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            receiver: {
                name: props.receiver.name ,
                city: props.receiver.city 
            }
        };
        this.handleCity = this.handleCity.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handlePrevious = this.handlePrevious.bind(this);
        this.clear=this.clear(this);

    }

    handleName(e) {
        this.setState({
            receiver: {
                ...this.state.receiver,
                name: e.target.value
            }
        });
    }

    handleCity(e) {
        this.setState({
            receiver: {
                ...this.state.receiver,
                city: e.target.value
            }
        });
    }

    handleNext(e) {
        e.preventDefault();
        var receiverDetails= this.state.receiver
        console.log("New details submitted", receiverDetails);
        this.props.addDetails('receiver', receiverDetails);
        this.props.history.push('/transaction');
    }
    clear(e){
        this.setState({
            receiver: {
                name: '',
                city: '' 
            }
        })
    }

    handlePrevious(e) {
        e.preventDefault();
        var receiverDetails= this.state.receiver
        console.log("New details submitted", receiverDetails);
        this.props.addDetails('receiver', receiverDetails);
        this.props.history.push('/sender');
    }

    render() {
        const style = {
            width: '60%'
        };
        return (
            <div>
                <h1 className="heading">Receiver's Details</h1>
                <div className="row">
                    <div className="col-sm-8 col-md-8">
                        <div className="card" >
                            <div className="card-header"></div>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input value={this.state.receiver.name} className="form-control" onChange={this.handleName} />
                                    </div>
                                    <div className="form-group">
                                        <label>City</label>
                                        <input value={this.state.receiver.city} className="form-control" onChange={this.handleCity} />
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
                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={style}>3</div>
                </div>
            </div>
        );
    }
}

export default ReceiverForm;