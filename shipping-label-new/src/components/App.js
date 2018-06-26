import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import 'font-awesome/css/font-awesome.css';
import Home from './Home'
import Sender from './SenderForm';
import Receiver from './ReceiverForm';
import Display from './Display';
import Transaction from './Transaction';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details={  
      sname: '',
      scity: '',
      rname: '',
      rcity: '',
      quantity: '',
      price: ''
    }
  }

    this.addDetails = this.addDetails.bind(this);
  }
  addDetails(type, newDetail) {
    if (type === 'sender') {
      this.setState({
        sname: newDetail.name,
        scity: newDetail.city
      })
    }
    else if (type === 'receiver') {
      this.setState({
        rname: newDetail.name,
        rcity: newDetail.city
      })
    }
    else if (type === 'transaction') {
      this.setState({
        quantity: newDetail.quantity,
        price: newDetail.price
      })
    }
  }

  render() {
    return (
      <Router >
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Shipping-Generator</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/"> Home <span class="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sender"><i className="fa fa-user-plus" ></i>Add Details</Link>
                </li>
              </ul>
            </div>
          </nav>
          <div className="container" style={{ 'margin-top': '2%' }}>
            <div className="well">
              <div>
                <Route exact path="/" component={Home} />
                <Route path="/sender" component={(props) => <Sender {...props} addDetails={this.addDetails} sname={this.state.sname} scity={this.state.scity} />} />
                <Route path="/receiver" component={(props) => <Receiver {...props} addDetails={this.addDetails} rname={this.state.rname} rcity={this.state.rcity} />} />
                <Route path="/display" component={(props) => <Display {...props} displayInfo={this.state} />} />
                <Route path="/transaction" component={(props) => <Transaction {...props} addDetails={this.addDetails} price={this.state.price} quantity={this.state.quantity} />} />
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;