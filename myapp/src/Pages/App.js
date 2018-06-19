import React, { Component } from 'react';
import { Link } from 'react-router'
class App extends Component {
    render() {
        return (
            <div>
                <header>
                <h1>Welcome to the App </h1>
                    <nav>
                        <Link to='/'>Home</Link>
                        <Link to='/about'>About Us</Link>
                    </nav>
                </header>
                {this.props.children}
                <footer>Our app footer </footer>
            </div>
        );
    }
}

export default App;