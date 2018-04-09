import React, { Component } from 'react';
import { Row } from 'react-materialize';
import './App.css';

class Profile extends Component {

    render() {
        const user = this.props.state.user;
        console.log('Profiilipage', user);
        return (
            <Row id="aleksi">
                <div>
                    <p>User: {user.displayName}</p>
                    <p>Email: {user.email}</p>
                </div>                                   
            </Row>    
        );
    }
}

export default Profile;