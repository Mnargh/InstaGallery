import React, { Component } from "react";
import "../App.css";

class Description extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Description">{this.props.description}</div>
    );
  }
}

export default Description;
