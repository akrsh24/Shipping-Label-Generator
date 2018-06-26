import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/SenderForm.css'

class SenderForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sender: {
                name: props.sender.name,
                city: props.sender.city 
            }
        };
        this.handleCity = this.handleCity.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.clear=this.clear.bind(this);

    }

    handleName(e) {
        this.setState({
            sender: {
                ...this.state.sender,
                name: e.target.value
            }
        });
    }

    handleCity(e) {
        this.setState({
            sender:{
                ...this.state.sender,
                   city:e.target.value
            }
        });
    }

    clear(e){
        this.setState({
            sender: {
                name: '',
                city: '' 
            }
        })
    }

    handleNext(e) {
        e.preventDefault();
        var senderDetails= this.state.sender
        console.log("New details submitted", senderDetails);
        this.props.addDetails('sender', senderDetails);
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
                                        <input value={this.state.sender.name} className="form-control" onChange={this.handleName} />
                                    </div>
                                    <div className="form-group">
                                        <label>City</label>
                                        <input value={this.state.sender.city} className="form-control" onChange={this.handleCity} />
                                    </div>
                                    <div className="btn-group btn-group-sm" id="button-1">
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
                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={style}>2</div>
                </div>
            </div>
        );
    }
}

export default SenderForm;