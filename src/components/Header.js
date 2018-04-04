import React, { Component } from 'react';
import RecipeList from "./RecipeList";
import { auth, googleProvider, facebookProvider } from '../firebase.js';
import '../App.css';
import { Row, Col } from 'react-materialize'

class Header extends Component {
    constructor() {
      super();
      this.state = {
        username: '',
        user: null
      }
    }
  
    logout = () => {
      auth.signOut()
        .then(() => {
          this.setState({
            user: null
          });
        });
    }
  
    loginGoogle = () => {
      auth.signInWithPopup(googleProvider)
        .then((result) => {
          const user = result.user;
          this.setState({
            user
          });
        });
    }
  
    loginFacebook = () => {
      auth.signInWithPopup(facebookProvider)
        .then((result) => {
          const user = result.user;
          this.setState({
            user
          });
        });
    }
  
    componentDidMount() {
      auth.onAuthStateChanged((user) => {
        if (user) {
          this.setState({ user });
        }
      });
    }
  
    render() {
      return (
        <div>
            <div>
              {this.state.user ?
                <div>
                  <Row>
                    
                  </Row>

                  <button onClick={this.logout}>Logout</button>
                  <p>Heippatirallaa {this.state.user.displayName}</p>
                  {/* <RecipeList /> */}
                  <div>
                  <div className="Chefbot-div">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://console.dialogflow.com/api-client/demo/embedded/69d0c8a7-3ee8-444a-afb5-a514fb6a3bf1">
                    </iframe>
                  </div>
                  </div>
                </div>
                :
                <div>
                  <button onClick={this.loginGoogle}>Login with Google</button>
                  <button onClick={this.loginFacebook}>Login with Facebook</button>
                  <p>Loggaa sisään, niin näätki jotain</p>
                </div>
              }
            </div>
        </div>
      );
    }
  }
  
  export default Header;