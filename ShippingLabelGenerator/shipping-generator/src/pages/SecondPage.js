import React, { Component } from 'react';
import { Link } from 'react-router'
import './SecondPage.css';
import 'bootstrap/dist/css/bootstrap.css';

class SecondPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: {
        name: '',
        city: ''
      }
    }
  }

  handleName(e) {
    this.name = e.target.value;
  }

  handleCity(e) {
    this.city = e.target.value;
  }

  handleSubmit(e) {
    e.preventDefault();
    let newDetails = {
      name:this.refs.name.value,
      city:this.refs.city.value
    }
  }

  render() {
    let {detail}= this.state;
    return (
      <div>
        <h1>Sender's Details</h1>
        <div className="row">
          <div className="col-sm-8 col-md-8">
            <div className="card" >
              <div className="card-header"></div>
              <div className="card-body">
                <form onSubmit={(e) => { this.handleSubmit(e) }}>
                  <div className="form-group">
                    <label>Name</label>
                    <input value={detail.name} ref="name" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>City</label>
                    <input value={detail.city} ref="city" className="form-control" />
                  </div>
                  <button className="btn btn-primary">Save</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SecondPage;