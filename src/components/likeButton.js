import React, { Component } from "react";
import { Image } from "react-bootstrap";
import "../App.css";

class Likebutton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Image src={require(`../likeicon.svg`)} className="LikeIcon" />
    );
  }
}

export default Likebutton;
