import React, { Component } from "react";
import "./App.css";

class ChefBot extends Component {
  constructor() {
    super();
    this.state = {
      shown: true
    };
  }

  toggle() {
    this.setState({
      shown: !this.state.shown
    });
  }

  render() {
    let shown = {
      display: this.state.shown ? "block" : "none"
    };
    return (
      <div>
        <a className="toggle-a" onClick={this.toggle.bind(this)}>
          <img
            className="toggleimage"
            alt="chefbot"
            src="http://fileserver.imagebucket.net/i/00000/5nnvtdsihay4_t.jpg"
          />
        </a>
        <p>Show/Hide</p>
        <div style={shown}>
          <div className="Chefbot-div">
            <iframe
              title="chefbot"
              width="100%"
              height="100%"
              src="https://console.dialogflow.com/api-client/demo/embedded/69d0c8a7-3ee8-444a-afb5-a514fb6a3bf1"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ChefBot;
