import React, { Component } from "react";
import "../App.css";

class Username extends Component {
  constructor(props) {
    super(props);
    this.state = {
        username: this.props.username
    };
  }

  render() {
    return <div className="Username">{this.state.username}</div>;
  }
}

export default Username;
