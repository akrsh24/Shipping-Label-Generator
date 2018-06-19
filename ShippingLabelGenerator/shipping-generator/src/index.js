import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App'
import FirstPage from './pages/FirstPage'
import { Route, Router, browserHistory } from 'react-router'


ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={App} />
        <Route path='/firstpage' component={FirstPage} />
    </Router>
    , document.getElementById('root'));

