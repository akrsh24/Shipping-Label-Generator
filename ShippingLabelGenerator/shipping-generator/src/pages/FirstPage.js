import React, { Component } from 'react';
import { Link } from 'react-router'
import './FirstPage.css';
import 'bootstrap/dist/css/bootstrap.css';
import { saveDetails } from './saveDetails'
import {
  withRouter
} from "react-router-dom";

class FirstPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details:[],
      name: '',
      city: ''
    }

    this.handleCity = this.handleCity.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addUser = this.addUser.bind(this);
  }

  addUser(newDetails) {
   this.setState({
       details:this.state.details.concat([newDetails])
   })
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log("New details submitted");
    let newDetails = {
      name: this.refs.name.value,
      city: this.refs.city.value
    }
    console.log(newDetails);
    this.addUser(newDetails);
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

  render() {

    return (
      <div>
        <h1>Sender's Details</h1>
        <div className="row">
          <div className="col-sm-8 col-md-8">
            <div className="card" >
              <div className="card-header"></div>
              <div className="card-body">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label>Name</label>
                    <input value={this.state.name} ref="name" className="form-control" onChange={this.handleName} />
                  </div>
                  <div className="form-group">
                    <label>City</label>
                    <input value={this.state.city} ref="city" className="form-control" onChange={this.handleCity} />
                  </div>
                  <button type="submit" className="btn btn-primary" >Save</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FirstPage;