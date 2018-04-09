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
                    <h1>Profile for {user.displayName}</h1>
                    <p>Username: {user.displayName}</p>
                    {user.email && <p>Email: {user.email}</p> || <p>Email: botlover@gmail.com</p>}

                </div>                                   
            </Row>    
        );
    }
}

export default Profile;