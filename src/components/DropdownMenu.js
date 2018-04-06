import React, {Component} from 'react';
import {ButtonToolbar, MenuItem, DropdownButton, Glyphicon} from 'react-bootstrap';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import {auth} from "../firebase";

class DropdownMenu extends Component {
    render() {
        return (
            <div>
                <ButtonToolbar>
                    <DropdownButton>
                        <MenuItem eventKey="1"><Link to='/header'>Header</Link></MenuItem>
                        <MenuItem eventKey="1"><Link to='/profile'>Profile</Link></MenuItem>
                        <MenuItem eventKey="1"><Link to='/images'>Images</Link></MenuItem>
                        <MenuItem divider/>
                        <MenuItem eventKey="4" onClick={this.logout}>Logout</MenuItem>
                    </DropdownButton>
                </ButtonToolbar>
            </div>
        );
    }
}

export default DropdownMenu;

