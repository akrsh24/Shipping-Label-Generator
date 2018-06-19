import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css'

class AddProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            hobby: ''
        }
        this.handleName = this.handleName.bind(this);
        this.handleAge = this.handleAge.bind(this);
        this.handleHobby = this.handleHobby.bind(this);
        this.handleClick=this.handleClick.bind(this);
    }

    handleName(e) {
        this.setState({
            name: e.target.value
        })
    }

    handleAge(e) {
        this.setState({
            age: e.target.value
        })
    }

    handleHobby(e) {
        this.setState({
            hobby: e.target.value
        })
    }

    handleClick(e){
        var newProfile={
            name:this.state.name,
            age:this.state.age,
            hobbies:[this.state.hobby]
        }

        this.props.addUser(newProfile);
    }

    render() {
        return (
            <div>
                <p>Add a new Profile</p>
                <input onChange={this.handleName} value={this.state.name} />
                <input onChange={this.handleAge} value={this.state.age} />
                <input onChange={this.handleHobby} value={this.state.hobby} />
                <button onClick={this.handleClick}>Add</button>
            </div>
        );
    }
}

export default AddProfile;