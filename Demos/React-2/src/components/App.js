import React, { Component } from 'react';
import Profiles from './Profiles';
import AddProfile from './AddProfile';

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
        this.addUser = this.addUser.bind(this);
    }

    addUser(newProfile) {
        this.setState({
            profiles: this.state.profiles.concat([newProfile])
        })
    }

    render() {
        let profiles = this.state.profiles.map(profile => {
            return (
                <div>
                    <Profiles name={profile.name} age={profile.age} hobbies={profile.hobbies} />
                </div>
            );
        })

        return (
            <div>{profiles}
            <AddProfile addUser={this.addUser}/>   
            </div>
        )
    }
}

export default Apps;