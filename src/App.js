import React, { Component } from 'react';
import RecipeList from "./components/RecipeList";
import { auth, googleProvider, facebookProvider } from './firebase.js';
import './App.css';


class App extends Component {
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
    console.log('katotaan sisään', this.state.user);
    return (
      <div>
          <div>
            <h3>Testi</h3>
            {this.state.user ?
              <div>
                <button onClick={this.logout}>Logout</button>
                <p>Heippatirallaa {this.state.user.displayName}</p>
              </div>
              :
              <div>
                <button onClick={this.loginGoogle}>Login with Google</button>
                <button onClick={this.loginFacebook}>Login with Facebook</button>
              </div>
            }
          </div>
          <RecipeList/>
      </div>
    );
  }
}

export default App;
