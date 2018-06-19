import React, { Component } from 'react';

class Profiles extends Component {
    render() {
        let hobbies = this.props.hobbies.map(hobby => {
            return <li>{hobby}</li>
        })

        return (
            <div>
                <h3>{this.props.name}</h3>
                <p>{this.props.age}</p>
                <p>{hobbies}</p>
            </div>
        )
    }
}
export default Profiles;