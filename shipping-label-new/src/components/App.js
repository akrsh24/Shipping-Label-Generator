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
      step: 1,
      sender: {},
      receiver: {},
      transaction: {}
    };
    this.addDetails = this.addDetails.bind(this);
    this.handleLast=this.handleLast.bind(this);
  }

  addDetails(type, newDetail) {
    if (type === 'sender') {
      this.setState({
        step: 2,
        sender: newDetail
      })
    }
    else if (type === 'receiver') {
      this.setState({
        step: 3,
        receiver: newDetail
      })
    }
    else if (type === 'transaction') {
      this.setState({
        step: 4,
        transaction: newDetail
      })
    }
  }

  handleLast(type) {
    if (type === 'home') {
      this.setState({
        step: 1,
        sender: {},
        receiver: {},
        transaction: {}
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
                <Route path="/sender" component={(props) => <Sender {...props} addDetails={this.addDetails} sender={this.state.sender} />} />
                <Route path="/receiver" component={(props) => <Receiver {...props} addDetails={this.addDetails} receiver={this.state.receiver} />} />
                <Route path="/display" component={(props) => <Display {...props} displayInfo={this.state} handleLast={this.handleLast} />} />
                <Route path="/transaction" component={(props) => <Transaction {...props} addDetails={this.addDetails} transaction={this.state.transaction} />} />
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;