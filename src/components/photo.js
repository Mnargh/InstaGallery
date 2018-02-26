import React, { Component } from "react";
import { Image } from "react-bootstrap";
import "../App.css";

class Photo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Image src={require(`../images/${this.props.photo}`)} className="Photo" />;
  }
}

export default Photo;
