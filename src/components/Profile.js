import React, { Component } from 'react';
import '../App.css';
import { ButtonToolbar, MenuItem, DropdownButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { auth } from '../firebase.js';
// import DropdownMenu from "./DropdownMenu";

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: null
        };
    }

    componentDidMount() {
        auth.onAuthStateChanged(user => {
            user
                ? this.setState(() => ({ user }))
                : this.setState(() => ({ user: null }))
        });
    }

    render() {
        console.log('navissa', this.state.user);
        return (


            <div>
                {this.state.user
                    ?
                    <div>
                        {/*<DropdownMenu />*/}
                        <ButtonToolbar>
                            <DropdownButton>
                                <MenuItem eventKey="1"><Link to='/header'>Header</Link></MenuItem>
                                <MenuItem eventKey="1"><Link to='/profile'>Profile</Link></MenuItem>
                                <MenuItem eventKey="1"><Link to='/images'>Images</Link></MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey="4" onClick={this.props.logout}>Logout</MenuItem>
                            </DropdownButton>
                        </ButtonToolbar>
                        <p className="signin">User profile for {this.state.user.displayName}.</p>
                        <p className="signin">Email: {this.state.user.lastSignInTime}</p>
                        {/*                <ul>
                    <li><Link to='/header'>Header</Link></li>
                    <li><Link to='/profile'>Profile</Link></li>
                    <li><Link to='/images'>Images</Link></li>
                </ul>*/}
                    </div>




                    :
                    <p></p>
                }
            </div>
        );
    }
}

export default Profile;