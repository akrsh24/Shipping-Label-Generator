import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/SenderForm.css'

class SenderForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            name: props.sname|| '',
            city: props.scity|| '',
        };
        this.handleCity = this.handleCity.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleNext = this.handleNext.bind(this);
    }

    handleName(e) {
        this.setState({
            name: e.target.value
        });
    }

    handleCity(e) {
        this.setState({
            city: e.target.value
        });
    }

    handleNext(e) {
        e.preventDefault();
        var newDetails = {
            name: this.state.name,
            city: this.state.city
        }
        console.log("New details submitted", this.state);
        alert('Sender Detail is added');
        this.props.addDetails('sender', newDetails);
        this.props.history.push('/receiver');
    }

    render() {
        const style = {
            width: '40%'
        };
        return (
            <div>
                <h1 className="heading">Sender's Details</h1>
                <div className="row">
                    <div className="col-sm-8 col-md-8">
                        <div className="card" >
                            <div className="card-header"></div>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input value={this.state.name} className="form-control" onChange={this.handleName} />
                                    </div>
                                    <div className="form-group">
                                        <label>City</label>
                                        <input value={this.state.city} className="form-control" onChange={this.handleCity} />
                                    </div>
                                    <div className="btn-group btn-group-sm" id="button-1">
                                        <button className="btn btn-primary" onClick={this.handleNext}>Next</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div class="progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={style}>2</div>
                </div>
            </div>
        );
    }
}

export default SenderForm;