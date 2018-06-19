import React, { Component } from 'react';

class Outer extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
               <h3>Some information</h3> 
               {this.props.children}
               <p>Some more information</p>
            </div>
        );
 
    }
}

export default Outer;