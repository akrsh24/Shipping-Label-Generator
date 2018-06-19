import React, { Component } from 'react';
import Profiles from './Profiles';
import AddProfile from './AddProfile';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profiles: []
        }
        this.addUser = this.addUser.bind(this);
    }

    componentDidMount() {
        fetch("http://127.0.0.1:8181/profiles/")
            .then(res => res.json())
            .then(data => {
                this.setState({
                    profiles: data
                })
            })
            .catch(err => {
                console.log(err);
            })
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
                <AddProfile addUser={this.addUser} />
            </div>
        )
    }
}

export default App;