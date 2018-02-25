import React, { Component } from "react";
import "../App.css";

class Username extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return <div className="Username">{this.props.username}</div>;
  }
}

export default Username;
