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

class Apps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profiles: [
                {
                    name: 'akarsh',
                    age: 23,
                    hobbies: ['coding', 'sleeping']
                },
                {
                    name: 'anushka',
                    age: 24,
                    hobbies: ['ignoring', 'no-replying']
                }
            ]
        }
    }
    render() {
        let profile1=this.state.profiles[0];
        return (
            <div>
              <Profiles name={profile1.name} age={profile1.age} hobbies={profile1.hobbies}/>
            </div>
        );
    }
}

export default Apps;