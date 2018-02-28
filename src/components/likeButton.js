import React, { Component } from "react";
import { Image } from "react-bootstrap";
import "../App.css";

class LikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Image 
        src={require(`../likeicon.svg`)} 
        className="LikeButton"
        onClick={() => this.props.onClick()}
         />
    );
  }
}

export default LikeButton;
