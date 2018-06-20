import React, { Component } from 'react';
import '../css/Sender.css';
import 'bootstrap/dist/css/bootstrap.css';

class Sender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      city: ''
    }
    this.handleCity = this.handleCity.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleNext=this.handleNext.bind(this);
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
    console.log("New details submitted");
    console.log(this.props.addUser);
    this.props.next('sender',newDetails);
  }

  render() {

    return (
      <div>
        <h1>Sender's Details</h1>
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
                  <button className="btn btn-primary" onClick={this.handleNext}>Next</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sender;