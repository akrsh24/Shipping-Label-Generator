import React from 'react';
import ReactDOM from 'react-dom';
import { Route, IndexRoute, Router, browserHistory } from 'react-router'
import Home from './Pages/Home'
import About from './Pages/About'
import App from './Pages/App'


ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={App} />
            <IndexRoute component={Home}/>
            <Route path='/home' component={Home} />
            <Route path='/about' component={About} />
    </Router>
    , document.getElementById('root'));
