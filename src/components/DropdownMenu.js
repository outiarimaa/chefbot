import React, { Component } from 'react';
import { ButtonToolbar, MenuItem, DropdownButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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

